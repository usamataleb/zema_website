<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;

final class AttachmentsService
{
  public function __construct(private Connection $conn)
  {
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
    $result = $this->conn->fetchAllAssociative(
      'SELECT id, src, title, type 
       FROM attachments 
       WHERE type = ?',
       [$type]
    );

    if (!$result) {
      throw new Exception('No attachments found for the specified type');
    }
    return $result;
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
    return $this->conn->delete('attachments', ['id' => $id]);
  }
}
