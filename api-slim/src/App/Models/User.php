<?php

namespace App\Models;

use PDO;
use Exception;

class User
{
    private $db;
    private $table = 'users';

    public $id;
    public $email;
    public $password;
    public $name;
    public $role;
    public $created_at;
    public $updated_at;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    /**
     * Find user by email
     */
    public function findByEmail($email)
    {
        $query = "SELECT * FROM {$this->table} WHERE email = :email LIMIT 1";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * Find user by ID
     */
    public function find($id)
    {
        $query = "SELECT * FROM {$this->table} WHERE id = :id LIMIT 1";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * Create new user
     */
    public function create($data)
    {
        $query = "INSERT INTO {$this->table} 
                 (email, password, name, role, created_at, updated_at) 
                 VALUES (:email, :password, :name, :role, :created_at, :updated_at)";
        
        $stmt = $this->db->prepare($query);
        
        // Bind parameters
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':password', $data['password']);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':role', $data['role']);
        $stmt->bindParam(':created_at', $data['created_at']);
        $stmt->bindParam(':updated_at', $data['updated_at']);
        
        if ($stmt->execute()) {
            return $this->db->lastInsertId();
        }
        
        return false;
    }

    /**
     * Update user
     */
    public function update($id, $data)
    {
        $query = "UPDATE {$this->table} SET 
                 email = :email, name = :name, role = :role, 
                 updated_at = :updated_at 
                 WHERE id = :id";
        
        $stmt = $this->db->prepare($query);
        
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':role', $data['role']);
        $stmt->bindParam(':updated_at', $data['updated_at']);
        $stmt->bindParam(':id', $id);
        
        return $stmt->execute();
    }

    /**
     * Delete user
     */
    public function delete($id)
    {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        
        return $stmt->execute();
    }

    /**
     * Get all users
     */
    public function getAll()
    {
        $query = "SELECT id, email, name, role, created_at, updated_at 
                 FROM {$this->table} ORDER BY created_at DESC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}