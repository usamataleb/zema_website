<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;

final class ImageTagService
{
  public function __construct(private Connection $conn)
  {
  }
  public function getAll(): array
  {
    return $this->conn->fetchAllAssociative(
      'SELECT id, imageId, tagId
       FROM image_tags
       ORDER BY id ASC'
    );
  }


  public function getOne(string $id): array
  {
    $result = $this->conn->fetchAssociative(
      'SELECT id, imageId, tagId 
       FROM image_tags 
       WHERE id = ?',
       [$id]
    );

    if (!$result) {
      throw new Exception('ImageTag not found');
    }
    return $result;
  }
  public function create($data): int|string
  {
    return $this->conn->insert('image_tags', $data);
  }

  public function update(string $id, $data): int|string
  {
    return $this->conn->update('image_tags', $data, ['id' => $id]);
  }

  public function delete(string $id): int|string
  {
    return $this->conn->delete('image_tags', ['id' => $id]);
  }
}
