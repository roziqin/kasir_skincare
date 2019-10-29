<?php
session_start();
include '../config/database.php';
include "../include/format_rupiah.php";
   date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-d');
$wkt=date('G:i:s');

$aid = $_SESSION['login_user'];
$aa = "SELECT * from users where id='$aid'";
  $bb = mysqli_query($con,$aa);
  $cc = mysqli_fetch_assoc($bb);
  $id=$cc['name'];
  $iduser=$cc['id'];
      
  $dd = mysqli_query($con,"SELECT * FROM validasi where validasi_user_id='$iduser' and validasi_tanggal='$tgl' order by validasi_id DESC LIMIT 1");
  $datadd=mysqli_fetch_assoc($dd);
  $fisik = $datadd['validasi_jumlah'];
  echo mysql_error();

  $query=mysqli_query($con,"SELECT count(transaksi_id) as jumlah, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon from transaksi where transaksi_tanggal='$tgl' and transaksi_user = '$iduser' group by transaksi_tanggal ");
      $datatea=mysqli_fetch_assoc($query);
      $diskon = $datatea['diskon'];
      $omset = $datatea['total'];
      $tot = $datatea['jumlah'];

      $query1=mysqli_query($con,"SELECT count(transaksi_id) as jumlah, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon from transaksi where transaksi_tanggal='$tgl' and transaksi_user = '$iduser' and transaksi_type_bayar='Debet' group by transaksi_tanggal ");
      $datadebet=mysqli_fetch_assoc($query1);
      $omsetdebet = $datadebet['total'];

      $query2=mysqli_query($con,"SELECT count(transaksi_id) as jumlah, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon from transaksi where transaksi_tanggal='$tgl' and transaksi_user = '$iduser' and transaksi_type_bayar='Cash' group by transaksi_tanggal ");
      $datacash=mysqli_fetch_assoc($query2);
      $omsetcash = $datacash['total'];

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" href="../style-print.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript">
  window.setTimeout(function() {
    window.close();
  },1000)
</script>
</head>

<body onLoad="window.print()" style="
  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <div class="wrapper">

<table  width="100%" border="0">
  <tr>
    <td colspan=3 >Laporan Tutup Kasir</td>
  </tr>
  <tr>
    <td colspan="3"><hr></td>
  </tr>
  <tr>
    <td width="120px">Tanggal</td>
    <td width="10">:</td>
    <td style="text-align: right;"><?php echo $tgl;?></td>
  </tr>
  <tr>
    <td width="80px">Waktu</td>
    <td width="10">:</td>
    <td style="text-align: right;"><?php echo $wkt;?></td>
  </tr>
  <tr>
    <td>Kasir</td>
    <td>:</td>
    <td style="text-align: right;"><?php echo $id;?></td>
  </tr>
  <tr>
    <td colspan="4"><hr></td>
  </tr>
  <tr>
    <td>Uang Fisik</td>
    <td>:</td>
    <td style="text-align: right;"><?php echo format_rupiah($fisik);?></td>
  </tr>
  <tr>
    <td>Cash</td>
    <td>:</td>
    <td style="text-align: right;"><?php echo format_rupiah($omsetcash);?></td>
  </tr>
  <tr>
    <td>Debet</td>
    <td>:</td>
    <td style="text-align: right;"><?php echo format_rupiah($omsetdebet);?></td>
  </tr>
  <tr>
    <td>Total Omset</td>
    <td>:</td>
    <td style="text-align: right;"><?php echo format_rupiah($omset);?></td>
  </tr>
  <tr>
    <td>Selisih</td>
    <td>:</td>
    <td style="text-align: right;"><?php echo format_rupiah($fisik-$omsetcash);?></td>
  </tr>
</table>

</div>
</body>
</html>
