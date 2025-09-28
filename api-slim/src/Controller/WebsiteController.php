<?php

declare(strict_types=1);

namespace App\Controller;

use App\CustomResponse as Response;
use App\Service\WebsiteService;
use Exception;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Validator as v;

final class WebsiteController
{
    private WebsiteService $websiteService;
    private ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->websiteService = $this->container->get('websiteService');
    }

    public function getAll(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->websiteService->getAll();
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    }

    public function getOne(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->websiteService->getOne((string) $args['id']);
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 404);
        }
    }

    public function create(Request $request, Response $response, array $args): Response
    {
        try {
            $input = $request->getParsedBody();

            $validator = v::key('name', v::stringType()->notEmpty())
                ->key('about', v::optional(v::stringType()))
                ->key('userId', v::stringType()->notEmpty())
                ->key('isDefault', v::optional(v::boolType()));

            $dto = [
                'name' => $input['name'],
                'about' => $input['about'] ?? '',
                'userId' => $input['userId'],
                'isDefault' => $input['isDefault'] ?? false,
            ];

            $validator->assert($dto);

            $this->websiteService->create($dto);
            return $response->withStatus(201);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    public function update(Request $request, Response $response, array $args): Response
    {
        try {
            $input = $request->getParsedBody();
            $validator = v::key('name', v::optional(v::stringType()))
                ->key('about', v::optional(v::stringType()))
                ->key('userId', v::optional(v::stringType()))
                ->key('isDefault', v::optional(v::stringType()));

            $dtoForValidation = [
                'id' => $input['id'] ?? '',
                'name' => $input['name'] ?? '',
                'about' => $input['about'] ?? '',
                'userId' => $input['userId'] ?? '',
                'isDefault' => $input['isDefault'] ?? '',
                'updatedAt' => date('Y-m-d H:i:s'),
            ];

            $validator->assert($dtoForValidation);

            $dto = array_filter($dtoForValidation, fn($value) => $value !== '');

            $this->websiteService->update((string) $args['id'], $dto);
            return $response->withStatus(204);
        } catch (Exception $e) {
            $duplicateErrorCode = 1062;
            $foreignErrorCode = 1452;

            if ($e instanceof NestedValidationException) {
                return $response->withJson(['error' => $e->getMessages()], 400);
            } else {
                return $response->withJson(['error' => $e->getMessage()], 500);
            }
        }
    }

    public function delete(Request $request, Response $response, array $args): Response
    {
        // try {
        //   $result = $this->websiteService->delete((string) $args['id']);
        //   return $response->withJson($result);
        // } catch (Exception $e) {
        //   return $response->withJson(['error' => $e->getMessage()], 400);
        // }
        return $response->withJson(['error' => 'Disabled'], 400); // uncomment above code to enable delete
    }
}