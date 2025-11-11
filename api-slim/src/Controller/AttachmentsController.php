<?php

declare(strict_types=1);

namespace App\Controller;

use App\CustomResponse as Response;
use App\Service\AttachmentsService;
use Exception;
use Pimple\Psr11\Container;
use Psr\Http\Message\ServerRequestInterface as Request;
use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Validator as v;

final class AttachmentsController
{
  private AttachmentsService $attachmentsService;

  public function __construct(private Container $container)
  {
    $this->attachmentsService = $this->container->get('attachmentsService');
  }

  public function getAll(Request $request, Response $response, array $args): Response
  {
    try {
      $result = $this->attachmentsService->getAll();
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 500);
    }
  }

  public function getOne(Request $request, Response $response, array $args): Response
  {
    try {
      $result = $this->attachmentsService->getOne((string) $args['id']);
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 404);
    }
  }

  public function getByType(Request $request, Response $response, array $args): Response
  {
    try {
      $result = $this->attachmentsService->getByType((string) $args['type']);
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 404);
    }
  }

  public function create(Request $request, Response $response, array $args): Response
  {
    try {
      $input = $request->getParsedBody();
      $requiredFields = [];

      $validator = v::key('src', v::stringType())
       ->key('title', v::optional(v::stringType()))
       ->key('type', v::in(['POLICY_AND_LAW', 'REGULATIONS_AND_GUIDANCE', 'LIST_OF_EXPERTS', 'APPROVED_PROJECTS', 'ANNOUNCEMENTS']));

      $dto = [
          'id' => $input['id'],
  'src' => $input['src'],
  'title' => $input['title'],
  'type' => $input['type'],
      ];

      foreach ($requiredFields as $key) {
        if ($input[$key] === null) {
          unset($dto[$key]);
        }
      }

      $validator->assert($dto);

     $this->attachmentsService->create($dto);
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

  public function update(Request $request, Response $response, array $args): Response
  {
    try {
      $input = $request->getParsedBody();
      $validator = v::key('src', v::optional(v::stringType()))
       ->key('title', v::optional(v::stringType()))
       ->key('type', v::optional(v::in(['POLICY_AND_LAW', 'REGULATIONS_AND_GUIDANCE', 'LIST_OF_EXPERTS', 'APPROVED_PROJECTS', 'ANNOUNCEMENTS'])));

      $dtoForValidation = [
          'id' => $input['id'] ?? '',
  'src' => $input['src'] ?? '',
  'title' => $input['title'] ?? '',
  'type' => $input['type'] ?? '',
  'updatedAt' => date('Y-m-d H:i:s'),
      ];

      $validator->assert($dtoForValidation);

      $dto = array_filter($dtoForValidation, fn($value) => $value !== '');

      $this->attachmentsService->update((string) $args['id'], $dto);
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
   //   $result = $this->attachmentsService->delete((string) $args['id']);
   //   return $response->withJson($result);
   // } catch (Exception $e) {
   //   return $response->withJson(['error' => $e->getMessage()], 400);
   // }
   return $response->withJson(['error' => 'Disabled'], 400); // uncomment above code to enable delete
  }

}