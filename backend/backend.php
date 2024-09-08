<?php
ini_set('display_errors', 1);
function sendJSON($message, $httpCode = 200) {
    header('Content-type: application/json');
    http_response_code($httpCode);
    echo json_encode($message);
    exit();
}

/*
The details for the API should look like this:
- page <-- name of the page i.e 3d or speedArt
- subCategory1 <-- For example, in 3d there is products.
- subCategory2 <-- For example, in 3d there is models.
- subCategory3 <-- For example, in 3d there is characters.
 * */

$requestMethod = $_SERVER['REQUEST_METHOD'];
$rootFolder = $_SERVER["DOCUMENT_ROOT"]; // Gets the name of the root folder. Issues with absolute path otherwise!


$requestedCategory = $_GET["category"];
$requestedFolders = array_slice($_GET, 1);

if ($_GET["subCategory"] != null) {
    echo "IT IS NOT NULL";
    // Code here to fetch the different categories!
} else {
    // Code here for just pages with no categories!
}

if ($requestMethod != 'GET') {
    $message = ["message" => "RASTAMAN BLISS"];
    sendJSON($message, 404);
}

// This is just for reference!
$imageDirectory = array_slice(scandir($rootFolder. "/media/pc"), 2);
sendJSON(["images" => $imageDirectory]);

?>