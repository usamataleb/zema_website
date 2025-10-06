<?php

declare(strict_types=1);

use Slim\App;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Controller\TagController;
use App\Controller\AuthController;
use App\Controller\UserController;
use App\Middleware\AuthMiddleware;
use App\Controller\ImageController;
use App\Controller\PackageController;
use App\Controller\WebsiteController;
use App\Controller\ImageTagController;
use App\Middleware\RateLimitMiddleware;
use App\Controller\RegulationController;
use App\Middleware\ValidationMiddleware;
use App\Controller\ActivityLogController;
use App\Controller\CarouselItemController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

return static function (App $app) {

  $authMiddleware = new AuthMiddleware();
  $rateLimitMiddleware = new RateLimitMiddleware();

  // --------------- Home Routes ---------------- //
  $app->get('/', "App\Controller\Home:home");
  $app->get('/status', "App\Controller\Home:home");

  // --------------- Auth Routes (Public) ---------------- //
  $app->group('/auth', function ($app) {
    $app->post('/login', [AuthController::class, 'login']);
    $app->post('/register', [AuthController::class, 'register']);
    $app->post('/refresh', [AuthController::class, 'refreshToken']);
    $app->get('/me', [AuthController::class, 'getCurrentUser']);
  });

  // --------------- User Routes (Protected) ---------------- //
  $app->group('/users', function ($app) {
    $app->get('', [UserController::class, 'getAll']);
    $app->post('', [UserController::class, 'create']);
    $app->get('/{id}', [UserController::class, 'getOne']);
    $app->put('/{id}', [UserController::class, 'update']);
    $app->delete('/{id}', [UserController::class, 'delete']);
  })->add($authMiddleware);

  // --------------- Website Routes (Protected) ---------------- //
  $app->group('/websites', function ($app) {
    $app->get('', [WebsiteController::class, 'getAll']);
    $app->post('', [WebsiteController::class, 'create']);
    $app->get('/{id}', [WebsiteController::class, 'getOne']);
    $app->put('/{id}', [WebsiteController::class, 'update']);
    $app->delete('/{id}', [WebsiteController::class, 'delete']);
  })->add($authMiddleware);

  // --------------- Image Routes ---------------- //
  $app->group('/images', function ($app) use ($authMiddleware, $rateLimitMiddleware) {
    // Upload image for a specific website - Protected with rate limiting
    $app->post('/upload/{websiteId}', [ImageController::class, 'uploadForWebsite'])
      ->add($rateLimitMiddleware)
      ->add($authMiddleware);
    $app->get('/websiteId/{websiteId}', [ImageController::class, 'getByWebsiteId']);
    $app->get('', [ImageController::class, 'getAll'])->add($authMiddleware);
    $app->get('/{id}', [ImageController::class, 'getOne'])->add($authMiddleware);
    $app->put('/{id}', [ImageController::class, 'update'])->add($authMiddleware);
    $app->delete('/{id}', [ImageController::class, 'delete'])->add($authMiddleware);
    $app->post('/upload', [ImageController::class, 'upload'])->add($authMiddleware);
  });

  // --------------- CarouselItem Routes ---------------- //
  $app->group('/carousel', function ($app) use ($authMiddleware, $rateLimitMiddleware) {
    $app->post('/{websiteId}', [CarouselItemController::class, 'create'])->add($authMiddleware);
    $app->get('/{id}', [CarouselItemController::class, 'getOne'])->add($authMiddleware);
    $app->get('/websiteId/{websiteId}', [CarouselItemController::class, 'getByWebsiteId'])->add($rateLimitMiddleware);
    $app->put('/{id}', [CarouselItemController::class, 'update'])->add($authMiddleware);
    $app->delete('/{id}', [CarouselItemController::class, 'delete'])->add($authMiddleware);
    $app->post('/{websiteId}/reorder', [CarouselItemController::class, 'reorder'])->add($authMiddleware);
    $app->post('/{websiteId}/upload', [CarouselItemController::class, 'createWithUpload'])->add($authMiddleware);
  });

  // --------------- Tag Routes (Protected) ---------------- //
  $app->group('/tags', function ($app) {
    $app->get('', [TagController::class, 'getAll']);
    $app->post('', [TagController::class, 'create']);
    $app->get('/{id}', [TagController::class, 'getOne']);
    $app->put('/{id}', [TagController::class, 'update']);
    $app->delete('/{id}', [TagController::class, 'delete']);
  })->add($authMiddleware);

  // --------------- ImageTag Routes (Protected) ---------------- //
  $app->group('/image-tags', function ($app) {
    $app->get('', [ImageTagController::class, 'getAll']);
    $app->post('', [ImageTagController::class, 'create']);
    $app->get('/{id}', [ImageTagController::class, 'getOne']);
    $app->put('/{id}', [ImageTagController::class, 'update']);
    $app->delete('/{id}', [ImageTagController::class, 'delete']);
  })->add($authMiddleware);

  // --------------- ActivityLog Routes (Protected) ---------------- //
  $app->group('/activity-logs', function ($app) {
    $app->get('', [ActivityLogController::class, 'getAll']);
    $app->post('', [ActivityLogController::class, 'create']);
    $app->get('/{id}', [ActivityLogController::class, 'getOne']);
    $app->put('/{id}', [ActivityLogController::class, 'update']);
    $app->delete('/{id}', [ActivityLogController::class, 'delete']);
  })->add($authMiddleware);

  // --------------- Package Routes ---------------- //
  $app->group('/packages', function ($app) use ($authMiddleware) {
    $app->post('/{websiteId}', [PackageController::class, 'createForWebsite'])->add($authMiddleware);
    $app->post('/{id}/image', [PackageController::class, 'uploadImage'])->add($authMiddleware);
    $app->get('/{packageId}', [PackageController::class, 'getOne']);
    $app->get('', [PackageController::class, 'getAll'])->add($authMiddleware);
    $app->get('/website/{websiteId}', [PackageController::class, 'getByWebsiteId'])->add($authMiddleware);
    $app->put('/{id}', [PackageController::class, 'update'])->add($authMiddleware);
    $app->delete('/{id}', [PackageController::class, 'delete'])->add($authMiddleware);
    $app->get('/public/website/{websiteId}', [PackageController::class, 'getPublicByWebsiteId']);
    $app->post('/{websiteId}/upload', [PackageController::class, 'upload'])->add($authMiddleware);
  });

  // --------------- Regulation Routes ---------------- //
  $app->group('/regulations', function ($app) use ($authMiddleware) {
    // Get all regulations (all sections)
    $app->get('', [RegulationController::class, 'getAll']);

    // Section-specific routes
    $app->group('/{section}', function ($app) use ($authMiddleware) {
      // Get all items in a section
      $app->get('', [RegulationController::class, 'getBySection']);

      // Create new item in a section
      $app->post('', [RegulationController::class, 'create'])->add($authMiddleware);

      // Get single item from section
      $app->get('/{id}', [RegulationController::class, 'getOne']);

      // Update item in section
      $app->put('/{id}', [RegulationController::class, 'update'])->add($authMiddleware);

      // Delete item from section
      $app->delete('/{id}', [RegulationController::class, 'delete'])->add($authMiddleware);
    });
  });


  return $app;
};
