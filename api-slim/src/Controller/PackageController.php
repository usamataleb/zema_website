<?php

declare(strict_types=1);

namespace App\Controller;

use App\CustomResponse as Response;
use App\Service\PackageService;
use Exception;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Respect\Validation\Validator as v;

final class PackageController
{
    private PackageService $packageService;
    private ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->packageService = $this->container->get('packageService');
    }

    /**
     * Get all packages
     */
    public function getAll(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->packageService->getAll();
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Get specific package by ID
     */
    public function getOne(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->packageService->getOne((string) $args['packageId']);
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * Create package with optional file upload
     */
    public function create(Request $request, Response $response, array $args): Response
    {
        try {
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();

            $fileInfo = null;
            $src = '';

            // Handle file upload if present
            if (isset($uploadedFiles['image'])) {
                $uploadedFile = $uploadedFiles['image'];

                if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                    $fileInfo = $this->packageService->handleFileUpload($uploadedFile);
                    $src = $fileInfo['src'];
                } else {
                    throw new Exception('File upload failed with error code: ' . $uploadedFile->getError());
                }
            } else {
                // If no file uploaded, check if src is provided in form data
                $src = $input['src'] ?? '';
            }

            // Validate required fields
            $validator = v::key('name', v::stringType()->length(1, 100)->notEmpty())
                ->key('description', v::stringType()->length(1, 1000)->notEmpty());

            $validator->assert($input);

            $dto = [
                'name' => $input['name'],
                'src' => $src,
                'description' => $input['description'],
                'updatedAt' => date('Y-m-d H:i:s'),
                'createdAt' => date('Y-m-d H:i:s')
            ];

            $packageId = $this->packageService->create($dto);

            $responseData = [
                'success' => true,
                'message' => 'Package created successfully',
                'id' => $packageId
            ];

            if ($fileInfo) {
                $responseData['file'] = $fileInfo;
            }

            return $response->withJson($responseData, 201);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Upload package image only
     */
    public function uploadImage(Request $request, Response $response, array $args): Response
    {
        try {
            $packageId = (string) $args['id'];
            $uploadedFiles = $request->getUploadedFiles();

            if (!isset($uploadedFiles['image'])) {
                return $response->withJson(['error' => 'No file uploaded'], 400);
            }

            $uploadedFile = $uploadedFiles['image'];

            if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
                return $response->withJson(['error' => 'File upload failed'], 400);
            }

            // Handle file upload
            $fileInfo = $this->packageService->handleFileUpload($uploadedFile);

            // Update package with new image
            $this->packageService->update($packageId, [
                'src' => $fileInfo['src'],
                'updatedAt' => date('Y-m-d H:i:s')
            ]);

            return $response->withJson([
                'message' => 'Package image uploaded successfully',
                'success' => true,
                'file' => $fileInfo
            ], 200);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Update package with optional file upload
     */
    public function update(Request $request, Response $response, array $args): Response
    {
        try {
            $packageId = (string) $args['id'];
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();

            $fileInfo = null;
            $currentPackage = $this->packageService->getOne($packageId);

            // Handle file upload if present
            if (isset($uploadedFiles['image'])) {
                $uploadedFile = $uploadedFiles['image'];

                if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                    // Delete old file if exists
                    if ($currentPackage['src']) {
                        $oldFilename = basename($currentPackage['src']);
                        $this->packageService->deleteFile($oldFilename);
                    }

                    $fileInfo = $this->packageService->handleFileUpload($uploadedFile);
                } else {
                    throw new Exception('File upload failed with error code: ' . $uploadedFile->getError());
                }
            }

            $validator = v::key('name', v::optional(v::stringType()->length(1, 100)))
                ->key('src', v::optional(v::stringType()))
                ->key('description', v::optional(v::stringType()->length(1, 1000)));

            $dto = array_filter([
                'name' => $input['name'] ?? null,
                'src' => $fileInfo ? $fileInfo['src'] : ($input['src'] ?? null),
                'description' => $input['description'] ?? null,
                'updatedAt' => date('Y-m-d H:i:s')
            ], fn($value) => $value !== null);

            if (!empty($dto)) {
                $validator->assert($dto);
                $this->packageService->update($packageId, $dto);
            }

            return $response->withStatus(204);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Delete package
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->packageService->delete((string) $args['id']);
            return $response->withJson(['message' => 'Package deleted successfully']);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }
}