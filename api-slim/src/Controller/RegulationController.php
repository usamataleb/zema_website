<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Service\RegulationService;
use Psr\Container\ContainerInterface;

final class RegulationController
{
    private RegulationService $regulationService;

    public function __construct(ContainerInterface $container)
    {
        $this->regulationService = $container->get('regulationService');
    }


    // Get all regulations from all sections
    public function getAll(Request $request, Response $response, $args): Response
    {
        try {
            $data = $this->regulationService->getAll();

            $result = [
                'success' => true,
                'data' => $data
            ];

            $response->getBody()->write(json_encode($result));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            $error = [
                'success' => false,
                'error' => $e->getMessage()
            ];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }

    // Get regulations by section
    public function getBySection(Request $request, Response $response, $args): Response
    {
        try {
            $section = $args['section'];
            $data = $this->regulationService->getBySection($section);

            $response->getBody()->write(json_encode($data));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            $error = [
                'success' => false,
                'error' => $e->getMessage()
            ];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }

    // Create new regulation in specific section
    public function create(Request $request, Response $response, $args): Response
    {
        try {
            $section = $args['section'];
            $data = $request->getParsedBody();

            $result = $this->regulationService->create($section, $data);
            $result['success'] = true;

            $response->getBody()->write(json_encode($result));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            $error = [
                'success' => false,
                'error' => $e->getMessage()
            ];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }

    // Get single regulation
    public function getOne(Request $request, Response $response, $args): Response
    {
        try {
            $section = $args['section'];
            $id = $args['id'];

            $data = $this->regulationService->getOne($section, $id);

            $response->getBody()->write(json_encode($data));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            $error = [
                'success' => false,
                'error' => $e->getMessage()
            ];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }

    // Update regulation
    public function update(Request $request, Response $response, $args): Response
    {
        try {
            $section = $args['section'];
            $id = $args['id'];
            $data = $request->getParsedBody();

            $result = $this->regulationService->update($section, $id, $data);
            $result['success'] = true;

            $response->getBody()->write(json_encode($result));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            $error = [
                'success' => false,
                'error' => $e->getMessage()
            ];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }

    // Delete regulation
    public function delete(Request $request, Response $response, $args): Response
    {
        try {
            $section = $args['section'];
            $id = $args['id'];

            $result = $this->regulationService->delete($section, $id);
            $result['success'] = true;

            $response->getBody()->write(json_encode($result));
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Exception $e) {
            $error = [
                'success' => false,
                'error' => $e->getMessage()
            ];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(500)->withHeader('Content-Type', 'application/json');
        }
    }
}
