<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;
use Psr\Http\Message\UploadedFileInterface;

final class ImageService
{
    private string $uploadDirectory;

    public function __construct(private Connection $conn, string $uploadDirectory = __DIR__ . '/../../public/uploads/images')
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
            'SELECT id, src, width, height, filename, filesize, mimetype,  websiteId
             FROM images
             ORDER BY id ASC'
        );
    }

    public function getOne(string $id): array
    {
        $result = $this->conn->fetchAssociative(
            'SELECT id, src, width, height, filename, filesize, mimetype,  websiteId 
             FROM images 
             WHERE id = ?',
            [$id]
        );

        if (!$result) {
            throw new Exception('Image not found');
        }
        return $result;
    }

    /**
     * Get all images for a specific website
     */
    public function getByWebsiteId(string $websiteId): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, src, width, height, filename, filesize, mimetype, websiteId
             FROM images 
             WHERE websiteId = ? 
             ORDER BY createdAt DESC',
            [$websiteId]
        );
    }

    public function create(array $data): int|string
    {
        if (!isset($data['updatedAt'])) {
            $data['updatedAt'] = date('Y-m-d H:i:s');
        }

        return $this->conn->insert('images', $data);
    }

    public function update(string $id, array $data): int|string
    {

        if (!isset($data['updatedAt'])) {
            $data['updatedAt'] = date('Y-m-d H:i:s');
        }

        return $this->conn->update('images', $data, ['id' => $id]);
    }

    public function delete(string $id): int|string
    {
        // Get image info before deletion to remove associated file
        $image = $this->getOne($id);
        if ($image && $image['src']) {
            $filename = basename($image['src']);
            $filePath = $this->uploadDirectory . DIRECTORY_SEPARATOR . $filename;
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }

        return $this->conn->delete('images', ['id' => $id]);
    }

    public function handleFileUpload(UploadedFileInterface $uploadedFile): array
    {
        $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
        $basename = bin2hex(random_bytes(8));
        $filename = sprintf('%s.%0.8s', $basename, $extension);

        // Validate file type
        $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        $mimeType = $uploadedFile->getClientMediaType();

        if (!in_array($mimeType, $allowedMimeTypes)) {
            throw new Exception('Invalid file type. Allowed types: JPEG, PNG, GIF, WEBP, SVG');
        }

        // Validate file size (max 10MB)
        $maxFileSize = 10 * 1024 * 1024;
        if ($uploadedFile->getSize() > $maxFileSize) {
            throw new Exception('File size exceeds maximum limit of 10MB');
        }

        // Get image dimensions (for raster images only)
        $width = null;
        $height = null;
        $tempFile = $uploadedFile->getStream()->getMetadata('uri');

        if (in_array($mimeType, ['image/jpeg', 'image/png', 'image/gif', 'image/webp'])) {
            list($width, $height) = getimagesize($tempFile);
        }
        $BASE_URL =  getenv('BASE_URL') ?: 'http://172.16.18.104:8080';

        // Move uploaded file
        $uploadedFile->moveTo($this->uploadDirectory . DIRECTORY_SEPARATOR . $filename);

        return [
            'filename' => $filename,
            'src' => $BASE_URL . '/uploads/images/' . $filename,
            'filesize' => $uploadedFile->getSize(),
            'mimetype' => $mimeType,
            'width' => $width,
            'height' => $height
        ];
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
}
