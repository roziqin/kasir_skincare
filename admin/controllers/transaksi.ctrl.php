<?php 
session_start();
include '../../config/database.php';
include "../../include/slug.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');
$array_datas = array();
$user = $_SESSION['login_user'];
$order_type = '';
if($_GET['ket']=='tambahmenu'){

	$id = $_POST['barang_id'];	
	$jumlah = $_POST['jumlah'];
	$ket = $_POST['keterangan'];

	$sql="SELECT * from barang where barang_id='$id'";
	$query=mysqli_query($con,$sql);
	$data=mysqli_fetch_assoc($query);

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
		if ($order_type=='online') {
			$harga = $data['barang_harga_jual_online'];
		} else {
			$harga = $data['barang_harga_jual'];
		}

		$diskon = $harga*$data['barang_diskon']/100;
		if ($diskon!=0) {
			$harga = $harga - $diskon;
		}

		$tot = $harga*$jumlah;
		
		$sql = "INSERT INTO transaksi_detail_temp(transaksi_detail_temp_barang_id,transaksi_detail_temp_harga,transaksi_detail_temp_diskon,transaksi_detail_temp_jumlah,transaksi_detail_temp_total,transaksi_detail_temp_keterangan,transaksi_detail_temp_user)values('$id','$harga','$diskon','$jumlah','$tot','$ket','$user')";
		//$array_datas[] = ["Ok"];

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
	
	echo json_encode($array_datas);
	
} elseif($_GET['ket']=='batal'){

    $sql = "DELETE from transaksi_detail_temp where transaksi_detail_temp_user='$user'";
    mysqli_query($con,$sql);


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

}

?>  