<?php

declare(strict_types=1);

namespace App\Middleware;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Psr7\Response as SlimResponse;

class RateLimitMiddleware
{
    private $limits = [];

    public function __invoke(Request $request, RequestHandler $handler): Response
    {
        $clientIp = $request->getServerParams()['REMOTE_ADDR'] ?? 'unknown';
        $route = $request->getUri()->getPath();
        
        $currentTime = time();
        $windowSize = 60; // 1 minute window
        
        // Initialize or clean up old requests for this IP and route
        if (!isset($this->limits[$clientIp][$route])) {
            $this->limits[$clientIp][$route] = [];
        }
        
        // Remove requests older than the window
        $this->limits[$clientIp][$route] = array_filter(
            $this->limits[$clientIp][$route],
            function ($time) use ($currentTime, $windowSize) {
                return $time > $currentTime - $windowSize;
            }
        );
        
        // Check if limit exceeded (e.g., 100 requests per minute)
        if (count($this->limits[$clientIp][$route]) >= 100) {
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Rate limit exceeded'
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(429);
        }
        
        // Add current request
        $this->limits[$clientIp][$route][] = $currentTime;
        
        return $handler->handle($request);
    }
}