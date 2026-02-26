<?php

declare(strict_types=1);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return static function (App $app): void {
    $app->options('/{routes:.+}', function (Request $request, Response $response) {
        return $response;
    });

    $app->add(function (Request $request, $handler): Response {
        $response = $handler->handle($request);
        
        // List of allowed origins
        $allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:5173',
        ];
        
        // Get the request origin
        $requestOrigin = $request->getHeaderLine('Origin');
        
        // Check if the request origin is in the allowed list
        $origin = '';
        if (in_array($requestOrigin, $allowedOrigins)) {
            $origin = $requestOrigin;
        }
        
        // If no origin matched, you can choose to allow none or default to one
        // For security, it's better to not set the header if origin doesn't match
        if ($origin === '') {
            return $response;
        }

        return $response
            ->withHeader('Access-Control-Allow-Origin', $origin, )
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
            ->withHeader('Access-Control-Allow-Credentials', 'true');
    });
};