<?php
require_once('conn.php');

$sql = 'SELECT * FROM users';
$result = mysqli_query($conn, $sql);

$to_encode = array();
while($row = $result->fetch_assoc()) {
  $to_encode[] = $row;
}
echo json_encode($to_encode);
?>