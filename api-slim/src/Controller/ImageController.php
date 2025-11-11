<?php

declare(strict_types=1);

namespace App\Controller;

use App\CustomResponse as Response;
use App\Service\ImageService;
use Exception;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Respect\Validation\Validator as v;

final class ImageController
{
    private ImageService $imageService;
    private ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->imageService = $this->container->get('imageService');
    }

    /**
     * Get all images
     */
    public function getAll(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->imageService->getAll();
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Get specific image by ID
     */
    public function getOne(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->imageService->getOne((string) $args['id']);
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * Upload image for a specific website
     */
    public function uploadForWebsite(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $uploadedFiles = $request->getUploadedFiles();

            if (!isset($uploadedFiles['image'])) {
                return $response->withJson(['error' => 'No file uploaded'], 400);
            }

            $uploadedFile = $uploadedFiles['image'];

            if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
                return $response->withJson(['error' => 'File upload failed'], 400);
            }

            // Handle file upload
            $fileInfo = $this->imageService->handleFileUpload($uploadedFile);

            $dto = [
                'src' => $fileInfo['src'],
                'width' => (string) $fileInfo['width'],
                'height' => (string) $fileInfo['height'],
                'filename' => $fileInfo['filename'],
                'filesize' => (string) $fileInfo['filesize'],
                'mimetype' => $fileInfo['mimetype'],
                'websiteId' => $websiteId,
                'createdAt' => date('Y-m-d H:i:s'),
                'updatedAt' => date('Y-m-d H:i:s')
            ];

            $this->imageService->create($dto);

            return $response->withJson([
                'message' => 'File uploaded successfully',
                'file' => $fileInfo
            ], 201);

        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Upload image (general)
     */
    public function upload(Request $request, Response $response, array $args): Response
    {
        try {
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();

            $fileInfo = null;
            
            // Handle file upload if present
            if (isset($uploadedFiles['image'])) {
                $uploadedFile = $uploadedFiles['image'];
                
                if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                    $fileInfo = $this->imageService->handleFileUpload($uploadedFile);
                } else {
                    throw new Exception('File upload failed with error code: ' . $uploadedFile->getError());
                }
            } else {
                throw new Exception('No image file uploaded');
            }

            // Validate required fields
            $validator = v::key('websiteId', v::stringType()->notEmpty());


            

            $dto = [
                'src' => $fileInfo['src'],
                'width' => (string) $fileInfo['width'],
                'height' => (string) $fileInfo['height'],
                'filename' => $fileInfo['filename'],
                'filesize' => (string) $fileInfo['filesize'],
                'mimetype' => $fileInfo['mimetype'],
                'websiteId' => $input['websiteId'] ?? '',
            ];

            $validator->assert($dto);

            $this->imageService->create($dto);
            
            return $response->withJson([
                'message' => 'File uploaded successfully',
                'file' => $fileInfo
            ], 201);

        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Get all images for a specific website
     */
    public function getByWebsiteId(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $result = $this->imageService->getByWebsiteId($websiteId);
            return $response->withJson($result);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * Update image
     */
    public function update(Request $request, Response $response, array $args): Response
    {
        try {
            $input = $request->getParsedBody();
            
            $validator = v::key('src', v::optional(v::stringType()))
                ->key('width', v::optional(v::stringType()))
                ->key('height', v::optional(v::stringType()))
                ->key('filename', v::optional(v::stringType()))
                ->key('filesize', v::optional(v::stringType()))
                ->key('mimetype', v::optional(v::stringType()))
                ->key('websiteId', v::optional(v::stringType()));

            $dto = array_filter([
                'src' => $input['src'] ?? null,
                'width' => $input['width'] ?? null,
                'height' => $input['height'] ?? null,
                'filename' => $input['filename'] ?? null,
                'filesize' => $input['filesize'] ?? null,
                'mimetype' => $input['mimetype'] ?? null,
                'websiteId' => $input['websiteId'] ?? null,
            ]);

            if (!empty($dto)) {
                $validator->assert($dto);
                $this->imageService->update((string) $args['id'], $dto);
            }

            return $response->withStatus(204);
            
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Delete image
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            $result = $this->imageService->delete((string) $args['id']);
            return $response->withJson(['message' => 'Image deleted successfully']);
        } catch (Exception $e) {
            return $response->withJson(['error' => $e->getMessage()], 400);
        }
    }
}