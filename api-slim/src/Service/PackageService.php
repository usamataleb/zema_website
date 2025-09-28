<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;
use Psr\Http\Message\UploadedFileInterface;

final class PackageService
{
    private string $uploadDirectory;

    public function __construct(private Connection $conn, string $uploadDirectory = __DIR__ . '/../../public/uploads/packages')
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
            'SELECT id, name, price, location, src, description, websiteId as websiteId
             FROM packages
             ORDER BY id ASC'
        );
    }

    public function getOne(string $id): array
    {
        $result = $this->conn->fetchAssociative(
            'SELECT id, name, price, location, src, description, websiteId as websiteId 
             FROM packages 
             WHERE id = ?',
             [$id]
        );

        if (!$result) {
            throw new Exception('Package not found');
        }
        return $result;
    }

    /**
     * Get all packages for a specific website
     */
    public function getByWebsiteId(string $websiteId): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, name, price, location, src, description, websiteId as websiteId
             FROM packages 
             WHERE websiteId = ? 
             ORDER BY createdAt DESC',
            [$websiteId]
        );
    }

public function create(array $data): int
{
    
    $this->conn->insert('packages', $data);
    return (int)$this->conn->lastInsertId();
}

    public function update(string $id, array $data): int|string
    {
        
        return $this->conn->update('packages', $data, ['id' => $id]);
    }

    public function delete(string $id): int|string
    {
        // Get package info before deletion to remove associated image
        $package = $this->getOne($id);
        if ($package && $package['src']) {
            $filename = basename($package['src']);
            $filePath = $this->uploadDirectory . DIRECTORY_SEPARATOR . $filename;
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }

        return $this->conn->delete('packages', ['id' => $id]);
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

        // Validate file size (max 5MB)
        $maxFileSize = 5 * 1024 * 1024;
        if ($uploadedFile->getSize() > $maxFileSize) {
            throw new Exception('File size exceeds maximum limit of 5MB');
        }

        // Get image dimensions
        $tempFile = $uploadedFile->getStream()->getMetadata('uri');
        list($width, $height) = getimagesize($tempFile);

        // Move uploaded file
        $uploadedFile->moveTo($this->uploadDirectory . DIRECTORY_SEPARATOR . $filename);

        $baseUrl = $_ENV['BASE_URL'] ?? 'http://localhost:8000';
        $imageUrl = $baseUrl . '/uploads/packages/' . $filename;

        return [
            'filename' => $filename,
            'src' => $imageUrl,
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

    /**
     * Get package by ID with websiteId field name (for internal use)
     */
    private function getOneInternal(string $id): array
    {
        $result = $this->conn->fetchAssociative(
            'SELECT id, name, price, location, src, description, websiteId 
             FROM packages 
             WHERE id = ?',
             [$id]
        );

        if (!$result) {
            throw new Exception('Package not found');
        }
        return $result;
    }
}