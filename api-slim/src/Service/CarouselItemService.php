<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;
use Psr\Http\Message\UploadedFileInterface;

final class CarouselItemService
{
    private string $uploadDirectory;

    public function __construct(private Connection $conn, string $uploadDirectory = __DIR__ . '/../../public/uploads/carousel')
    {
        $this->uploadDirectory = $uploadDirectory;
        
        // Create upload directory if it doesn't exist
        if (!is_dir($this->uploadDirectory)) {
            mkdir($this->uploadDirectory, 0755, true);
        }
    }

    public function getAll(): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, image, title, subtitle, active, `sequence`, websiteId as websiteId
             FROM carousel_items
             ORDER BY `sequence` ASC'
        );
    }

    public function getOne(string $id): array
    {
        $result = $this->conn->fetchAssociative(
            'SELECT id, image, title, subtitle, active, `sequence`, websiteId as websiteId 
             FROM carousel_items 
             WHERE id = ?',
             [$id]
        );

        if (!$result) {
            throw new Exception('Carousel item not found');
        }
        return $result;
    }

    /**
     * Get carousel item with ownership verification
     */
    public function getOneWithOwnership(string $id, string $userId): ?array
    {
        return $this->conn->fetchAssociative(
            'SELECT ci.* FROM carousel_items ci 
             INNER JOIN websites w ON ci.websiteId = w.id 
             WHERE ci.id = ? AND w.userId = ?',
            [$id, $userId]
        );
    }

    /**
     * Get all carousel items for a specific website with optional active filter
     */
    public function getByWebsiteId(string $websiteId, bool $activeOnly = false): array
    {
        $sql = 'SELECT id, image, title, subtitle, `sequence`, active, websiteId as websiteId
                FROM carousel_items 
                WHERE websiteId = ?';
        
        $params = [$websiteId];
        
        if ($activeOnly) {
            $sql .= ' AND active = 1';
        }
        
        $sql .= ' ORDER BY `sequence` ASC';
        
        return $this->conn->fetchAllAssociative($sql, $params);
    }

    public function create(array $data): array
    {
        
        

        $this->conn->insert('carousel_items', $data);
        $id = $this->conn->lastInsertId();
        
        return $this->getOne((string)$id);
    }

    public function update(string $id, array $data): array
    {
        
        $this->conn->update('carousel_items', $data, ['id' => $id]);
        
        return $this->getOne($id);
    }

    public function delete(string $id): int
    {
        // Get carousel item info before deletion to remove associated image
        $item = $this->getOne($id);
        if ($item && $item['image']) {
            $filename = basename($item['image']);
            $filePath = $this->uploadDirectory . DIRECTORY_SEPARATOR . $filename;
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }



        return $this->conn->delete('carousel_items', ['id' => $id]);
    }

    /**
     * Verify website ownership
     */
    public function verifyWebsiteOwnership(string $websiteId, string $userId): ?array
    {
        return $this->conn->fetchAssociative(
            'SELECT w.* FROM websites w 
             WHERE w.id = ? AND w.userId = ?',
            [$websiteId, $userId]
        );
    }

    /**
     * Get website by ID
     */
    public function getWebsite(string $websiteId): ?array
    {
        return $this->conn->fetchAssociative(
            'SELECT * FROM websites WHERE id = ?',
            [$websiteId]
        );
    }

    /**
     * Get maximum order value for a website
     */
    public function getMaxsequence(string $websiteId): int
    {
        $result = $this->conn->fetchAssociative(
            'SELECT MAX(`sequence`) as max_order FROM carousel_items WHERE websiteId = ?',
            [$websiteId]
        );
        
        return (int)($result['max_order'] ?? 0);
    }

    public function handleFileUpload(UploadedFileInterface $uploadedFile): array
    {
        $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
        $basename = bin2hex(random_bytes(8));
        $filename = sprintf('%s.%0.8s', $basename, $extension);
        
        // Validate file type
        $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        $mimeType = $uploadedFile->getClientMediaType();
        
        if (!in_array($mimeType, $allowedMimeTypes)) {
            throw new Exception('Invalid file type. Allowed types: JPEG, PNG, GIF, WEBP');
        }

        // Validate file size (max 10MB)
        $maxFileSize = 10 * 1024 * 1024;
        if ($uploadedFile->getSize() > $maxFileSize) {
            throw new Exception('File size exceeds maximum limit of 10MB');
        }

        // Get image dimensions
        $tempFile = $uploadedFile->getStream()->getMetadata('uri');
        list($width, $height) = getimagesize($tempFile);

        // Move uploaded file
        $uploadedFile->moveTo($this->uploadDirectory . DIRECTORY_SEPARATOR . $filename);

        // Generate image URL
        $baseUrl = $_ENV['BASE_URL'] ?? 'http://localhost:8000';
        $imageUrl = $baseUrl . '/uploads/carousel/' . $filename;

        return [
            'filename' => $filename,
            'src' => $imageUrl,
            'filesize' => $uploadedFile->getSize(),
            'mimetype' => $mimeType,
            'width' => $width,
            'height' => $height
        ];
    }

    /**
     * Process and optimize image (basic implementation - consider using intervention/image for advanced processing)
     */
    public function processAndOptimizeImage(UploadedFileInterface $uploadedFile): array
    {
        // For now, we'll use basic file handling
        // In production, you should install intervention/image or similar for proper image optimization
        // Example with intervention/image:
        /*
        $image = Image::make($uploadedFile->getStream()->getMetadata('uri'));
        $image->resize(1920, 1080, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->encode('jpg', 85);
        */
        
        return $this->handleFileUpload($uploadedFile);
    }

    /**
     * Cleanup uploaded file
     */
    public function cleanupUploadedFile(UploadedFileInterface $uploadedFile): void
    {
        // Clean up temporary file if it exists
        $tempFile = $uploadedFile->getStream()->getMetadata('uri');
        if ($tempFile && file_exists($tempFile)) {
            unlink($tempFile);
        }
    }

    public function deleteFile(string $filename): bool
    {
        $filePath = $this->uploadDirectory . DIRECTORY_SEPARATOR . $filename;
        if (file_exists($filePath)) {
            return unlink($filePath);
        }
        return false;
    }

    public function getUploadDirectory(): string
    {
        return $this->uploadDirectory;
    }

    /**
     * Bulk update carousel items order
     */
    public function bulkUpdateOrder(array $items): void
    {
        foreach ($items as $item) {
            if (isset($item['id']) && isset($item['order'])) {
                $this->conn->update(
                    'carousel_items',
                    ['order' => (int)$item['order']],
                    ['id' => $item['id']]
                );
            }
        }
    }

    /**
     * Get carousel items with website details
     */
    public function getWithWebsiteDetails(string $id): ?array
    {
        return $this->conn->fetchAssociative(
            'SELECT ci.*, w.name as website_name, w.userId 
             FROM carousel_items ci 
             INNER JOIN websites w ON ci.websiteId = w.id 
             WHERE ci.id = ?',
            [$id]
        );
    }

    /**
     * Toggle carousel item active status
     */
    public function toggleActive(string $id): array
    {
        $item = $this->getOne($id);
        $newActive = !$item['active'];
        
        $this->conn->update(
            'carousel_items',
            ['active' => $newActive ? 1 : 0],
            ['id' => $id]
        );
        
        return $this->getOne($id);
    }

    /**
     * Count carousel items for a website
     */
    public function countByWebsite(string $websiteId): int
    {
        $result = $this->conn->fetchAssociative(
            'SELECT COUNT(*) as count FROM carousel_items WHERE websiteId = ?',
            [$websiteId]
        );
        
        return (int)($result['count'] ?? 0);
    }
}