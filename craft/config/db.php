<?php

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    'localhost' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => '',
        'database' => 'the-lab',
    ),
    // Treat *.vagrantshare.com the same as localhost
    'vagrantshare.com' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => '',
        'database' => 'the-lab',
    ),
    'staging' => array(
        'server' => 'localhost',
        'user' => '',
        'password' => '',
        'database' => '',
    ),
    'accessdomain.com' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => 'Key+1010fr',
        'database' => 'the-lab',
    )
);