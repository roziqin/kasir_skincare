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
	
	$ket1 = "transaksi_tanggal";
	
	$filename = "laporan_nota".$ket1."-".$tgl.".xls";
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=".$filename);
	
	
	?>

	<center>
		<h1>Data Nota</h1>
	</center>
	<table border="1">
		<tr>
			<th>Tanggal</th>
			<th>No Nota</th>
			<th>Pelanggan</th>
			<th>Kasir</th>
			<th>Therapist</th>
			<th>Total</th>
		</tr>
		<?php
		$text_line = explode(":",$_GET['date']);
		$tgl11=$text_line[0];
		$tgl22=$text_line[1];
		$tot = 0;

		$sql ="SELECT * from transaksi, users, member WHERE transaksi_member=member_id and transaksi_user=id and $ket1 BETWEEN '$tgl11' AND '$tgl22' ORDER BY transaksi_id ASC";



		$query = mysqli_query($con,$sql);

		while ($datatea=mysqli_fetch_assoc($query)) {
			
			$sqlt="SELECT * from users WHERE id = $datatea[transaksi_therapist]";
	        $queryt=mysqli_query($con, $sqlt);
	        $datat=mysqli_fetch_assoc($queryt);
            $therapist = $datat['name'];
			

			?>
			<tr>
				<td><?php echo $datatea["transaksi_tanggal"]; ?></td>
				<td><?php echo $datatea["transaksi_id"]; ?></td>
				<td><?php echo $datatea["member_nama"]; ?></td>
				<td><?php echo $datatea["name"]; ?></td>
				<td><?php echo $datat["name"]; ?></td>
				<td align="right"><?php echo $datatea["transaksi_total"]; ?></td>
			</tr>

			<?php
			$tot += $datatea["transaksi_total"];
		}
		
		?>
		<tr>
			<td colspan="5">Total</td>
			<td align="right"><?php echo $tot; ?></td>
		</tr>
	</table>
</body>
</html>