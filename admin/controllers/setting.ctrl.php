<?php 
session_start();
include '../../config/database.php';
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');

if($_GET['ket']=='update-setting'){

	$id = 1;
	$nama = $_POST['ip-nama'];
	$alamat = $_POST['ip-alamat'];
	$telp = $_POST['ip-telp'];
	$service = $_POST['ip-service'];
	$pajak = $_POST['ip-pajak'];
	$pajakpembulatan = $_POST['ip-pajak-pembulatan'];
	$pajakonline = $_POST['ip-pajakonline'];
	$printchecklist = $_POST['ip-print-checklist'];
	$printkitchen = $_POST['ip-print-kitchen'];
	$printsnack = $_POST['ip-print-snack'];
	$printbar = $_POST['ip-print-bar'];

	if (isset($_FILES['inputfile'])) {
		$logo = $_FILES['inputfile']['name'];

		$file_tmp = $_FILES['inputfile']['tmp_name'];
		move_uploaded_file($file_tmp, '../../assets/img/'.$logo);


		$sql="UPDATE pengaturan_perusahaan set pengaturan_nama='$nama',pengaturan_alamat='$alamat',pengaturan_telp='$telp',pengaturan_service='$service',pengaturan_pajak='$pajak',pengaturan_pajak_online='$pajakonline',pengaturan_pajak_pembulatan='$pajakpembulatan',pengaturan_print_checklist='$printchecklist',pengaturan_print_kitchen='$printkitchen',pengaturan_print_snack='$printsnack',pengaturan_print_bar='$printbar',pengaturan_logo='$logo' where pengaturan_id='$id'";

		echo $logo;
	} else {
		$sql="UPDATE pengaturan_perusahaan set pengaturan_nama='$nama',pengaturan_alamat='$alamat',pengaturan_telp='$telp',pengaturan_service='$service',pengaturan_pajak='$pajak',pengaturan_pajak_online='$pajakonline',pengaturan_pajak_pembulatan='$pajakpembulatan',pengaturan_print_checklist='$printchecklist',pengaturan_print_kitchen='$printkitchen',pengaturan_print_snack='$printsnack',pengaturan_print_bar='$printbar' where pengaturan_id='$id'";
		echo "noupload";

	}


	
	mysqli_query($con,$sql);

		

} 

?>  