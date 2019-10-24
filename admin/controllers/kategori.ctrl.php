<?php 
session_start();
include '../../config/database.php';
include "../../include/slug.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');

if($_GET['ket']=='submit-kategori'){

	$nama = $_POST['ip-nama'];
	$jenis = $_POST['ip-jenis'];
	$slug = slugify($nama);

	$sql = "INSERT into kategori(kategori_nama,kategori_jenis,kategori_slug)values('$nama','$jenis','$slug')";

	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='update-kategori'){


	$id = $_POST['ip-id'];
	$nama = $_POST['ip-nama'];
	$jenis = $_POST['ip-jenis'];
	$slug = slugify($nama);

	$sql="UPDATE kategori set kategori_nama='$nama',kategori_jenis='$jenis', kategori_slug='$slug' where kategori_id='$id'";
	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='remove-kategori'){
	$array_datas = array();
	
	$id = $_POST['kategori_id'];
	$sql="DELETE from kategori where kategori_id='$id'";
	if (!mysqli_query($con,$sql)) {
		$array_datas[] = ["gagal"];
	}else{
		$array_datas[] = ["ok"];
	}
	echo json_encode($array_datas);
	
}

?>  