<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;

final class WebsiteService
{
  public function __construct(private Connection $conn)
  {
  }
  public function getAll(): array
  {
    return $this->conn->fetchAllAssociative(
      'SELECT id, name, about, userId, isDefault
       FROM websites
       ORDER BY id ASC'
    );
  }


  public function getOne(string $id): array
  {
    $result = $this->conn->fetchAssociative(
      'SELECT id, name, about, userId, isDefault 
       FROM websites 
       WHERE id = ?',
       [$id]
    );

    if (!$result) {
      throw new Exception('Website not found');
    }
    return $result;
  }
  public function create($data): int|string
  {
    return $this->conn->insert('websites', $data);
  }

  public function update(string $id, $data): int|string
  {
    return $this->conn->update('websites', $data, ['id' => $id]);
  }

  public function delete(string $id): int|string
  {
    return $this->conn->delete('websites', ['id' => $id]);
  }
}
