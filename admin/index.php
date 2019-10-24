<?php
include '../config/database.php';
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

	$q= "SELECT * FROM pengaturan_perusahaan where pengaturan_id='1'";
	$r=mysqli_query($con, $q);
	$d=mysqli_fetch_assoc($r);
	$pajakresto = $d['pengaturan_pajak'];
	$pajakservice = $d['pengaturan_service'];
	$pajakonline = $d['pengaturan_pajak_online'];
	$pajakpembulatan = $d['pengaturan_pajak_pembulatan'];


?>
<!DOCTYPE html>
<html>
<head>
	<?php include 'partials/head.php'; ?>
</head>
<body  class="fixed-sn mdb-skin-custom nav-slim">

	<input type="hidden" id="ip-pajakresto" value="<?php echo $pajakresto; ?>" name="pajakresto"> 
	<input type="hidden" id="ip-pajakservice" value="<?php echo $pajakservice; ?>" name="pajakservice">
	<input type="hidden" id="ip-pajakonline" value="<?php echo $pajakonline; ?>" name="pajakonline">
	<input type="hidden" id="ip-pajakpembulatan" value="<?php echo $pajakpembulatan; ?>" name="pajakpembulatan">
	<?php include 'partials/sidebar.php'; ?>
	<?php include 'partials/content.php'; ?>
	
</body>
</html>

<?php
}
?>