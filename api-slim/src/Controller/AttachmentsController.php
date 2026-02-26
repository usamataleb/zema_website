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
      $type = strtoupper($args['type']);
      $validTypes = ['POLICY_AND_LAW', 'REGULATIONS_AND_GUIDANCE', 'LIST_OF_EXPERTS', 'APPROVED_PROJECTS', 'ANNOUNCEMENTS'];

      if (!in_array($type, $validTypes)) {
        return $response->withJson(['error' => 'Invalid attachment type'], 400);
      }

      $result = $this->attachmentsService->getByType($type);
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 500);
    }
  }

  public function create(Request $request, Response $response, array $args): Response
  {
    try {
      $uploadedFiles = $request->getUploadedFiles();
      $input = $request->getParsedBody();

      $fileInfo = null;

      // Handle file upload if present
      if (isset($uploadedFiles['file'])) {
        $uploadedFile = $uploadedFiles['file'];
        $uploadedImage = $uploadedFiles['image'] ?? null;

        if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
          $fileInfo = $this->attachmentsService->handleFileUpload($uploadedFile);
          $imageInfo = $this->attachmentsService->handleImageUpload($uploadedImage);
        } else {
          throw new Exception('File upload failed with error code: ' . $uploadedFile->getError());
        }
      } else {
        throw new Exception('No file uploaded');
      }

      // Validate required fields
      $validator = v::key('type', v::in(['POLICY_AND_LAW', 'REGULATIONS_AND_GUIDANCE', 'LIST_OF_EXPERTS', 'APPROVED_PROJECTS', 'ANNOUNCEMENTS']));

      $dto = [
        'src' => $fileInfo['src'],
        'title' => $input['title'] ?? $fileInfo['filename'],
        'description' => $input['description'] ?? '',
        'image' => $imageInfo['image'] ?? '',
        'type' => $input['type'] ?? '',
        'createdAt' => date('Y-m-d H:i:s'),
        'updatedAt' => date('Y-m-d H:i:s')
      ];

      $validator->assert($dto);

      $this->attachmentsService->create($dto);

      return $response->withJson([
        'message' => 'File uploaded successfully',
        'file' => $fileInfo
      ], 201);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 400);
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
        'src' => $input['src'] ?? '',
        'title' => $input['title'] ?? '',
        'type' => $input['type'] ?? '',
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
    try {
      $result = $this->attachmentsService->delete((string) $args['id']);
      return $response->withJson($result);
    } catch (Exception $e) {
      return $response->withJson(['error' => $e->getMessage()], 400);
    }
  }
}
