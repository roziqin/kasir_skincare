<?php 
session_start();
include '../../config/database.php';
include "../../include/slug.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');

if($_GET['ket']=='submit-jenis'){

	$nama = $_POST['ip-nama'];
	$slug = slugify($nama);

	$sql = "INSERT into jenis(jenis_nama,jenis_slug)values('$nama','$slug')";

	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='update-jenis'){


	$id = $_POST['ip-id'];
	$nama = $_POST['ip-nama'];
	$slug = slugify($nama);

	$sql="UPDATE jenis set jenis_nama='$nama', jenis_slug='$slug' where jenis_id='$id'";
	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='remove-jenis'){
	$array_datas = array();
	
	$id = $_POST['jenis_id'];
	$sql="DELETE from jenis where jenis_id='$id'";
	if (!mysqli_query($con,$sql)) {
		$array_datas[] = ["gagal"];
	}else{
		$array_datas[] = ["ok"];
	}
	echo json_encode($array_datas);
	
}

?>  