<?php

declare(strict_types=1);

error_reporting(E_ALL ^ E_DEPRECATED);


use Slim\Middleware\ErrorMiddleware;

require __DIR__ . '/../src/App/App.php';

$app->run();
