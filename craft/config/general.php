<?php

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
    ),

    'localhost' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'fpma',
        )
    ),

    'localhost' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'fpma',
        )
    ),

    // Treat *.vagrantshare.com the same as localhost
    '192.168.99.100' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/var/www/the-lab/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'the-lab',
        )
    ),


    'accessdomain.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/var/www/fpma/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'fpma',
        )
    )

    // 'z77z-ghyl.accessdomain.com' => array(
    //     'cooldownDuration' => 0,

    //     'environmentVariables' => array(
    //         'env' => 'prod',
    //         'fileSystemPath' => '/opt/www/public',
    //         'frontEndAssets' => '/dist/',
    //         'siteName' => 'fpma',
    //     )
    // )
);
