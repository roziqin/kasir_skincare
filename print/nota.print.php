<?php
session_start();
include '../config/database.php';
include "../include/format_rupiah.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');
$wkt=date('G:i:s');

$aid = $_SESSION['login_user'];
$aa = "select * from users where id='$aid'";
$bb=mysqli_query($con,$aa);
$cc=mysqli_fetch_assoc($bb);

$id=$cc['name'];
$iduser=$cc['id'];
  
$sqlpengaturan="SELECT * from pengaturan_perusahaan where  pengaturan_id='1' ";
$querypengaturan=mysqli_query($con,$sqlpengaturan);
$datapengaturan=mysqli_fetch_assoc($querypengaturan);
    

    $t = $_GET['id'];
//$t = 5;
    $sql="SELECT * from transaksi, member, users where transaksi_member=member_id and id=transaksi_therapist and transaksi_id='$t' ";
    $query = mysqli_query($con,$sql);
    while($data = mysqli_fetch_assoc($query)) {

      $idmember=$data['member_id'];
      $nomember=$data['member_no'];
      $rmmember=$data['member_rm'];
      if ($idmember==0) {
        $pelanggan=$data['transaksi_nama'];
      } else {
        $pelanggan=$data['member_nama'];
      }
      $therapist=$data['name'];
      $type=$data['transaksi_type_bayar'];
      $tanggal = $data['transaksi_tanggal'];
      $tran_diskon = $data['transaksi_diskon'];
      $tran_tot = $data['transaksi_total'];
      $bayar = $data['transaksi_bayar'];
      $kembalian = $bayar - $tran_tot;
      $type = $data['transaksi_type_bayar'];
      $nota_print=$data['transaksi_nota_print'];
    }
        

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" href="../assets/css/style-print.css?ab">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript">
  window.setTimeout(function() {
    window.close();
  },1000)
</script>
</head>
<body onLoad="window.print()" style=" font-size: 12px;">
    <div class="wrapper">
      <div class="box">
        <div class="box-custom">
          <img src="../assets/img/<?php echo $datapengaturan['pengaturan_logo']; ?>" style=" width: 100px;">
        </div>
        <div class="box-custom" style="width: 200px;">
          <p style=" font-size: 13px;"><?php echo $datapengaturan['pengaturan_nama']; ?></p>
          <p><?php echo $datapengaturan['pengaturan_alamat']; ?></p>
          <p>Tlp. <?php echo $datapengaturan['pengaturan_telp']; ?></p>        
        </div>
      </div>
     
      
      <table  width="100%" border="0" >
        <tr>
          <td width="80">Tgl & Waktu</td>
          <td width="10">:</td>
          <td ><?php echo $tgl." - ".$wkt; ?></td>
          <td width="80" align="right">No. Nota - <?php echo $nota_print; ?></td>
        </tr>
        <tr>
          <td width="60">Pasien</td>
          <td width="10">:</td>
          <td ><?php echo $pelanggan;?></td>
          <td width="80" align="right">RM - <?php echo $rmmember; ?></td>
        </tr>
      </table>
      <table  width="100%" border="0" >
        <tr>
          <td width="80">Kasir</td>
          <td width="10">:</td>
          <td ><?php echo $id;?></td>
          <td align="right">Therapist : <?php echo $therapist;?></td>
        </tr>
      </table>

      <table width="100%" border="0">
        <tr>
          <th align="left">Barang</th>
          <th width="24" align="center">Jml.</th>
          <th width="60" align="center">Harga</th>
          <th width="60" align="center">Subtotal</th>
        </tr>
         <?php
          $no=1;
          $sql="SELECT * from transaksi_detail,barang WHERE transaksi_detail_barang_id=barang_id and transaksi_detail_nota='$t'";
          $query = mysqli_query($con,$sql);
          while($data = mysqli_fetch_assoc($query)) {

            $barang=$data['barang_nama'];
            $jumlah=$data['transaksi_detail_jumlah'];
            $diskon=$data['transaksi_detail_diskon'];
            $harga=$data['transaksi_detail_harga'];
            $tot=$data['transaksi_detail_total'];

            echo "

            <tr>
              <td>".$barang."</td>
              <td align='center'>".$jumlah."</td>
              <td align='right'>".format_rupiah($harga)."</td>
              <td align='right'>".format_rupiah($tot)."</td>
            </tr>
            ";
            
            $no=$no+1;
          }         
        ?>
        <tr>
          <td colspan="4"><hr color="black"></td>
        </tr>
        <tr>
          <td align="left" scope="row" colspan="2">Subtotal</td>
          <td align="right">: Rp.</td>
          <td align="right"><?php echo format_rupiah($tran_tot+$tran_diskon) ; ?></td>
        </tr>
        <tr>
          <td align="left" scope="row" colspan="2">Diskon</td>
          <td align="right">: Rp.</td>
          <td align="right"><?php echo format_rupiah($tran_diskon) ; ?></td>
        </tr>
        <tr>
          <td align="left" scope="row" colspan="2">Total</td>
          <td align="right">: Rp.</td>
          <td align="right"><?php echo format_rupiah($tran_tot) ; ?></td>
        </tr>
        <tr>
          <td align="left" scope="row" colspan="2">Bayar</td>
          <td align="right">: Rp.</td>
          <td align="right"><?php echo format_rupiah($bayar) ; ?></td>
        </tr>
        <tr>
          <td align="left" scope="row" colspan="2">Kembalian</td>
          <td align="right">: Rp.</td>
          <td align="right"><?php echo format_rupiah($kembalian) ; ?></td>
        </tr>
        <tr>
          <td colspan="4" align="center" style="font-size: 9px; padding-top: 3px;">TERIMA KASIH</td>
        </tr>
      </table>
  </div>
</body>
</html>
