<?php

use Doctrine\DBAL\Connection;
use Psr\Container\ContainerInterface;

return [
    // Register the Connection interface to point to your db service
    Connection::class => function (ContainerInterface $container) {
        return $container->get('db'); // or whatever your DB service is called
    },

    // Your existing db service configuration
    'db' => function (ContainerInterface $container) {
        $settings = $container->get('settings')['db'];
        
        $config = new \Doctrine\DBAL\Configuration();
        $connectionParams = [
            'dbname' => $settings['database'],
            'user' => $settings['username'],
            'password' => $settings['password'],
            'host' => $settings['host'],
            'driver' => 'pdo_mysql',
            'charset' => 'utf8mb4',
            'defaultTableOptions' => [
                'charset' => 'utf8mb4',
                'collate' => 'utf8mb4_unicode_ci',
            ],
        ];
        
        return \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
    },

    // AuthController registration
    App\Controller\AuthController::class => function (ContainerInterface $container) {
        return new App\Controller\AuthController($container);
    },
];