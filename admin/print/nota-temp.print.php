<?php
session_start();
  include '../../config/database.php';
  function format_rupiah($angka){
    $rupiah=number_format($angka,0,',','.');
    return $rupiah;
  }
   date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');
$wkt=date('G:i:s');

/*
  $qn= "SELECT MAX( log_id ) AS id FROM log_user where user='$id'";
  $rn=mysqli_query($con, $qn);
  $dn=mysqli_fetch_assoc($rn);
*/

$ordertype = $_GET['ordertype'];
$aid = $_SESSION['login_user'];
$aa = "SELECT * from users where id='$aid'";
  $bb = mysqli_query($con, $aa);
  $cc = mysqli_fetch_assoc($bb);
  $id=$cc['name'];
  $iduser=$cc['id'];
  
    $sqlpengaturan="SELECT * from pengaturan_perusahaan where  pengaturan_id='1' ";
    $querypengaturan=mysqli_query($con, $sqlpengaturan);
    $datapengaturan=mysqli_fetch_assoc($querypengaturan);
    $pajakresto = $datapengaturan['pengaturan_pajak'];
    $pajakservice = $datapengaturan['pengaturan_service'];
    $pajakonline = $datapengaturan['pengaturan_pajak_online'];
    $pajakpembulatan = $datapengaturan['pengaturan_pajak_pembulatan'];
        

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <script type="text/javascript">
    window.setTimeout(function() {
      window.close();
    },1000)
  </script>
  </head>

  <body onLoad="window.print()" style="
    font-family: 'Merchant Copy'; font-size: 13px;">
      <div class="wrapper">
        <img src="../../assets/img/<?php echo $datapengaturan['pengaturan_logo']; ?>" width="120" style="margin: 0 auto 10px;
          display: block;">
        <table  width="100%" border="0"  style='font-size: 16px;'>
          <tr>
            <th colspan="4"><?php echo $datapengaturan['pengaturan_alamat']; ?></th>
          </tr>
          <tr>
            <th colspan="4"><?php echo $datapengaturan['pengaturan_telp']; ?></th>
          </tr>
          <tr>
            <th colspan="4"><?php echo $tgl." - ".$wkt; ?></th>
          </tr>
          <tr>
            <td colspan="4"><hr></td>
          </tr>
        </table>
        <table width="100%" border="0"  style='font-size: 16px;'>
          <tr>
            <td>Menu</td>
            <td width="24" align="center">Jml.</td>
            <td width="60" align="center">Harga</td>
            <td width="60" align="center">Subtotal</td>
          </tr>
           <?php
            $no=1;
            $tran_tot = 0;
            $sql="SELECT * from transaksi_detail_temp,barang WHERE transaksi_detail_temp_barang_id=barang_id and transaksi_detail_temp_user='$aid'";
            $query=mysqli_query($con, $sql);
            while ($data=mysqli_fetch_assoc($query)) {
              
              $ket = '';
        		  if ($data["transaksi_detail_temp_keterangan"]!='') {
                $ket = "(".$data["transaksi_detail_temp_keterangan"].")";
              }
              $barang = $data['barang_nama'];
              $jumlah = $data['transaksi_detail_temp_jumlah'];
              $harga = $data['transaksi_detail_temp_harga'];
              $tot = $jumlah*$harga;
              $tran_tot += $tot;

              echo "

              <tr>
                <td>".$barang." ".$ket."</td>
                <td align='center'>".$jumlah."</td>
                <td align='right'>".format_rupiah($harga)."</td>
                <td align='right'>".format_rupiah($tot)."</td>
              </tr>
              ";
              
              $no=$no+1;
            }

            if ($ordertype=="online") {
              $tax = ($tran_tot*0.1)*$pajakonline;
            } else {
              $tax = ($tran_tot*0.1)*$pajakresto;
            }

            $tax1 = format_rupiah($tax);

            $text_line = explode(".",$tax1);
            $length=count($text_line);

            if ($pajakpembulatan==1) {
              if ($length==1) {
                if ($text_line[0]== 0) {
                  $tax="000";
                  
                } elseif ($text_line[0]<=500) {
                  $tax = 500;
                  
                } else {
                  $tax = 1000;
                  
                }

              }elseif ($length==2) {
                if ($text_line[1]== 0) {
                  $tax=$text_line[0]."000";
                  
                } elseif ($text_line[1]<= 500) {
                  $n = 500;

                  $tax=$text_line[0]."".$n;
                  
                } else {
                  $n = 000;

                  $tax=($text_line[0]+1)."000";
                  
                }

              }elseif ($length==3) {
                if ($text_line[2]== 0) {
                  $tax=$text_line[0]."".$text_line[1]."000";
                  
                } elseif ($text_line[2]<= 500) {
                  $n = 500;

                  $tax=$text_line[0]."".$text_line[1]."".$n;
                  
                } else {
                  $n = 000;

                  $tax=$text_line[0]."".($text_line[1]+1)."000";
                  
                }

              }
            }        
          ?>
          <tr>
            <td colspan="4"><hr color="black"></td>
          </tr>
          <tr>
            <th align="left" scope="row" colspan="2">Subtotal </th>
            <td align="right">: Rp.</td>
            <td align="right"><?php echo format_rupiah($tran_tot); ?></td>
          </tr>
          <tr>
            <th align="left" scope="row" colspan="2">Tax </th>
            <td align="right">: Rp.</td>
            <td align="right"><?php echo format_rupiah($tax); ?></td>
          </tr>
          <tr>
            <th align="left" scope="row" colspan="2">Total</th>
            <td align="right">: Rp.</td>
            <td align="right"><?php echo format_rupiah($tran_tot+$tax) ; ?></td>
          </tr>
          <tr>
            <th colspan="4">TERIMA KASIH<br>Let's order by Go-Food & get more value!</th>
          </tr>
          </tr>
          <tr>
            <th colspan="4"><br>&nbsp;<br></th>
          </tr>
        </table>
      </div>
  </body>
</html>
