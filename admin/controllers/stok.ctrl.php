<?php 
session_start();
include '../../config/database.php';
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');

if($_GET['ket']=='submit-stok'){


	$id = $_POST['ip-id'];
	$user = $_SESSION['login_user'];

	$sql="SELECT * from barang where barang_id='$id'";

	$query=mysqli_query($con, $sql);
	$data=mysqli_fetch_assoc($query);

	$awal=$data['barang_stok'];
	$jumlah = $_POST['ip-jumlah']+$awal;

	$sql1 = "INSERT into log_stok(user,barang,stok_awal,stok_jumlah,tanggal,keterangan)values('$user','$id','$awal','$jumlah','$tgl','tambah')";
	mysqli_query($con,$sql1);

	$sql2="UPDATE barang set barang_stok='$jumlah' where barang_id='$id'";

	mysqli_query($con,$sql2);
	
	
} elseif($_GET['ket']=='update-stok'){


	$id = $_POST['ip-id'];
	$user = $_SESSION['login_user'];

	$ket = $_POST['ip-ket'];

	$sql="SELECT * from barang where barang_id='$id'";

	$query=mysqli_query($con, $sql);
	$data=mysqli_fetch_assoc($query);

	$awal=$data['barang_stok'];
	$jumlah = $awal-$_POST['ip-jumlah'];

	if ($jumlah>0) {

		$sql1 = "INSERT into log_stok(user,barang,stok_awal,stok_jumlah,tanggal,alasan,keterangan)values('$user','$id','$awal','$jumlah','$tgl','$ket','kurang')";
		mysqli_query($con,$sql1);

		$sql2="UPDATE barang set barang_stok='$jumlah' where barang_id='$id'";

		mysqli_query($con,$sql2);
	}
}

?>  