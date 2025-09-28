<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;
use Exception;

final class ActivityLogService
{
    public function __construct(private Connection $conn)
    {
    }

    public function getAll(): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, userId as userId, action, details, ipAddress, userAgent, createdAt
             FROM activity_logs
             ORDER BY createdAt DESC'
        );
    }

    public function getOne(string $id): array
    {
        $result = $this->conn->fetchAssociative(
            'SELECT id, userId as userId, action, details, ipAddress, userAgent, createdAt
             FROM activity_logs 
             WHERE id = ?',
             [$id]
        );

        if (!$result) {
            throw new Exception('ActivityLog not found');
        }
        return $result;
    }

    /**
     * Get activity logs by user ID
     */
    public function getByUserId(string $userId): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, userId as userId, action, details, ipAddress, userAgent, createdAt
             FROM activity_logs 
             WHERE userId = ?
             ORDER BY createdAt DESC',
            [$userId]
        );
    }

    /**
     * Get activity logs by action type
     */
    public function getByAction(string $action): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, userId as userId, action, details, ipAddress, userAgent, createdAt
             FROM activity_logs 
             WHERE action = ?
             ORDER BY createdAt DESC',
            [$action]
        );
    }

    /**
     * Get recent activity logs with limit
     */
    public function getRecent(int $limit = 50): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, userId as userId, action, details, ipAddress, userAgent, createdAt
             FROM activity_logs
             ORDER BY createdAt DESC
             LIMIT ?',
            [$limit]
        );
    }

    /**
     * Log activity with comprehensive data
     */
    public function logActivity(
        string $userId,
        string $action,
        array $details = [],
        string $ipAddress = '',
        string $userAgent = ''
    ): int|string {
        $data = [
            'userId' => $userId,
            'action' => $action,
            'details' => json_encode($details),
            'ipAddress' => $ipAddress,
            'userAgent' => $userAgent,
            'createdAt' => date('Y-m-d H:i:s')
        ];

        return $this->conn->insert('activity_logs', $data);
    }

    /**
     * Log activity from request context
     */
    public function logActivityFromRequest(
        string $userId,
        string $action,
        array $details = [],
        array $serverParams = [],
        string $userAgentHeader = ''
    ): int|string {
        $ipAddress = $serverParams['REMOTE_ADDR'] ?? $serverParams['HTTP_X_FORWARDED_FOR'] ?? 'unknown';
        $userAgent = $userAgentHeader ?: ($serverParams['HTTP_userAgent'] ?? '');

        return $this->logActivity($userId, $action, $details, $ipAddress, $userAgent);
    }

    public function create(array $data): int|string
    {
        // Map field names to database columns
        $mappedData = [
            'userId' => $data['userId'] ?? null,
            'action' => $data['action'] ?? '',
            'details' => isset($data['details']) ? 
                (is_array($data['details']) ? json_encode($data['details']) : $data['details']) : '',
            'ipAddress' => $data['ipAddress'] ?? '',
            'userAgent' => $data['userAgent'] ?? '',
            'createdAt' => $data['createdAt'] ?? date('Y-m-d H:i:s')
        ];

        return $this->conn->insert('activity_logs', $mappedData);
    }

    public function update(string $id, array $data): int|string
    {
        // Map field names to database columns
        $mappedData = [];
        if (isset($data['userId'])) $mappedData['userId'] = $data['userId'];
        if (isset($data['action'])) $mappedData['action'] = $data['action'];
        if (isset($data['details'])) {
            $mappedData['details'] = is_array($data['details']) ? json_encode($data['details']) : $data['details'];
        }
        if (isset($data['ipAddress'])) $mappedData['ipAddress'] = $data['ipAddress'];
        if (isset($data['userAgent'])) $mappedData['userAgent'] = $data['userAgent'];
        if (isset($data['createdAt'])) $mappedData['createdAt'] = $data['createdAt'];

        return $this->conn->update('activity_logs', $mappedData, ['id' => $id]);
    }

    public function delete(string $id): int|string
    {
        return $this->conn->delete('activity_logs', ['id' => $id]);
    }

    /**
     * Clean up old activity logs
     */
    public function cleanupOldLogs(int $daysToKeep = 90): int
    {
        $cutoffDate = date('Y-m-d H:i:s', strtotime("-$daysToKeep days"));
        
        return $this->conn->executeStatement(
            'DELETE FROM activity_logs WHERE createdAt < ?',
            [$cutoffDate]
        );
    }

    /**
     * Get activity count by action type
     */
    public function getActionCounts(): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT action, COUNT(*) as count
             FROM activity_logs
             GROUP BY action
             ORDER BY count DESC'
        );
    }

    /**
     * Search activity logs
     */
    public function search(string $query, int $limit = 100): array
    {
        return $this->conn->fetchAllAssociative(
            'SELECT id, userId as userId, action, details,  ipAddress, userAgent, createdAt
             FROM activity_logs
             WHERE action LIKE ? OR details LIKE ? OR userAgent LIKE ?
             ORDER BY createdAt DESC
             LIMIT ?',
            ["%$query%", "%$query%", "%$query%", $limit]
        );
    }

    /**
     * Get user activity summary
     */
    public function getUserActivitySummary(string $userId): array
    {
        return $this->conn->fetchAssociative(
            'SELECT 
                COUNT(*) as total_actions,
                COUNT(DISTINCT action) as unique_actions,
                MIN(createdAt) as first_activity,
                MAX(createdAt) as last_activity
             FROM activity_logs
             WHERE userId = ?',
            [$userId]
        ) ?: [];
    }
}