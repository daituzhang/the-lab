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

    'vagrantshare' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/vagrant/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'fpma',
        )
    ),

    'accessdomain.com' => array(
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/var/www/the-lab/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'the-lab',
        )
    ),

    'eventsbythelab.com' => array(
        'environmentVariables' => array(
            'env' => 'dev',
            'fileSystemPath' => '/var/www/the-lab/public/',
            'frontEndAssets' => '/src/',
            'siteName' => 'the-lab',
        )
    )

);
