<?php

declare(strict_types=1);

namespace App\Middleware;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Psr7\Response as SlimResponse;

class AuthMiddleware
{
    public function __invoke(Request $request, RequestHandler $handler): Response
    {
        $authHeader = $request->getHeaderLine('Authorization');
        
        // Extract token from "Bearer {token}" format
        if (empty($authHeader) || !preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'JWT Token required'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
        }
        
        $jwt = $matches[1];
        
        try {
            // Get secret from environment variable or use default
            $jwtSecret = $_ENV['JWT_SECRET'] ?? '7w8&^7af9*!o%j#)b$#k*p2w#q9@s1z&3n1!&y^vq36znm7!%h';
            
            // Debug: Log the secret and token (remove this in production)
            error_log("JWT Secret: " . $jwtSecret);
            error_log("JWT Token: " . $jwt);
            
            $key = new Key($jwtSecret, 'HS256');
            $decoded = JWT::decode($jwt, $key);
            
            // Debug: Log the decoded token
            error_log("Decoded Token: " . print_r($decoded, true));
            
            // Add decoded token to request attributes
            $request = $request->withAttribute('decoded', $decoded);
            
            return $handler->handle($request);
            
        } catch (\Firebase\JWT\ExpiredException $e) {
            error_log("JWT Expired: " . $e->getMessage());
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Token expired'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
            
        } catch (\Firebase\JWT\SignatureInvalidException $e) {
            error_log("JWT Signature Invalid: " . $e->getMessage());
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Invalid token signature'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(403);
            
        } catch (\Exception $e) {
            error_log("JWT Error: " . $e->getMessage());
            error_log("JWT Error Trace: " . $e->getTraceAsString());
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Forbidden: you are not authorized - ' . $e->getMessage()
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(403);
        }
    }
}