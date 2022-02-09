<?php 

header("Access-Control-Allow-Origin: *");

$palin = $_GET['string'];

function checkPalindrome($s) {
    if (strrev($s) == $s) {
        return 1;
    }else {
        return 0;
    }
}

$isPalindrome = checkPalindrome($palin);

$palindrome_array = array('string' => $isPalindrome);

echo json_encode($palindrome_array);

?>