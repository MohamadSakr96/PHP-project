<?php 

header("Access-Control-Allow-Origin: *");

$x = (int)$_GET['x'];
$y = (int)$_GET['y'];

function calcNumbers($a,$b) {
    return 2 * $a + $b % 2;
}

$z = calcNumbers($x, $y);

$number = array('number' => $z);

echo json_encode($number);

?>