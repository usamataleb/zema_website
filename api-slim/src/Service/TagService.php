<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;

final class TagService
{
  public function __construct(private Connection $conn)
  {
  }
  public function getAll(): array
  {
    return $this->conn->fetchAllAssociative(
      'SELECT id, name
       FROM tags
       ORDER BY id ASC'
    );
  }


  public function getOne(string $id): array
  {
    $result = $this->conn->fetchAssociative(
      'SELECT id, name 
       FROM tags 
       WHERE id = ?',
       [$id]
    );

    if (!$result) {
      throw new Exception('Tag not found');
    }
    return $result;
  }
  public function create($data): int|string
  {
    return $this->conn->insert('tags', $data);
  }

  public function update(string $id, $data): int|string
  {
    return $this->conn->update('tags', $data, ['id' => $id]);
  }

  public function delete(string $id): int|string
  {
    return $this->conn->delete('tags', ['id' => $id]);
  }
}
