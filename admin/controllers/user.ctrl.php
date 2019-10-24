<?php 
session_start();
include '../../config/database.php';
include "../../include/slug.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');

if($_GET['ket']=='submit-user'){
	
	$nama = $_POST['ip-nama'];
	$user = $_POST['ip-user'];
	$password = md5($_POST['ip-password']);
	$roles = $_POST['ip-roles'];

	$sql = "INSERT into users(name,username,password,role,remember_token)values('$nama','$user','$password','$roles','0')";

	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='update-user'){


	$id = $_POST['ip-id'];
	$nama = $_POST['ip-nama'];
	$user = $_POST['ip-user'];
	$password = md5($_POST['ip-password']);
	$roles = $_POST['ip-roles'];
	
	if ($_POST['ip-password']!='') {
		$sql="UPDATE users set name='$nama',username='$user',password='$password',role='$roles' where id='$id'";
	} else {
		$sql="UPDATE users set name='$nama',username='$user',role='$roles' where id='$id'";
	}
	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='remove-user'){
	$array_datas = array();
	
	$id = $_POST['id'];
	$sql="DELETE from users where id='$id'";
	if (!mysqli_query($con,$sql)) {
		$array_datas[] = ["gagal"];
	}else{
		$array_datas[] = ["ok"];
	}
	echo json_encode($array_datas);
	
}

?>  