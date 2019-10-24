<?php
include '../../config/database.php';
$search = $_POST['search']['value']; // Ambil data yang di ketik user pada textbox pencarian
$limit = $_POST['length']; // Ambil data limit per page
$start = $_POST['start']; // Ambil data start

if ($_GET['ket']=='produk') {

	$sql = mysqli_query($con, "SELECT barang_id FROM barang, kategori where barang_kategori=kategori_id"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM barang, kategori where barang_kategori=kategori_id and (barang_nama LIKE '%".$search."%' OR kategori_nama LIKE '%".$search."%')";

} elseif ($_GET['ket']=='kategori') {

	$sql = mysqli_query($con, "SELECT kategori_id FROM kategori, jenis WHERE kategori_jenis=jenis_id"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM kategori, jenis where kategori_jenis=jenis_id and (kategori_nama LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='jenis') {

	$sql = mysqli_query($con, "SELECT jenis_id FROM jenis"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM jenis where (jenis_nama LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='user') {

	$sql = mysqli_query($con, "SELECT id FROM users, roles where role=roles_id"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM users, roles where role=roles_id and (name LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='member') {

	$sql = mysqli_query($con, "SELECT member_id FROM member"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM member where (member_nama LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='stok') {

	$sql = mysqli_query($con, "SELECT barang_id FROM barang where barang_set_stok=1"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM barang where barang_set_stok=1 and (barang_nama LIKE '%".$search."%')";
	
}

$order_field = $_POST['order'][0]['column']; // Untuk mengambil nama field yg menjadi acuan untuk sorting
$order_ascdesc = $_POST['order'][0]['dir']; // Untuk menentukan order by "ASC" atau "DESC"
$order = " ORDER BY ".$_POST['columns'][$order_field]['data']." ".$order_ascdesc;
$sql_data = mysqli_query($con, $query.$order." LIMIT ".$limit." OFFSET ".$start); // Query untuk data yang akan di tampilkan
$sql_filter = mysqli_query($con, $query); // Query untuk count jumlah data sesuai dengan filter pada textbox pencarian
$sql_filter_count = mysqli_num_rows($sql_filter); // Hitung data yg ada pada query $sql_filter

if ($_GET['ket']=='produk') {
	$data = array();
	while($dataarray = mysqli_fetch_assoc($sql_data)) {

		$row_array['barang_id'] = $dataarray['barang_id'];
		$row_array['barang_nama'] = $dataarray['barang_nama'];
		$row_array['kategori_nama'] = $dataarray['kategori_nama'];
		$row_array['barang_harga_beli'] = $dataarray['barang_harga_beli'];
		$row_array['barang_harga_jual'] = $dataarray['barang_harga_jual'];
		$row_array['barang_diskon'] = $dataarray['barang_diskon'];
		$row_array['barang_set_stok'] = $dataarray['barang_set_stok'];
		$row_array['barang_stok'] = $dataarray['barang_stok'];
		$row_array['barang_batas_stok'] = $dataarray['barang_batas_stok'];
		$row_array['barang_disable'] = $dataarray['barang_disable'];
		if ($dataarray['barang_image']=='') {
			$row_array['barang_image'] = 'default.jpg';
		} else {
			$row_array['barang_image'] = $dataarray['barang_image'];
		}
		

        array_push($data,$row_array);
	}
} else {
	$data = mysqli_fetch_all($sql_data, MYSQLI_ASSOC); // Untuk mengambil data hasil query menjadi array

}
$callback = array(
    'draw'=>$_POST['draw'], // Ini dari datatablenya
    'recordsTotal'=>$sql_count,
    'recordsFiltered'=>$sql_filter_count,
    'data'=>$data
);
header('Content-Type: application/json');
echo json_encode($callback); // Convert array $callback ke j