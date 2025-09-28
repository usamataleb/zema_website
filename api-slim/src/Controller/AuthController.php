<?php

declare(strict_types=1);

namespace App\Controller;

use Firebase\JWT\JWT;
use Doctrine\DBAL\Connection;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

final class AuthController
{
    private Connection $conn;

    public function __construct(ContainerInterface $container)
    {
        // Try these common service names - check which one exists in your container
        if ($container->has('db')) {
            $this->conn = $container->get('db');
        } elseif ($container->has('database')) {
            $this->conn = $container->get('database');
        } else {
            throw new \RuntimeException('Database connection service not found in container');
        }
    }

    /**
     * Login user
     */
    public function login(Request $request, Response $response): Response
    {
        $data = (array) $request->getParsedBody();

        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        if (!$email || !$password) {
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Email and password are required',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $user = $this->conn->fetchAssociative(
            'SELECT id, username, email, password FROM users WHERE email = ?',
            [$email]
        );

        if (!$user || !password_verify($password, $user['password'])) {
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Invalid credentials',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
        }

        // Generate PROPER JWT token (don't base64 encode it again!)
        $jwtSecret = $_ENV['JWT_SECRET'] ?? '7w8&^7af9*!o%j#)b$#k*p2w#q9@s1z&3n1!&y^vq36znm7!%h';
        $issuedAt = time();
        $expire = $issuedAt + (60 * 60 * 24); // 24 hours

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expire,
            'sub' => (string)$user['id'], // User ID as subject
            'email' => $user['email'],
        ];

        // This should generate a proper JWT token with 3 parts
        $token = JWT::encode($payload, $jwtSecret, 'HS256');

        // Debug: Check what token is being generated
        error_log("Generated JWT Token: " . $token);
        error_log("Token parts: " . count(explode('.', $token))); // Should be 3

        $response->getBody()->write(json_encode([
            'success' => true,
            'user' => [
                'id' => $user['id'],
                'username' => $user['username'],
                'email' => $user['email'],
            ],
            'token' => $token, // This should be a proper JWT
        ]));

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    /**
     * Register new user
     */
    public function register(Request $request, Response $response): Response
    {
        $data = (array) $request->getParsedBody();

        $username = $data['username'] ?? null;
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        if (!$username || !$email || !$password) {
            $response->getBody()->write(json_encode([
                'status' => 'error',
                'message' => 'Username, email, and password are required',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        // Check if user exists
        $existing = $this->conn->fetchAssociative(
            'SELECT id FROM users WHERE email = ?',
            [$email]
        );

        if ($existing) {
            $response->getBody()->write(json_encode([
                'status' => 'error',
                'message' => 'User already exists',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(409);
        }

        // Insert new user
        $this->conn->insert('users', [
            'username' => $username,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_BCRYPT),
        ]);

        $response->getBody()->write(json_encode([
            'success' => true,
            'message' => 'User registered successfully',
        ]));

        return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
    }

    /**
     * Get current authenticated user
     */
    public function getCurrentUser(Request $request, Response $response): Response
    {
        try {
            // Get decoded token from request attributes (set by middleware)
            $decoded = $request->getAttribute('decoded');

            if (!$decoded || !isset($decoded->sub)) {
                $response->getBody()->write(json_encode([
                    'status' => 'error',
                    'message' => 'Invalid token data',
                ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
            }

            $userId = $decoded->sub;

            // Fetch user from database
            $user = $this->conn->fetchAssociative(
                'SELECT id, username, email, created_at FROM users WHERE id = ?',
                [$userId]
            );

            if (!$user) {
                $response->getBody()->write(json_encode([
                    'success' => false,
                    'message' => 'User not found',
                ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
            }

            $response->getBody()->write(json_encode([
                'success' => true,
                'user' => [
                    'id' => $user['id'],
                    'username' => $user['username'],
                    'email' => $user['email'],
                    'created_at' => $user['created_at'],
                ],
            ]));

            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'An error occurred while fetching user data',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
    /**
     * Logout user
     */
    public function logout(Request $request, Response $response): Response
    {
        try {
            // Check if user is logged in via session
            session_start();

            if (!isset($_SESSION['userId'])) {
                $response->getBody()->write(json_encode([
                    'status' => 'error',
                    'message' => 'Not authenticated',
                ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
            }

            // Destroy session
            session_destroy();

            $response->getBody()->write(json_encode([
                'status' => 'success',
                'message' => 'Logout successful',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode([
                'status' => 'error',
                'message' => 'An error occurred while logging out',
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(500);
        }
    }
}
