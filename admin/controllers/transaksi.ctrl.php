<?php 
session_start();
include '../../config/database.php';
include "../../include/slug.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');
$bln=date('Y-m');
$wkt=date('H:i:s');
$array_datas = array();


$user = $_SESSION['login_user'];
$order_type = '';
if($_GET['ket']=='tambahmenu'){

	$id = $_POST['barang_id'];	
	$jumlah = $_POST['jumlah'];
	$ket = $_POST['keterangan'];
	$hargamanual = $_POST['hargamanual'];

	$sql="SELECT * from barang where barang_id='$id'";
	$query=mysqli_query($con,$sql);
	$data=mysqli_fetch_assoc($query);
	$hargabeli = $data['barang_harga_beli'];

	$sqla="SELECT sum(transaksi_detail_temp_jumlah) as transaksi_detail_temp_jumlah from transaksi_detail_temp where transaksi_detail_temp_barang_id='$id' and transaksi_detail_temp_user='$user'";
	$querya=mysqli_query($con,$sqla);
	$dataa=mysqli_fetch_assoc($querya);

	if($dataa!=null) {
		$jml=$dataa['transaksi_detail_temp_jumlah']+$jumlah;
	} else {
		$jml=$jumlah;
	}

	if ($data['barang_set_stok']==1 && $jml>$data['barang_stok']) {

		$array_datas['totalordertemp']=["Stok Kurang"];
		//echo ("<script>location.href='../home.php?menu=jumlah&id=$id&nama=$data[barang_nama]&ket=Stok Kurang&pelanggan='</script>");
	} else {

		if($hargamanual!=0) {
			$harga = $hargamanual;
		} else {
		
			$harga = $data['barang_harga_jual'];
		}

		$diskon = $harga*$data['barang_diskon']/100;
		if ($diskon!=0) {
			$harga = $harga - $diskon;
		}

		$tot = $harga*$jumlah;
		
		$sql = "INSERT INTO transaksi_detail_temp(transaksi_detail_temp_barang_id,transaksi_detail_temp_harga,transaksi_detail_temp_harga_beli,transaksi_detail_temp_diskon,transaksi_detail_temp_jumlah,transaksi_detail_temp_total,transaksi_detail_temp_keterangan,transaksi_detail_temp_user)values('$id','$harga','$hargabeli','$diskon','$jumlah','$tot','$ket','$user')";

		mysqli_query($con,$sql);

		$query="SELECT * from transaksi_detail_temp, barang, kategori where transaksi_detail_temp_barang_id=barang_id and kategori_id=barang_kategori and transaksi_detail_temp_user='$user' ORDER BY transaksi_detail_temp_id DESC LIMIT 1";
		$result = mysqli_query($con,$query);

		while($baris = mysqli_fetch_assoc($result))
		{
		  $array_datas['item']=$baris;
		}

		$total = 0;
		$query="SELECT * from transaksi_detail_temp, barang, kategori where transaksi_detail_temp_barang_id=barang_id and kategori_id=barang_kategori and transaksi_detail_temp_user='$user' ORDER BY transaksi_detail_temp_id";
		$result = mysqli_query($con,$query);
		while($data = mysqli_fetch_assoc($result)) {
			$total+=$data['transaksi_detail_temp_total'];
		}

		$array_datas['totalordertemp']=$total;
	}
	$array_datas['ok']="ok bos";
	echo json_encode($array_datas);
	
} elseif($_GET['ket']=='batal'){

    $sql = "DELETE from transaksi_detail_temp where transaksi_detail_temp_user='$user'";
    mysqli_query($con,$sql);

    $sql1 = "DELETE from member_temp where member_temp_user_id='$user'";
    mysqli_query($con,$sql1);


		$_SESSION['order_type'] = "";
		$array_datas[] = ["ok"];
	echo json_encode($array_datas);

} elseif($_GET['ket']=='removeitem'){
	$id = $_POST['id'];	
    $sql = "DELETE from transaksi_detail_temp where transaksi_detail_temp_id='$id'";
    mysqli_query($con,$sql);

	$total = 0;
	$query="SELECT * from transaksi_detail_temp, barang, kategori where transaksi_detail_temp_barang_id=barang_id and kategori_id=barang_kategori and transaksi_detail_temp_user='$user' ORDER BY transaksi_detail_temp_id";
	$result = mysqli_query($con,$query);
	while($data = mysqli_fetch_assoc($result)) {
		$total+=$data['transaksi_detail_temp_total'];
	}

	$array_datas['totalordertemp']=$total;
	echo json_encode($array_datas);

} elseif($_GET['ket']=='plusminus'){
	$id = $_POST['id'];
	$idbarang = $_POST['idbarang'];
	$keterangan = $_POST['keterangan'];	

	if ($keterangan=='plus') {
		$jumlah = $_POST['jumlah']+1;
	} else {
		$jumlah = $_POST['jumlah']-1;
	}
	$jml=$jumlah;

	$sql="SELECT * from barang where barang_id='$idbarang'";
	$query=mysqli_query($con,$sql);
	$data=mysqli_fetch_assoc($query);

	$sql1="SELECT * from transaksi_detail_temp where transaksi_detail_temp_id='$id'";
	$query1=mysqli_query($con,$sql1);
	$data1=mysqli_fetch_assoc($query1);
	$harga = $data1['transaksi_detail_temp_harga'];
	$tot = $harga*$jumlah;

	$array_datas['jumlahordertemp']=1;

	if ($data['barang_set_stok']==1 && $jml>$data['barang_stok']) {

		$array_datas['totalordertemp']=["Stok Kurang"];

	} else {
		
		if ($keterangan=='minus' && $jumlah==0) {
			$sql="DELETE from transaksi_detail_temp where transaksi_detail_temp_id='$id'";
			$array_datas['jumlahordertemp']=0;
		} else {
			$sql="UPDATE transaksi_detail_temp set transaksi_detail_temp_jumlah='$jumlah',transaksi_detail_temp_total='$tot' where transaksi_detail_temp_id='$id'";
	
		}

		mysqli_query($con,$sql);

		$query="SELECT * from transaksi_detail_temp, barang, kategori where transaksi_detail_temp_barang_id=barang_id and kategori_id=barang_kategori and transaksi_detail_temp_id=$id ";
		$result = mysqli_query($con,$query);

		while($baris = mysqli_fetch_assoc($result)) {
		  $array_datas['item']=$baris;
		}

		$total = 0;
		$query="SELECT * from transaksi_detail_temp, barang, kategori where transaksi_detail_temp_barang_id=barang_id and kategori_id=barang_kategori and transaksi_detail_temp_user='$user' ORDER BY transaksi_detail_temp_id";
		$result = mysqli_query($con,$query);
		while($data = mysqli_fetch_assoc($result)) {
			$total+=$data['transaksi_detail_temp_total'];
		}

		$array_datas['totalordertemp']=$total;
	}
	
	echo json_encode($array_datas);

} elseif($_GET['ket']=='ordertype'){

	$id = $_POST['id'];	
	if ($id=='dinein') {
		$array_datas[] = ["dinein"];
		$_SESSION['order_type'] = "dinein";

	} elseif ($id=='takeaway') {
		$array_datas[] = ["takeaway"];
		$_SESSION['order_type'] = "takeaway";

	} elseif ($id=='online') {
		$array_datas[] = ["online"];
		$_SESSION['order_type'] = "online";

	}
	echo json_encode($array_datas);

} elseif($_GET['ket']=='pilihmember'){

	$idmember = $_POST['idmember'];
	$idtherapist = $_POST['idtherapist'];
	$nama = $_POST['nama'];
	
	$sql = "INSERT INTO member_temp(member_temp_member_id,member_temp_user_id,member_temp_therapist,member_temp_nama)values('$idmember','$user','$idtherapist','$nama')";

	mysqli_query($con,$sql);

	$query="SELECT * from member_temp, member, users where  member_temp_member_id=member_id and member_temp_user_id=id and member_temp_user_id='$user' ORDER BY member_temp_id DESC LIMIT 1";
	$result = mysqli_query($con,$query);

	while($baris = mysqli_fetch_assoc($result))
	{
	  $array_datas['member']=$baris;
	}
	
	echo json_encode($array_datas);
	
} elseif($_GET['ket']=='prosestransaksi'){

	$total = $_POST['ip-total'];
	$paytype = $_POST['ip-paytype'];
	$jenisdiskon = $_POST['ip-jenisdiskon'];
	$jumlahdiskon = $_POST['ip-jumlahdiskon'];
	$tax = $_POST['ip-tax'];
	$bayar = $_POST['ip-bayar'];

	$kembalian = $bayar - $total;

	$sql1="SELECT * from member_temp where member_temp_user_id='$user'";
	$query1=mysqli_query($con,$sql1);
	$data1=mysqli_fetch_assoc($query1);
	$member = $data1['member_temp_member_id'];
	$namanonmember = $data1['member_temp_nama'];
	$therapist = $data1['member_temp_therapist'];

	$qcn= "SELECT MAX( transaksi_nota_print ) AS nota_print FROM transaksi where transaksi_type_bayar='$paytype'";
    $rcn=mysqli_query($con,$qcn);
    $dcn=mysqli_fetch_assoc($rcn);
    $nota_print = $dcn['nota_print']+1;

	$sql = "INSERT INTO transaksi (transaksi_nota_print,transaksi_tanggal,transaksi_bulan,transaksi_waktu,transaksi_member,transaksi_total,transaksi_diskon,transaksi_tax,transaksi_tax_service,transaksi_bayar,transaksi_type_bayar,transaksi_user,transaksi_therapist,transaksi_nama,transaksi_ket) VALUES ('$nota_print','$tgl','$bln','$wkt','$member','$total','$jumlahdiskon','$tax','0','$bayar','$paytype','$user','$therapist','$namanonmember','')" ;

	mysqli_query($con,$sql);

	$qn= "SELECT MAX( transaksi_id ) AS nota FROM transaksi where transaksi_user='$user'";
    $rn=mysqli_query($con,$qn);
    $dn=mysqli_fetch_assoc($rn);
    $no_not = $dn['nota'];
    $_SESSION['no-nota'] = $no_not;	

    $query="SELECT * from transaksi_detail_temp where transaksi_detail_temp_user='$user'";
	$result = mysqli_query($con,$query);
	while($baris = mysqli_fetch_assoc($result)) {

    	$barang = $baris['transaksi_detail_temp_barang_id'];
    	$harga = $baris['transaksi_detail_temp_harga'];
    	$hargabeli = $baris['transaksi_detail_temp_harga_beli'];
    	$diskon = $baris['transaksi_detail_temp_diskon'];
    	$jumlah = $baris['transaksi_detail_temp_jumlah'];
    	$total = $baris['transaksi_detail_temp_total'];
    	$ket = $baris['transaksi_detail_temp_keterangan'];
    	$status = $baris['transaksi_detail_temp_status'];
    	$user = $baris['transaksi_detail_temp_user'];


    	$a="INSERT into transaksi_detail(transaksi_detail_nota,transaksi_detail_barang_id,transaksi_detail_harga,transaksi_detail_harga_beli,transaksi_detail_diskon,transaksi_detail_jumlah,transaksi_detail_total,transaksi_detail_keterangan,transaksi_detail_status,transaksi_detail_user)values('$no_not','$barang','$harga','$hargabeli','$diskon','$jumlah','$total','$ket','$status','$user')";
		mysqli_query($con,$a);

		//Select Stok Barang
		$sqlstok="SELECT * from barang where barang_id='$barang'";
        $resultstok=mysqli_query($con,$sqlstok);
	    $datastok=mysqli_fetch_assoc($resultstok);

        if($datastok['barang_set_stok']!=0) {
        	$jml_stok = $datastok['barang_stok'] - $jumlah;
        
	        $sqlupdatestok = "UPDATE barang SET barang_stok='$jml_stok' WHERE barang_id='$barang'";
	        mysqli_query($con,$sqlupdatestok);
        }
		
    }

    $_SESSION['kembalian'] = $kembalian;
    $_SESSION['print'] = 'ya';
    $_SESSION['order']='';

    $sqldelete = "DELETE from transaksi_detail_temp where transaksi_detail_temp_user='$user'";
    mysqli_query($con,$sqldelete);

    $sqldelete1 = "DELETE from member_temp where member_temp_user_id='$user'";
    mysqli_query($con,$sqldelete1);

    $array_dataa = array('nota'=>$no_not);


	echo json_encode($array_dataa);

}  elseif($_GET['ket']=='tutupkasir'){

	$uangfisik = $_POST['uangfisik'];
	//$uangfisik = 200000;

	$sqlcek="SELECT count(*) as jml from validasi where validasi_user_id='$user' and validasi_tanggal='$tgl'";
	$querycek=mysqli_query($con,$sqlcek);
	$datacek=mysqli_fetch_assoc($querycek);

	if ($datacek['jml']!=0) {
		$array_datas['ket'] = "gagal";

	} else {

		$sql="SELECT * from users where id='$user'";
		$query=mysqli_query($con,$sql);
		$data=mysqli_fetch_assoc($query);
		$usernama=$data['name'];

		$sql1="SELECT count(transaksi_id) as jumlah, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon from transaksi where transaksi_tanggal='$tgl' and transaksi_user = '$user' group by transaksi_tanggal";
		$query1=mysqli_query($con,$sql1);
		$data1=mysqli_fetch_assoc($query1);

		$sql2="SELECT count(transaksi_id) as jumlah, sum(transaksi_total) as debet, sum(transaksi_diskon) as diskon from transaksi where transaksi_tanggal='$tgl' and transaksi_user = '$user' and transaksi_type_bayar='Debet' group by transaksi_tanggal";
		$query2=mysqli_query($con,$sql2);
		$data2=mysqli_fetch_assoc($query2);

		$sql3="SELECT count(transaksi_id) as jumlah, sum(transaksi_total) as cash, sum(transaksi_diskon) as diskon from transaksi where transaksi_tanggal='$tgl' and transaksi_user = '$user' and transaksi_type_bayar='Cash' group by transaksi_tanggal";
		$query3=mysqli_query($con,$sql3);
		$data3=mysqli_fetch_assoc($query3);

		$a="INSERT into validasi(validasi_tanggal,validasi_waktu,validasi_user_id,validasi_user_nama,validasi_jumlah,validasi_cash,validasi_debet,validasi_omset)values('$tgl','$wkt','$user','$usernama','$uangfisik','$data3[cash]','$data2[debet]','$data1[total]')";
			mysqli_query($con,$a);

		if ($data2['debet']=='') {
			$totdebet = 0;
		} else {
			$totdebet = $data2['debet'];
		}

		if ($data3['cash']=='') {
			$totcash = 0;
		} else {
			$totcash = $data3['cash'];
		}

		$array_datas['omset'] = $data1['total'];
		$array_datas['debet'] = $totdebet;
		$array_datas['cash'] = $totcash;
		$array_datas['uangfisik'] = $uangfisik;
		$array_datas['ket'] = "sukses";

	}
	echo json_encode($array_datas);
	
} elseif($_GET['ket']=='tes') {
	$sql1="SELECT * from member_temp where member_temp_user_id='$user'";
	$query1=mysqli_query($con,$sql1);
	$data1=mysqli_fetch_assoc($query1);
	$member = $data1['member_temp_member_id'];
	echo $_SESSION['kembalian'];
}

?>  