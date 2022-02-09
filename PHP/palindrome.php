<?php 

header("Access-Control-Allow-Origin: *");

$palin = $_GET['string'];

function checkPalindrome($s) {
    if (strrev($s) == $s) {
        return true;
    }else {
        return false;
    }
}

$isPalindrome = checkPalindrome($palin);

$palindrome_array = array('string' => $palin, 'state' => $isPalindrome);

echo json_encode($palindrome_array);

?>