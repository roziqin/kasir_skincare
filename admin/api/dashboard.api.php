<?php
include '../../config/database.php';
session_start();

$field = $_GET['field'];
$table = $_GET['table'];
$condition = $_GET['condition'];

$query = "SELECT transaksi_tanggal, sum(transaksi_total) as total FROM transaksi where transaksi_tanggal BETWEEN '2019-09-01' and '2019-09-07' GROUP BY transaksi_tanggal";

$result = mysqli_query($con,$query);
$array_data = array();
while($baris = mysqli_fetch_assoc($result))
{
  $array_data[]=$baris;
}

echo json_encode($array_data);
?>

