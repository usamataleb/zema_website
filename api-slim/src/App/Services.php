<?php

declare(strict_types=1);

$container['userService'] = static function (Pimple\Container $container): App\Service\UserService {
    return new App\Service\UserService($container['db']);
};

$container['websiteService'] = static function (Pimple\Container $container): App\Service\WebsiteService {
    return new App\Service\WebsiteService($container['db']);
};

$container['imageService'] = static function (Pimple\Container $container): App\Service\ImageService {
    return new App\Service\ImageService($container['db']);
};

$container['carouselItemService'] = static function (Pimple\Container $container): App\Service\CarouselItemService {
    return new App\Service\CarouselItemService($container['db']);
};

$container['regulationService'] = static function (Pimple\Container $container): App\Service\RegulationService {
    return new App\Service\RegulationService($container['db']);
};

$container['tagService'] = static function (Pimple\Container $container): App\Service\TagService {
    return new App\Service\TagService($container['db']);
};

$container['imageTagService'] = static function (Pimple\Container $container): App\Service\ImageTagService {
    return new App\Service\ImageTagService($container['db']);
};

$container['activityLogService'] = static function (Pimple\Container $container): App\Service\ActivityLogService {
    return new App\Service\ActivityLogService($container['db']);
};

$container['packageService'] = static function (Pimple\Container $container): App\Service\PackageService {
    return new App\Service\PackageService($container['db']);
};
