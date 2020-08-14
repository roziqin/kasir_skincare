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
	
	$ket1 = $_GET['ket'];

	$typebayar = $_GET['typebayar'];
	
	$filename = "laporan_omset".$ket1."-".$tgl.".xls";
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=".$filename);

	
	?>

	<center>
		<h1>Data Omset</h1>
	</center>
	<table border="1">
		<tr>
			<th>Tanggal</th>
			<th>Cash</th>
			<th>Debet</th>
			<th>Total Omset</th>
		</tr>
		<?php
		$text_line = explode(":",$_GET['date']);
		$tgl11=$text_line[0];
		$tgl22=$text_line[1];
		$tot = 0;


		if ($_GET['ket']=="harian") {
	    $ket = "transaksi_tanggal"; 
		} elseif ($_GET['ket']=="bulanan") {
		    $ket = "transaksi_bulan";     
		}


	    if ($typebayar=='') {
	        $bayartext = '';
	    } else {
	        $bayartext = "transaksi_type_bayar='".$typebayar."' and ";

	    }

		$sql ="SELECT transaksi_tanggal, transaksi_bulan, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon from transaksi WHERE $bayartext $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket ORDER BY transaksi_tanggal ASC";



		$query = mysqli_query($con,$sql);

		while ($datatea=mysqli_fetch_assoc($query)) {

			$tglket = $datatea[$ket];

			$sqlcash="SELECT sum(transaksi_total) as total from transaksi WHERE $ket='$tglket' and transaksi_type_bayar='Cash' GROUP BY $ket ";
	        $querycash=mysqli_query($con, $sqlcash);
	        $datacash=mysqli_fetch_assoc($querycash);
	        $totalcash = 0;
	        if ($datacash['total']!='') {
	            $totalcash = $datacash['total'];
	        }

	        $sqldebet="SELECT sum(transaksi_total) as total from transaksi WHERE $ket='$tglket' and transaksi_type_bayar='Debet' GROUP BY $ket ";
	        $querydebet=mysqli_query($con, $sqldebet);
	        $datadebet=mysqli_fetch_assoc($querydebet);
	        $totaldebet = 0;
	        if ($datadebet['total']!='') {
	            $totaldebet = $datadebet['total'];
	        }

	        if ($typebayar=='debet') {
	            $totalcash = 0;
	        } elseif ($typebayar=='cash') {
	            $totaldebet = 0;
	        }

			?>
			<tr>
				<td><?php echo $tglket; ?></td>
				<td><?php echo $totalcash; ?></td>
				<td><?php echo $totaldebet; ?></td>
				<td><?php echo $datatea["total"]; ?></td>
			</tr>

			<?php
			$tot += $datatea["total"];
		}
		
		?>
		<tr>
			<td colspan="3">Total</td>
			<td align="right"><?php echo $tot; ?></td>
		</tr>
	</table>
</body>
</html>