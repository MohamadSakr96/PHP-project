<?php 

header("Access-Control-Allow-Origin: *");

$paragraph = $_GET['text'];

function removeWhiteSpaces($text) {
    return preg_replace('/\s+/', ' ', $text);
}

$result_text = removeWhiteSpaces($paragraph);

$result = array('text' => $result_text);

echo json_encode($result);

?>