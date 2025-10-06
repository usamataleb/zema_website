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
     * Create package for a specific website
     */
    public function createForWebsite(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $input = $request->getParsedBody();

            $validator = v::key('name', v::stringType()->length(1, 100)->notEmpty())
                ->key('description', v::stringType()->length(1, 1000)->notEmpty());

            $dto = [
                'name' => $input['name'],
                'src' => $input['src'] ?? '',
                'description' => $input['description'],
                'websiteId' => $websiteId,
                'updatedAt' => date('Y-m-d H:i:s')
            ];

            $validator->assert($dto);

            $packageId = $this->packageService->create($dto);

            return $response->withJson([
                'success' => true,
                'message' => 'Package created successfully',
                'id' => $packageId
            ], 201);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Upload package with image (combined)
     */
    public function upload(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();

            $fileInfo = null;

            // Handle file upload if present
            if (isset($uploadedFiles['image'])) {
                $uploadedFile = $uploadedFiles['image'];

                if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                    $fileInfo = $this->packageService->handleFileUpload($uploadedFile);
                }
            }

            // Validate required fields
            $validator = v::key('name', v::stringType()->length(1, 100)->notEmpty())
                ->key('description', v::stringType()->length(1, 1000)->notEmpty());

            $dto = [
                'name' => $input['name'],
                'src' => $fileInfo ? $fileInfo['src'] : ($input['src'] ?? ''),
                'description' => $input['description'],
                'websiteId' => $websiteId,
                'updatedAt' => date('Y-m-d H:i:s')
            ];

            $validator->assert($dto);

            $this->packageService->create($dto);

            return $response->withJson([
                'message' => 'Package created successfully',
                'success' => true,
                'file' => $fileInfo
            ], 201);
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
            $this->packageService->update($packageId, ['src' => $fileInfo['src']]);

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
     * Update package
     */
    public function update(Request $request, Response $response, array $args): Response
    {
        try {
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();

            $fileInfo = null;
            $currentPackage = $this->packageService->getOne((string) $args['id']);

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
                }
            }

            $validator = v::key('name', v::optional(v::stringType()->length(1, 100)))
                ->key('src', v::optional(v::stringType()))
                ->key('description', v::optional(v::stringType()->length(1, 1000)));

            $dto = array_filter([
                'name' => $input['name'] ?? null,
                'src' => $fileInfo ? $fileInfo['src'] : ($input['src'] ?? null),
                'description' => $input['description'] ?? null,
            ], fn($value) => $value !== null);

            if (!empty($dto)) {
                $validator->assert($dto);
                $this->packageService->update((string) $args['id'], $dto);
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

    /**
     * Get packages for a specific website (protected)
     */
    public function getByWebsiteId(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $result = $this->packageService->getByWebsiteId($websiteId);
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * Get packages for a specific website (public)
     */
    public function getPublicByWebsiteId(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $result = $this->packageService->getByWebsiteId($websiteId);
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 404);
        }
    }
}
