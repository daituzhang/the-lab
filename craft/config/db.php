<?php

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    'localhost' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => '',
        'database' => 'the_lab',
    ),
    '192.168.99.100' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => '',
        'database' => 'the_lab',
    ),
    // Treat *.vagrantshare.com the same as localhost
    'vagrantshare.com' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => '',
        'database' => 'the_lab',
    ),
    'accessdomain.com' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => 'M@sean3114',
        'database' => 'the_lab',
    )
);