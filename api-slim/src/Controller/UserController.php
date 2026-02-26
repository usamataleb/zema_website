<?php

declare(strict_types=1);

namespace App\Controller;

use App\CustomResponse as Response;
use App\Service\UserService;
use Exception;
use Pimple\Psr11\Container;
use Psr\Http\Message\ServerRequestInterface as Request;
use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Validator as v;

final class UserController
{
  private UserService $userService;

  public function __construct(private Container $container)
  {
    $this->userService = $this->container->get('userService');
  }

  public function getAll(Request $request, Response $response, array $args): Response
  {
    try {
      $result = $this->userService->getAll();
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 500);
    }
  }



  public function create(Request $request, Response $response, array $args): Response
  {
    try {
      $input = $request->getParsedBody();

      $validator = v::key('username', v::stringType()->notEmpty())
        ->key('email', v::email()->notEmpty())
        ->key('password', v::stringType()->length(6, null)->notEmpty());

      $dto = [
        'username' => $input['username'],
        'email' => $input['email'],
        'password' => password_hash($input['password'], PASSWORD_DEFAULT),
      ];

      $validator->assert($dto);

      $this->userService->create($dto);
      return $response->withStatus(201);
    } catch (Exception $e) {
      $duplicateErrorCode = 1062;
      $foreignErrorCode = 1452;

      if ($e instanceof NestedValidationException) {
        return $response->withJson(['error' => $e->getMessages()], 400);
      } else if ($e->getCode() === $duplicateErrorCode) {
        return $response->withJson(['error' => 'The data you try to insert already exists'], 409);
      } else if ($e->getCode() === $foreignErrorCode) {
        $matches = [];
        preg_match("/FOREIGN KEY \(`(\w+)`\) REFERENCES `(\w+)` \(`(\w+)`\)/", $e->getMessage(), $matches);

        $childColumnName = "";
        $parentTableName = "";
        $parentColumnName = "";

        if (count($matches) >= 4) {
          $childColumnName = $matches[1];
          $parentTableName = $matches[2];
          $parentColumnName = $matches[3];
        }
        return $response->withJson(['error' => "The '{$childColumnName}' does not exist in the '{$parentTableName} table' column' '{$parentColumnName}'."], 404);
      } else {
        return $response->withJson(['error' => $e->getMessage()], 400);
      }
    }
  }

  public function getOne(Request $request, Response $response, array $args): Response
  {
    try {
      $id = $args['id'] ?? null;

      if (!$id || !ctype_digit($id)) {
        return $response->withJson(['error' => 'Invalid or missing ID'], 400);
      }

      $result = $this->userService->getOne($id);
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 404);
    }
  }

  public function update(Request $request, Response $response, array $args): Response
  {
    try {
      $id = $args['id'] ?? null;

      if (!$id || !ctype_digit($id)) {
        return $response->withJson(['error' => 'Invalid or missing ID'], 400);
      }

      $input = $request->getParsedBody();

      $validator = v::key('username', v::optional(v::stringType()))
        ->key('email', v::optional(v::email()))
        ->key('password', v::optional(v::stringType()->length(6, null)));

      $dto = array_filter([
        'username' => $input['username'] ?? null,
        'email'    => $input['email'] ?? null,
        'password' => isset($input['password']) ? password_hash($input['password'], PASSWORD_DEFAULT) : null,
      ], fn($value) => $value !== null);

      if (!empty($dto)) {
        $validator->assert($dto);
        $this->userService->update($id, $dto);
      }

      return $response->withStatus(204);
    } catch (Exception $e) {
      if ($e instanceof NestedValidationException) {
        return $response->withJson(['error' => $e->getMessages()], 400);
      }
      return $response->withJson(['error' => $e->getMessage()], 500);
    }
  }

  public function delete(Request $request, Response $response, array $args): Response
  {
    try {
      $id = $args['id'] ?? null;

      if (!$id || !ctype_digit($id)) {
        return $response->withJson(['error' => 'Invalid or missing ID'], 400);
      }

      $this->userService->delete($id);
      return $response->withJson(['message' => 'User deleted successfully']);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 400);
    }
  }
}
