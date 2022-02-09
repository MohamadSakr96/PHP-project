<?php 

header("Access-Control-Allow-Origin: *");

$pass = $_GET['password'];

function checkPass($p) {
    if (strlen($p) >= 8) {
        if (preg_match('/[A-Za-z]/', $p) && preg_match('/[0-9]/', $p)) {
            return true;
        }
    }
    return false;
}

$password_state = checkPass($pass);
$password_hashed = hash("SHA256", $pass);

$result = array('password' => $password_hashed, 'state' => $password_state);

echo json_encode($result);

?>