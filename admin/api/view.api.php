<?php
include '../../config/database.php';
session_start();
$bln=date('Y-m');
$user = $_SESSION['login_user'];

$func = $_GET['func'];

if ($func=='dasboard-omset') {

	$query = "SELECT transaksi_tanggal, sum(transaksi_total) as total FROM transaksi where transaksi_bulan = '$bln' GROUP BY transaksi_tanggal";

} elseif ($func=='dasboard-pelanggan') {

	$query = "SELECT count(*) as jumlah FROM transaksi where transaksi_bulan = '$bln' GROUP BY transaksi_tanggal";

} elseif ($func=='dasboard-itemsold') {

    $id = $_POST['jenisid'];
    $query = "SELECT jenis_nama, barang_nama, sum(transaksi_detail_jumlah) as jumlah FROM transaksi, transaksi_detail, barang, kategori, jenis where transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_kategori=kategori_id and kategori_jenis=jenis_id and jenis_id='$id' and transaksi_bulan='$bln' GROUP BY barang_id ORDER BY jumlah DESC LIMIT 10";

} elseif ($func=='getjenis') {

    $query = "SELECT * from jenis ORDER BY jenis_id ASC";

} elseif ($func=='listproduk') {

	$query = "SELECT barang_nama, kategori_nama, barang_stok, barang_harga_beli, barang_harga_jual, barang_harga_jual_online FROM barang, kategori where barang_kategori=kategori_id";

} elseif ($func=='editproduk') {
	$id = $_POST['produk_id'];
	$query = "SELECT * from barang, kategori where barang_kategori=kategori_id and barang_id='$id'";

} elseif ($func=='listkategori') {

	$query = "SELECT * FROM kategori";

} elseif ($func=='editkategori') {
	$id = $_POST['kategori_id'];
	$query = "SELECT * from kategori where kategori_id='$id'";

} elseif ($func=='editjenis') {
    $id = $_POST['jenis_id'];
    $query = "SELECT * from jenis where jenis_id='$id'";

} elseif ($func=='edituser') {
	$id = $_POST['id'];
	$query = "SELECT * from users where id='$id'";

} elseif ($func=='editmember') {
    $id = $_POST['id'];
    $query = "SELECT * from member where member_id='$id'";

} elseif ($func=='editsetting') {
	$id = 1;
	$query = "SELECT * from pengaturan_perusahaan where pengaturan_id='$id'";

} elseif ($func=='editstok') {
	$id = $_POST['id'];
	$query = "SELECT * from barang where barang_id='$id'";

} elseif ($func=='historymember') {
    $id = $_POST['id'];
    $query = "SELECT * from transaksi, transaksi_detail, barang, kategori, jenis where transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_kategori=kategori_id and kategori_jenis=jenis_id and transaksi_member='$id' ORDER BY transaksi_tanggal DESC";

} elseif ($func=='list-transaksi-temp') {
    $query="SELECT * from transaksi_detail_temp, barang, kategori where transaksi_detail_temp_barang_id=barang_id and kategori_id=barang_kategori and transaksi_detail_temp_user='$user' ORDER BY transaksi_detail_temp_id";
} elseif ($func=='list-member-temp') {

    $query="SELECT * from member_temp, member, users where  member_temp_member_id=member_id and member_temp_therapist=id and member_temp_user_id='$user' ORDER BY member_temp_id DESC LIMIT 1";

} elseif ($func=='laporan-omset') {
	
    
    $typebayar = $_POST['typebayar'];
    if ($typebayar=='') {
        $bayartext = '';
    } else {
        $bayartext = "transaksi_type_bayar='".$typebayar."' and ";

    }
    if ($_POST['daterange']=="harian") {
        $ket = "transaksi_tanggal"; 
		$tgl11 = date("Y-m-j", strtotime($_POST['start']));
	    $tgl22 = date("Y-m-j", strtotime($_POST['end']));
    } elseif ($_POST['daterange']=="bulanan") {
        $ket = "transaksi_bulan";     
		$tgl11 = date("Y-m", strtotime($_POST['start']));
	    $tgl22 = date("Y-m", strtotime($_POST['end']));
    }

	$query ="SELECT transaksi_tanggal, transaksi_bulan, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon from transaksi WHERE $bayartext $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket  ";

}  elseif ($func=='laporan-kasir') {
	
    $kasir = $_POST['kasir'];

    if ($kasir==0) {
        $text1 = '';
        $text2 = ', transaksi_user';
    } else {
        $text1 = 'transaksi_user='.$kasir.' and ';
        $text2 = '';

    }

    if ($_POST['daterange']=="harian") {
        $ket = "transaksi_tanggal"; 
		$tgl11 = date("Y-m-j", strtotime($_POST['start']));
	    $tgl22 = date("Y-m-j", strtotime($_POST['end']));
    } elseif ($_POST['daterange']=="bulanan") {
        $ket = "transaksi_bulan";     
		$tgl11 = date("Y-m", strtotime($_POST['start']));
	    $tgl22 = date("Y-m", strtotime($_POST['end']));
    }

	$query ="SELECT transaksi_tanggal, transaksi_bulan, sum(transaksi_total) as total, sum(transaksi_diskon) as diskon, transaksi_user, id, name from transaksi, users WHERE transaksi_user=id and $text1 $bayartext $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket $text2 ";

}  elseif ($func=='laporan-menu') {
	
    $menu = $_POST['menu'];

    if ($menu==0) {
        $text1 = '';
        $text2 = ', barang_id';
    } else {
        $text1 = 'barang_id='.$menu.' and ';
        $text2 = '';

    }

    if ($_POST['daterange']=="harian") {
        $ket = "transaksi_tanggal"; 
		$tgl11 = date("Y-m-j", strtotime($_POST['start']));
	    $tgl22 = date("Y-m-j", strtotime($_POST['end']));
    } elseif ($_POST['daterange']=="bulanan") {
        $ket = "transaksi_bulan";     
		$tgl11 = date("Y-m", strtotime($_POST['start']));
	    $tgl22 = date("Y-m", strtotime($_POST['end']));
    }

	$query ="SELECT transaksi_tanggal, transaksi_bulan, barang_nama, barang_id, sum(transaksi_detail_jumlah) as jumlah from transaksi, transaksi_detail, barang WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and $text1 $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket $text2 ORDER BY transaksi_tanggal ASC";

}  elseif ($func=='laporan-stok') {
    
    $menu = $_POST['menu'];

    if ($menu==0) {
        $text1 = '';
        $text2 = ', barang_id';
    } else {
        $text1 = 'barang_id='.$menu.' and ';
        $text2 = '';

    }

        $ket = "tanggal"; 
        $tgl11 = date("Y-m-j", strtotime($_POST['start']));
        $tgl22 = date("Y-m-j", strtotime($_POST['end']));
    

    $query ="SELECT * from log_stok, barang, users WHERE log_stok.barang=barang_id and id=log_stok.user and keterangan='tambah' and $text1 $ket BETWEEN '$tgl11' AND '$tgl22' ORDER BY tanggal ASC";

}  elseif ($func=='laporan-stokkeluar') {
    
    $menu = $_POST['menu'];

    if ($menu==0) {
        $text1 = '';
        $text2 = ', barang_id';
    } else {
        $text1 = 'barang_id='.$menu.' and ';
        $text2 = '';

    }
    
    $ket = "transaksi_tanggal"; 
    $tgl11 = date("Y-m-j", strtotime($_POST['start']));
    $tgl22 = date("Y-m-j", strtotime($_POST['end']));


    $query ="SELECT name, transaksi_tanggal, barang_nama, barang_id, sum(transaksi_detail_jumlah) as jumlah from transaksi, transaksi_detail, barang, users WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and transaksi_user=users.id and barang_set_stok=1 and $text1 $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket $text2 , users.id ORDER BY transaksi_tanggal ASC";

}  elseif ($func=='laporan-validasi') {

    $tgl11 = date("Y-m-j", strtotime($_POST['start']));
    $tgl22 = date("Y-m-j", strtotime($_POST['end']));

    $query="SELECT * from  validasi WHERE validasi_tanggal BETWEEN '$tgl11' AND '$tgl22' ORDER BY validasi_id asc";
    
} elseif ($func=='laporan-nota') {
       
    $ket = "transaksi_tanggal"; 
    $tgl11 = date("Y-m-j", strtotime($_POST['start']));
    $tgl22 = date("Y-m-j", strtotime($_POST['end']));
    

    $query ="SELECT * from transaksi, users, member WHERE transaksi_member=member_id and transaksi_user=id and transaksi_tanggal BETWEEN '$tgl11' AND '$tgl22'  ";

} elseif ($func=='cek-nota') {
       
    $nota = $_POST['notaid'];

    $query ="SELECT * from transaksi_detail, barang where transaksi_detail_barang_id=barang_id and transaksi_detail_nota='$nota' ORDER BY transaksi_detail_id ASC";

}


$result = mysqli_query($con,$query);
$array_data = array();
if ($func=="laporan-omset" || $func=="laporan-kasir") {
	
	if ($_POST['daterange']=="harian") {
        $ket = "transaksi_tanggal"; 
    } elseif ($_POST['daterange']=="bulanan") {
        $ket = "transaksi_bulan";     
    }
    
    //$ket = "transaksi_tanggal";
	while($data = mysqli_fetch_assoc($result))
	{
		if ($func=="laporan-kasir") {
	        $text = 'transaksi_user='.$data['id'].' and ';
            $text1 = '';
	    } else {
	    	$text = '';
            $text1 = '';
	    }

		$tglket = $data[$ket];
        $sqlcash="SELECT sum(transaksi_total) as total from transaksi WHERE $text $ket='$tglket' and transaksi_type_bayar='Cash' GROUP BY $ket $text1 ";
        $querycash=mysqli_query($con, $sqlcash);
        $datacash=mysqli_fetch_assoc($querycash);
        $totalcash = 0;
        if ($datacash['total']!='') {
            $totalcash = $datacash['total'];
        }
		
        $sqlonline="SELECT sum(transaksi_total) as total from transaksi WHERE $text $ket='$tglket' and transaksi_type_bayar='GoResto' GROUP BY $ket $text1 ";
        $queryonline=mysqli_query($con, $sqlonline);
        $dataonline=mysqli_fetch_assoc($queryonline);
        $totalonline = 0;
        if ($dataonline['total']!='') {
            $totalonline = $dataonline['total'];
        }

        $sqldebet="SELECT sum(transaksi_total) as total from transaksi WHERE $text $ket='$tglket' and transaksi_type_bayar='Debet' GROUP BY $ket $text1 ";
        $querydebet=mysqli_query($con, $sqldebet);
        $datadebet=mysqli_fetch_assoc($querydebet);
        $totaldebet = 0;
        if ($datadebet['total']!='') {
            $totaldebet = $datadebet['total'];
        }
        
	  //$array_data[]=($ket=>$data[$ket], 'cash'=>$totalcash, 'debet'=>$totaldebet, 'online'=>$totalonline);
        if ($func=="laporan-kasir") {
			$row_array['kasir'] = $data['name'];
        }
        $typebayar = $_POST['typebayar'];
        if ($typebayar=="debet") {
            $totalcash = 0;
        } elseif ($typebayar=="cash") {
            $totaldebet = 0;
        }
		$row_array[$ket] = $data[$ket];
	    $row_array['cash'] = $totalcash;
	    $row_array['debet'] = $totaldebet;
	    $row_array['online'] = $totalonline;
		$row_array['total'] = $data['total'];
        array_push($array_data,$row_array);
	}
} elseif ($func=="cek-nota") {

    $nota = $_POST['notaid'];
    $sqlnot="SELECT * FROM transaksi, users, member where transaksi_member=member_id and transaksi_user=id and transaksi_id='$nota' ";
    $querynot=mysqli_query($con,$sqlnot);
    $datanot=mysqli_fetch_assoc($querynot);

    $total = $datanot['transaksi_total'];
    $pelanggan = $datanot['member_nama'];
    $therapist = $datanot['transaksi_therapist'];
    $diskon = $datanot['transaksi_diskon'];
    $user = $datanot['name'];

    $sqlt="SELECT * FROM users where id='$therapist' ";
    $queryt=mysqli_query($con,$sqlt);
    $datat=mysqli_fetch_assoc($queryt);
    $namatherapist = $datat['name'];

    $row_array['subtotal'] = $total+$diskon;
    $row_array['total'] = $total;
    $row_array['pelanggan'] = $pelanggan;
    $row_array['user'] = $user;
    $row_array['therapist'] = $namatherapist;
    $row_array['potongan'] = $diskon;
    $row_array['notaid'] = $nota;
    array_push($array_data,$row_array);
    while($data = mysqli_fetch_assoc($result))
    {
        $array_data[]=$data;
    }

} elseif ($func=="historymember") {

    $id = $_POST['id'];
    $sqlmember="SELECT * FROM member where member_id='$id' ";
    $querymember=mysqli_query($con,$sqlmember);
    $datamember=mysqli_fetch_assoc($querymember);

    $member_id = $datamember['member_id'];
    $member_no = $datamember['member_no'];
    $member_nama = $datamember['member_nama'];
    $member_alamat = $datamember['member_alamat'];
    $member_usia = $datamember['member_usia'];
    $member_hp = $datamember['member_hp'];
    $member_gender = $datamember['member_gender'];
    $member_tgl_lahir = $datamember['member_tgl_lahir'];

    $row_array['member']['member_id'] = $member_id;
    $row_array['member']['member_no'] = $member_no;
    $row_array['member']['member_nama'] = $member_nama;
    $row_array['member']['member_alamat'] = $member_alamat;
    $row_array['member']['member_usia'] = $member_usia;
    $row_array['member']['member_hp'] = $member_hp;
    $row_array['member']['member_gender'] = $member_gender;
    $row_array['member']['member_tgl_lahir'] = $member_tgl_lahir;
    array_push($array_data,$row_array);
    while($data = mysqli_fetch_assoc($result))
    {
        $array_data['table'][]=$data;
    }

} else {
	while($baris = mysqli_fetch_assoc($result))
	{
	  $array_data[]=$baris;
	}
}

if ($func=='listproduk') {
	$array_datas = array();
	$array_datas['data'] = $array_data;
	echo json_encode($array_datas);
} else {

	echo json_encode($array_data);
}

?>


