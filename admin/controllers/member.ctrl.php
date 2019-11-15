<?php 
session_start();
include '../../config/database.php';
include "../../include/slug.php";
date_default_timezone_set('Asia/jakarta');
$tgl=date('Y-m-j');

if($_GET['ket']=='submit-member'){

	$nama = $_POST['ip-nama'];
	$a = substr($nama,0,1);

	$qn= "SELECT COUNT( member_id ) AS jml FROM member where member_no LIKE '$a%'";
    $rn=mysqli_query($con,$qn);
    $dn=mysqli_fetch_assoc($rn);
    if ($dn['jml']==NULL || $dn['jml']=='') {
    	$nomember = $a."1";
    } else {
    	$jml = $dn['jml']+1;
    	$nomember = $a."".$jml;
    }

	$alamat = $_POST['ip-alamat'];
	$tgllahir = date("Y-m-j", strtotime($_POST['ip-tgl-lahir']));
	$hp = $_POST['ip-hp'];
	$gender = $_POST['ip-gender'];

	$sql = "INSERT into member(member_no,member_nama,member_alamat,member_tgl_lahir,member_hp,member_gender)values('$nomember','$nama','$alamat','$tgllahir','$hp','$gender')";

	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='update-member'){

	$id = $_POST['ip-id'];
	$nama = $_POST['ip-nama'];
	$a = substr($nama,0,1);
	$no = $_POST['ip-no'];

	$sql1="SELECT * from member where member_id='$id'";
	$query1=mysqli_query($con,$sql1);
	$data1=mysqli_fetch_assoc($query1);
	$b = substr($data1['member_nama'],0,1);

	if ($no=='' || $a!=$b) {

		$qn= "SELECT COUNT( member_id ) AS jml FROM member where member_no LIKE'$a%'";
	    $rn=mysqli_query($con,$qn);
	    $dn=mysqli_fetch_assoc($rn);
	    if ($dn['jml']==NULL || $dn['jml']=='') {
	    	$nomember = $a."1";
	    } else {
	    	$jml = $dn['jml']+1;
	    	$nomember = $a."".$jml;
	    }
	} else {
		$nomember = $no;
	}
	$alamat = $_POST['ip-alamat'];
	$tgllahir = date("Y-m-j", strtotime($_POST['ip-tgl-lahir']));
	$hp = $_POST['ip-hp'];
	$gender = $_POST['ip-gender'];

	$sql="UPDATE member set member_no='$nomember', member_nama='$nama', member_alamat='$alamat', member_tgl_lahir='$tgllahir',member_hp='$hp', member_gender='$gender' where member_id='$id'";
	mysqli_query($con,$sql);
	
} elseif($_GET['ket']=='remove-member'){
	$array_datas = array();
	
	$id = $_POST['id'];
	$sql="DELETE from member where member_id='$id'";
	if (!mysqli_query($con,$sql)) {
		$array_datas[] = ["gagal"];
	}else{
		$array_datas[] = ["ok"];
	}
	echo json_encode($array_datas);
	
}

?>  