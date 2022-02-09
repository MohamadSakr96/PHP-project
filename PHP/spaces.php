<?php 

header("Access-Control-Allow-Origin: *");

$paragraph = $_GET['text'];

function trimText($text) {
    return trim($text);
}

$result_text = trimText($paragraph);

$result = array('text' => $result_text);

echo json_encode($result);

?>