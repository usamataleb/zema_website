<?php

declare(strict_types=1);

namespace App\Controller;

use App\CustomResponse as Response;
use App\Service\CarouselItemService;
use App\Service\ActivityLogService;
use Exception;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Respect\Validation\Validator as v;

final class CarouselItemController
{
    private CarouselItemService $carouselItemService;
    private ActivityLogService $activityLogService;
    private ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->carouselItemService = $this->container->get('carouselItemService');
        $this->activityLogService = $this->container->get('activityLogService');
    }

    /**
     * Create carousel item with file upload and optimization
     */
    public function create(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();

            // Validate required fields
            if (!$websiteId) {
                return $response->withJson(['error' => 'Website ID is required'], 400);
            }

            if (!isset($uploadedFiles['image'])) {
                return $response->withJson(['error' => 'Image file is required'], 400);
            }

            $uploadedFile = $uploadedFiles['image'];

            if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
                return $response->withJson(['error' => 'File upload failed'], 400);
            }

            // Verify website exists and user has permission
            $userId = $request->getAttribute('decoded')->sub ?? null;
            $website = $this->carouselItemService->verifyWebsiteOwnership($websiteId, $userId);
            
            if (!$website) {
                // Clean up uploaded file if website not found
                $this->carouselItemService->cleanupUploadedFile($uploadedFile);
                return $response->withJson(['error' => 'Website not found or access denied'], 404);
            }

            // Process and optimize the image
            $fileInfo = $this->carouselItemService->processAndOptimizeImage($uploadedFile);

            // Get the maximum sequence value to set default sequence
            $maxsequence = $this->carouselItemService->getMaxsequence($websiteId);
            $nextsequence = isset($input['sequence']) ? (int)$input['sequence'] : $maxsequence + 1;

            $dto = [
                'image' => $fileInfo['src'],
                'title' => $input['title'] ?? '',
                'subtitle' => $input['subtitle'] ?? null,
                'active' => isset($input['active']) ? filter_var($input['active'], FILTER_VALIDATE_BOOLEAN) : true,
                'sequence' => $nextsequence,
                'websiteId' => $websiteId,
                'updatedAt' => date('Y-m-d H:i:s')
            ];

            // Create carousel item
            $carouselItem = $this->carouselItemService->create($dto);

            // Log activity
            $this->activityLogService->logActivity(
                $userId,
                'carousel_create',
                [
                    'carouselItemId' => $carouselItem['id'],
                    'websiteId' => $websiteId,
                    'title' => $carouselItem['title']
                ],
                $request->getServerParams()['REMOTE_ADDR'] ?? '',
                $request->getHeaderLine('User-Agent')
            );

            return $response->withJson([
                'success' => true,
                'message' => 'Carousel item created successfully',
                'item' => $carouselItem
            ], 201);

        } catch (Exception $e) {
            return $response->withJson(['error' => 'Failed to create carousel item: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Get carousel item by ID
     */
    public function getOne(Request $request, Response $response, array $args): Response
    {
        try {
            $id = (string) $args['id'];
            $userId = $request->getAttribute('decoded')->sub ?? null;

            $carouselItem = $this->carouselItemService->getOneWithOwnership($id, $userId);

            if (!$carouselItem) {
                return $response->withJson(['error' => 'Carousel item not found or access denied'], 404);
            }

            return $response->withJson([
                'success' => true,
                'item' => $carouselItem
            ]);

        } catch (Exception $e) {
            return $response->withJson(['error' => 'Failed to fetch carousel item: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Get all carousel items for a website
     */
    public function getByWebsiteId(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];

            // Validate website exists
            $website = $this->carouselItemService->getWebsite($websiteId);
            
            if (!$website) {
                return $response->withJson(['error' => 'Website not found'], 404);
            }

            $carouselItems = $this->carouselItemService->getByWebsiteId($websiteId, true);

            return $response->withJson([
                'success' => true,
                'items' => $carouselItems
            ]);

        } catch (Exception $e) {
            return $response->withJson(['error' => 'Failed to fetch carousel items: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Update carousel item
     */
    public function update(Request $request, Response $response, array $args): Response
    {
        try {
            $id = (string) $args['id'];
            $uploadedFiles = $request->getUploadedFiles();
            $input = $request->getParsedBody();
            $userId = $request->getAttribute('decoded')->sub ?? null;

            // Find carousel item and verify ownership
            $existingItem = $this->carouselItemService->getOneWithOwnership($id, $userId);

            if (!$existingItem) {
                if (isset($uploadedFiles['image'])) {
                    $this->carouselItemService->cleanupUploadedFile($uploadedFiles['image']);
                }
                return $response->withJson(['error' => 'Carousel item not found or access denied'], 404);
            }

            $fileInfo = null;
            $imageUrl = $existingItem['image'];

            // Handle new image upload
            if (isset($uploadedFiles['image'])) {
                $uploadedFile = $uploadedFiles['image'];
                
                if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                    // Process and optimize the new image
                    $fileInfo = $this->carouselItemService->processAndOptimizeImage($uploadedFile);
                    $imageUrl = $fileInfo['src'];

                    // Delete old image file
                    $this->carouselItemService->deleteFile(basename($existingItem['image']));
                }
            }

            $dto = [
                'image' => $imageUrl,
                'title' => $input['title'] ?? $existingItem['title'],
                'subtitle' => $input['subtitle'] ?? $existingItem['subtitle'],
                'active' => isset($input['active']) ? filter_var($input['active'], FILTER_VALIDATE_BOOLEAN) : $existingItem['active'],
                'sequence' => isset($input['sequence']) ? (int)$input['sequence'] : $existingItem['sequence'],
                'updatedAt' => date('Y-m-d H:i:s')
            ];

            // Update carousel item
            $carouselItem = $this->carouselItemService->update($id, $dto);

            // Log activity
            $this->activityLogService->logActivity(
                $userId,
                'carousel_update',
                [
                    'carouselItemId' => $carouselItem['id'],
                    'websiteId' => $carouselItem['websiteId'],
                    'title' => $carouselItem['title']
                ],
                $request->getServerParams()['REMOTE_ADDR'] ?? '',
                $request->getHeaderLine('User-Agent')
            );

            return $response->withJson([
                'success' => true,
                'message' => 'Carousel item updated successfully',
                'item' => $carouselItem
            ]);

        } catch (Exception $e) {
            return $response->withJson(['error' => 'Failed to update carousel item: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Delete carousel item
     */
    public function delete(Request $request, Response $response, array $args): Response
    {
        try {
            $id = (string) $args['id'];
            $userId = $request->getAttribute('decoded')->sub ?? null;

            // Find carousel item and verify ownership
            $carouselItem = $this->carouselItemService->getOneWithOwnership($id, $userId);

            if (!$carouselItem) {
                return $response->withJson(['error' => 'Carousel item not found or access denied'], 404);
            }

            // Delete image file
            $this->carouselItemService->deleteFile(basename($carouselItem['image']));

            // Delete carousel item
            $this->carouselItemService->delete($id);

            // Log activity
            $this->activityLogService->logActivity(
                $userId,
                'carousel_delete',
                [
                    'carouselItemId' => $carouselItem['id'],
                    'websiteId' => $carouselItem['websiteId'],
                    'title' => $carouselItem['title']
                ],
                $request->getServerParams()['REMOTE_ADDR'] ?? '',
                $request->getHeaderLine('User-Agent')
            );

            return $response->withJson([
                'success' => true,
                'message' => 'Carousel item deleted successfully'
            ]);

        } catch (Exception $e) {
            return $response->withJson(['error' => 'Failed to delete carousel item: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Resequence carousel items
     */
    public function resequence(Request $request, Response $response, array $args): Response
    {
        try {
            $websiteId = (string) $args['websiteId'];
            $input = $request->getParsedBody();
            $userId = $request->getAttribute('decoded')->sub ?? null;

            if (!isset($input['items']) || !is_array($input['items'])) {
                return $response->withJson(['error' => 'Items array is required'], 400);
            }

            // Verify website ownership
            $website = $this->carouselItemService->verifyWebsiteOwnership($websiteId, $userId);
            
            if (!$website) {
                return $response->withJson(['error' => 'Website not found or access denied'], 404);
            }

            // Update sequence for each item
            foreach ($input['items'] as $item) {
                if (!isset($item['id']) || !isset($item['sequence'])) {
                    continue;
                }
                $this->carouselItemService->update($item['id'], ['sequence' => (int)$item['sequence']]);
            }

            // Log activity
            $this->activityLogService->logActivity(
                $userId,
                'carousel_resequence',
                [
                    'websiteId' => $websiteId,
                    'itemsCount' => count($input['items'])
                ],
                $request->getServerParams()['REMOTE_ADDR'] ?? '',
                $request->getHeaderLine('User-Agent')
            );

            return $response->withJson([
                'success' => true,
                'message' => 'Carousel items resequenceed successfully'
            ]);

        } catch (Exception $e) {
            return $response->withJson(['error' => 'Failed to resequence carousel items: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Create carousel item with upload (alternative endpoint)
     */
    public function createWithUpload(Request $request, Response $response, array $args): Response
    {
        return $this->create($request, $response, $args);
    }
}