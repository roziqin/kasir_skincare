<?php
session_start();
include '../config/database.php';

?>
<!DOCTYPE html>
<html>
<head>
	<title>Export Data Ke Excel </title>
</head>
<body>
	<style type="text/css">
	body{
		font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; ;
	}
	table{
		margin: 20px auto;
		border-collapse: collapse;
	}
	table th,
	table td{
		border: 1px solid #3c3c3c;
		padding: 3px 8px;
 
	}
	</style>
 
	<?php

	$tgl = $_GET['date'];
	
	$menu = $_GET['data'];
	$ket1 = $_GET['ket'];
	$filename = "laporan_stok".$ket1."-".$tgl.".xls";
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=".$filename);


	?>

	<center>
		<h1>Data Stok <?php echo $ket1; ?></h1>
	</center>
	<table border="1">
		<tr>
			<th>Tanggal</th>
			<th>Nama Menu</th>
			<th>Jumlah</th>
			<th>User</th>
		</tr>
		<?php
		$text_line = explode(":",$_GET['date']);
		$tgl11=$text_line[0];
		$tgl22=$text_line[1];

		if ($menu==0) {
		    $text1 = '';
		    $text2 = ', barang_id';
		} else {
		    $text1 = 'barang_id='.$menu.' and ';
		    $text2 = '';

		}



		if ($ket1=="masuk") {

			$ket = "tanggal";

			$sql ="SELECT * from log_stok, barang, users WHERE log_stok.barang=barang_id and id=log_stok.user and keterangan='tambah' and $text1 $ket BETWEEN '$tgl11' AND '$tgl22' ORDER BY tanggal ASC";


			$query = mysqli_query($con,$sql);

			while ($datatea=mysqli_fetch_assoc($query)) {

				$t = $datatea[$ket];
				$nama = $datatea["barang_nama"];
				$jumlah = $datatea["stok_jumlah"] - $datatea["stok_awal"];
				?>
				<tr>
					<td><?php echo $t; ?></td>
					<td><?php echo $nama; ?></td>
					<td><?php echo $jumlah; ?></td>
					<td><?php echo $datatea["name"]; ?></td>
				</tr>

				<?php
			}
			
		} else {

			if ($_GET['waktu']=="harian") {
		    $ket = "transaksi_tanggal"; 
			} elseif ($_GET['waktu']=="bulanan") {
			    $ket = "transaksi_bulan";     
			}

			$sql ="SELECT name, transaksi_tanggal, barang_nama, barang_id, sum(transaksi_detail_jumlah) as jumlah from transaksi, transaksi_detail, barang, users WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and transaksi_user=users.id and barang_set_stok=1 and $text1 $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket $text2 , users.id ORDER BY transaksi_tanggal ASC";



			$query = mysqli_query($con,$sql);

			while ($datatea=mysqli_fetch_assoc($query)) {

				$t = $datatea[$ket];
				$nama = $datatea["barang_nama"];
				$jumlah = $datatea["jumlah"];
				?>
				<tr>
					<td><?php echo $t; ?></td>
					<td><?php echo $nama; ?></td>
					<td><?php echo $jumlah; ?></td>
					<td><?php echo $datatea["name"]; ?></td>
				</tr>

				<?php
			}
		}
		?>
	</table>
</body>
</html>