<?php
// Create a stream
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header'=>"Authorization: Bearer Zu3bEvQ7e6PEstdZ7AJYmCWKMCdfWgwWgPsvOwVbEKsRoruajUvPEeQ1BEAnsJ2msAf03FhI3FnHiOwpuBeyj3I28GlgpCf3HkzR7_rfNvb_sGyqGvkh9R46xTAfW3Yx\r\n"
  )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$file = file_get_contents('https://api.yelp.com/v3/businesses/the-lab-photo-booth-dallas', false, $context);
$obj = json_decode($file);
$data = get_object_vars($obj);
print_r($data['rating']);
?>