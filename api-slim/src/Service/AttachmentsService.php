<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;
use Psr\Http\Message\UploadedFileInterface;

final class AttachmentsService
{
  private string $uploadDirectory;

  public function __construct(private Connection $conn, string $uploadDirectory = __DIR__ . '/../../public/uploads/attachments')
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
      'SELECT id, src, title, type
       FROM attachments
       ORDER BY id ASC'
    );
  }


  public function getOne(string $id): array
  {
    $result = $this->conn->fetchAssociative(
      'SELECT id, src, title, type 
       FROM attachments 
       WHERE id = ?',
       [$id]
    );

    if (!$result) {
      throw new Exception('Attachments not found');
    }
    return $result;
  }

  public function getByType(string $type): array
  {
    return $this->conn->fetchAllAssociative(
      'SELECT id, src, title, type
       FROM attachments 
       WHERE type = ?
       ORDER BY id ASC',
       [$type]
    );
  }

  public function create($data): int|string
  {
    return $this->conn->insert('attachments', $data);
  }

  public function update(string $id, $data): int|string
  {
    return $this->conn->update('attachments', $data, ['id' => $id]);
  }

  public function delete(string $id): int|string
  {
    // Get attachment info before deletion to remove associated file
    $attachment = $this->getOne($id);
    if ($attachment && $attachment['src']) {
      $filename = basename($attachment['src']);
      $filePath = $this->uploadDirectory . DIRECTORY_SEPARATOR . $filename;
      if (file_exists($filePath)) {
        unlink($filePath);
      }
    }

    return $this->conn->delete('attachments', ['id' => $id]);
  }

  public function handleFileUpload(UploadedFileInterface $uploadedFile): array
  {
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(8));
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    // Validate file type
    $allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'image/jpeg',
      'image/png',
      'application/zip',
      'application/x-zip-compressed'
    ];
    $mimeType = $uploadedFile->getClientMediaType();

    if (!in_array($mimeType, $allowedMimeTypes)) {
      throw new Exception('Invalid file type. Allowed types: PDF, DOC, DOCX, XLS, XLSX, JPEG, PNG, ZIP');
    }

    // Validate file size (max 20MB)
    $maxFileSize = 20 * 1024 * 1024;
    if ($uploadedFile->getSize() > $maxFileSize) {
      throw new Exception('File size exceeds maximum limit of 20MB');
    }

    $BASE_URL = getenv('BASE_URL') ?: 'http://172.16.18.104:8080';

    // Move uploaded file
    $uploadedFile->moveTo($this->uploadDirectory . DIRECTORY_SEPARATOR . $filename);

    return [
      'filename' => $filename,
      'src' => $BASE_URL . '/uploads/attachments/' . $filename,
      'filesize' => $uploadedFile->getSize(),
      'mimetype' => $mimeType,
    ];
  }

  public function handleImageUpload(UploadedFileInterface $uploadedImage): array
  {
    $extension = pathinfo($uploadedImage->getClientFilename(), PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(8));
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    // Validate file type
    $allowedMimeTypes = [
      'image/jpeg',
      'image/png',

    ];
    $mimeType = $uploadedImage->getClientMediaType();

    if (!in_array($mimeType, $allowedMimeTypes)) {
      throw new Exception('Invalid file type. Allowed types:  JPEG, PNG');
    }

    // Validate Image size 
    $maxFileSize = 2 * 1024 * 1024;
    if ($uploadedImage->getSize() > $maxFileSize) {
      throw new Exception('File size exceeds maximum limit of 2MB');
    }

    $BASE_URL = getenv('BASE_URL') ?: 'http://172.16.18.104:8080';

    // Move uploaded file
    $uploadedImage->moveTo($this->uploadDirectory . DIRECTORY_SEPARATOR . $filename);

    return [
      'filename' => $filename,
      'image' => $BASE_URL . '/uploads/attachments/image/' . $filename,
      'filesize' => $uploadedImage->getSize(),
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