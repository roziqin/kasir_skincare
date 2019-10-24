<?php
include 'config/database.php';
session_start();

if(isset($_GET['logout']) AND $_GET['logout']=='1'){
	$id = $_SESSION['login_user'];
    date_default_timezone_set('Asia/jakarta');
    $tgl=date('Y-m-j');
    $wkt=date('H:i:s');
    $tgl1= $tgl." ".$wkt;
  
	$qn= "SELECT MAX( log_id ) AS id FROM log_user where user='$id'";
	$rn=mysqli_query($con, $qn);
	$dn=mysqli_fetch_assoc($rn);
	$user = $dn['id'];

	mysqli_query($con, "UPDATE log_user SET logout='$tgl1' WHERE log_id='$user'");

	unset($_SESSION['login']);
	session_destroy();
	
}
if(!isset($_SESSION['login'])){
	header('location: ../index.php');
}
else{
?>
<!DOCTYPE html>
<html>
<head>
	<?php include 'views/partials/head.php'; ?>
</head>
<body  class="fixed-sn mdb-skin-custom nav-slim transaksi">
	<?php include 'admin/partials/sidebar.php'; ?>
	<?php //include 'views/partials/content.php'; ?>
	
</body>
</html>

<?php
}
?>