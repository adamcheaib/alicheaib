<?php
ini_set('display_errors', 1);
function sendJSON($message, $httpCode = 200)
{
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
$rootFolder = "../"; // Gets the name of the root folder. Issues with absolute path otherwise!

if ($requestMethod != 'GET') {
    $message = ["message" => "RASTAMAN BLISS"];
    sendJSON($message, 404);
}

$images = [];
$requestedCategory = $_GET["category"];
$subCategory = null;



if (key_exists("subCategory", $_GET) != false) {
    $subCategory = $_GET["subCategory"];
}

$pathToCategory = "$rootFolder" . "media/pc/$requestedCategory/";


if ($subCategory != null) {
    // Code here to fetch the different categories!
    $subCategories = explode(",", $_GET["subCategory"]);

    foreach ($subCategories as $subCategory) {
        $scannedSubCategoryImages = array_slice(scandir("$pathToCategory/$subCategory"), 2);
        $images[$subCategory] = [];

        foreach ($scannedSubCategoryImages as $image) {
            $images[$subCategory][] = $rootFolder . "../../media/pc/$requestedCategory/$subCategory/$image";
        }
    }

    sendJSON($images);
} else {
    // Code here for just pages with no categories!
    $scannedCategoryImages = array_slice(scandir($pathToCategory), 2);

    foreach ($scannedCategoryImages as $image) {
        $images[] = "../$pathToCategory/$image";
    }

    shuffle($images);
    sendJSON($images);
}

?>