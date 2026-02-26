<?php

namespace App\Service;

use Doctrine\DBAL\Connection;

class RegulationService {
    private $db;
    
    public function __construct(Connection $db) {
        $this->db = $db;
    }
    
    // Get all regulations from all sections
    public function getAll() {
        try {
            $notice = $this->getRegulationsByType('notice');
            $announcements = $this->getRegulationsByType('announcements');
            $pressReleases = $this->getRegulationsByType('press_releases');
            
            return [
                'notice' => $notice,
                'announcements' => $announcements,
                'pressReleases' => $pressReleases
            ];
            
        } catch (\Exception $e) {
            throw new \Exception('Failed to fetch regulations: ' . $e->getMessage());
        }
    }
    
    // Get regulations by section
    public function getBySection($section) {
        try {
            $validSections = ['notice', 'announcements', 'pressReleases'];
            
            if (!in_array($section, $validSections)) {
                throw new \Exception('Invalid section');
            }
            
            // Map frontend section names to database table names
            $tableMap = [
                'notice' => 'notice',
                'announcements' => 'announcements', 
                'pressReleases' => 'press_releases'
            ];
            
            $tableName = $tableMap[$section];
            return $this->getRegulationsByType($tableName);
            
        } catch (\Exception $e) {
            throw new \Exception('Failed to fetch ' . $section . ': ' . $e->getMessage());
        }
    }
    
    // Create new regulation in specific section
    public function create($section, $data) {
        try {
            // Validate required fields
            if (empty($data['title'])) {
                throw new \Exception('Title is required');
            }
            
            // Map section to table name
            $tableMap = [
                'notice' => 'notice',
                'announcements' => 'announcements',
                'pressReleases' => 'press_releases'
            ];
            
            if (!isset($tableMap[$section])) {
                throw new \Exception('Invalid section');
            }
            
            $tableName = $tableMap[$section];
            
            $this->db->insert($tableName, [
                'title' => $data['title'],
                'description' => $data['description'] ?? '',
                'issued_by' => $data['issued_by'] ?? '',
                'createdAt' => date('Y-m-d H:i:s'),
                'updatedAt' => date('Y-m-d H:i:s')
            ]);
            
            $id = $this->db->lastInsertId();
            
            return [
                'id' => $id,
                'message' => ucfirst($section) . ' created successfully'
            ];
            
        } catch (\Exception $e) {
            throw new \Exception('Failed to create ' . $section . ': ' . $e->getMessage());
        }
    }
    
    // Get single regulation
    public function getOne($section, $id) {
        try {
            $tableMap = [
                'notice' => 'notice',
                'announcements' => 'announcements',
                'pressReleases' => 'press_releases'
            ];
            
            if (!isset($tableMap[$section])) {
                throw new \Exception('Invalid section');
            }
            
            $tableName = $tableMap[$section];
            
            $sql = "SELECT * FROM $tableName WHERE id = ?";
            $regulation = $this->db->fetchAssociative($sql, [$id]);
            
            if (!$regulation) {
                throw new \Exception(ucfirst($section) . ' not found');
            }
            
            return $regulation;
            
        } catch (\Exception $e) {
            throw new \Exception('Failed to fetch ' . $section . ': ' . $e->getMessage());
        }
    }
    
    // Update regulation
    public function update($section, $id, $data) {
        try {
            $tableMap = [
                'notice' => 'notice',
                'announcements' => 'announcements',
                'pressReleases' => 'press_releases'
            ];
            
            if (!isset($tableMap[$section])) {
                throw new \Exception('Invalid section');
            }
            
            $tableName = $tableMap[$section];
            
            // Check if exists
            $checkSql = "SELECT id FROM $tableName WHERE id = ?";
            $existing = $this->db->fetchAssociative($checkSql, [$id]);
            
            if (!$existing) {
                throw new \Exception(ucfirst($section) . ' not found');
            }
            
            $this->db->update($tableName, [
                'title' => $data['title'],
                'description' => $data['description'] ?? '',
                'issued_by' => $data['issued_by'] ?? '',
                'updatedAt' => date('Y-m-d H:i:s')
            ], ['id' => $id]);
            
            return [
                'message' => ucfirst($section) . ' updated successfully'
            ];
            
        } catch (\Exception $e) {
            throw new \Exception('Failed to update ' . $section . ': ' . $e->getMessage());
        }
    }
    
    // Delete regulation
    public function delete($section, $id) {
        try {
            $tableMap = [
                'notice' => 'notice',
                'announcements' => 'announcements',
                'pressReleases' => 'press_releases'
            ];
            
            if (!isset($tableMap[$section])) {
                throw new \Exception('Invalid section');
            }
            
            $tableName = $tableMap[$section];
            
            $result = $this->db->delete($tableName, ['id' => $id]);
            
            if ($result === 0) {
                throw new \Exception(ucfirst($section) . ' not found');
            }
            
            return [
                'message' => ucfirst($section) . ' deleted successfully'
            ];
            
        } catch (\Exception $e) {
            throw new \Exception('Failed to delete ' . $section . ': ' . $e->getMessage());
        }
    }
    
    // Helper method to get regulations by type
    private function getRegulationsByType($type) {
        $sql = "SELECT * FROM $type ORDER BY createdAt DESC";
        return $this->db->fetchAllAssociative($sql);
    }
}