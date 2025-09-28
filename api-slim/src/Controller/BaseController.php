<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;

class BaseController
{
    /**
     * Helper method to return JSON response
     */
    protected function jsonResponse(Response $response, $data, int $status = 200): Response
    {
        $response->getBody()->write(json_encode($data));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($status);
    }
}