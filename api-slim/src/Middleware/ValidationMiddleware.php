<?php

declare(strict_types=1);

namespace App\Middleware;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Slim\Psr7\Response as SlimResponse;
use Respect\Validation\Validator as v;

class ValidationMiddleware
{
    private $rules;

    public function __construct(array $rules)
    {
        $this->rules = $rules;
    }

    public function __invoke(Request $request, RequestHandler $handler): Response
    {
        try {
            $data = $request->getParsedBody();
            
            foreach ($this->rules as $field => $validator) {
                if (isset($data[$field])) {
                    $validator->assert($data[$field]);
                }
            }
            
            return $handler->handle($request);
            
        } catch (\Respect\Validation\Exceptions\NestedValidationException $e) {
            $response = new SlimResponse();
            $response->getBody()->write(json_encode([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->getMessages()
            ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }
    }
}