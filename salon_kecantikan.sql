-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2019 at 07:11 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salon_kecantikan`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `barang_id` int(5) NOT NULL,
  `barang_nama` varchar(50) NOT NULL,
  `barang_kategori` int(5) NOT NULL,
  `barang_harga_beli` int(20) NOT NULL,
  `barang_harga_jual` int(20) NOT NULL,
  `barang_diskon` int(20) NOT NULL,
  `barang_komisi` int(10) NOT NULL,
  `barang_komisi_dokter` int(10) NOT NULL,
  `barang_set_stok` int(1) NOT NULL,
  `barang_stok` int(5) NOT NULL,
  `barang_batas_stok` int(5) NOT NULL,
  `barang_disable` int(1) NOT NULL,
  `barang_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`barang_id`, `barang_nama`, `barang_kategori`, `barang_harga_beli`, `barang_harga_jual`, `barang_diskon`, `barang_komisi`, `barang_komisi_dokter`, `barang_set_stok`, `barang_stok`, `barang_batas_stok`, `barang_disable`, `barang_image`) VALUES
(1, 'Glow Acne Light', 1, 0, 170000, 10, 0, 0, 0, 0, 0, 0, ''),
(2, 'Oxy Glow Facial', 1, 0, 150000, 0, 0, 0, 0, 0, 0, 0, ''),
(3, 'Acne Series', 2, 150000, 300000, 0, 0, 0, 1, 31, 5, 0, ''),
(4, 'Tes', 3, 0, 60000, 0, 0, 0, 0, 0, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `jenis`
--

CREATE TABLE `jenis` (
  `jenis_id` int(5) NOT NULL,
  `jenis_nama` varchar(20) NOT NULL,
  `jenis_slug` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jenis`
--

INSERT INTO `jenis` (`jenis_id`, `jenis_nama`, `jenis_slug`) VALUES
(1, 'Obat', 'obat'),
(2, 'Treament', 'treament'),
(3, 'Therapist', 'therapist');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `kategori_id` int(5) NOT NULL,
  `kategori_nama` varchar(50) NOT NULL,
  `kategori_jenis` varchar(20) NOT NULL,
  `kategori_slug` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`kategori_id`, `kategori_nama`, `kategori_jenis`, `kategori_slug`) VALUES
(1, 'Facial', '2', 'facial'),
(2, 'Obat', '1', 'obat'),
(3, 'Therapist', '3', 'therapist');

-- --------------------------------------------------------

--
-- Table structure for table `log_harga`
--

CREATE TABLE `log_harga` (
  `log_id` int(10) NOT NULL,
  `barang_id` int(10) NOT NULL,
  `harga_beli_awal` varchar(20) NOT NULL,
  `harga_beli_baru` varchar(20) NOT NULL,
  `harga_jual_awal` varchar(20) NOT NULL,
  `harga_jual_baru` varchar(20) NOT NULL,
  `harga_jual_online_lama` varchar(20) NOT NULL,
  `harga_jual_online_baru` varchar(20) NOT NULL,
  `user` int(10) NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log_harga`
--

INSERT INTO `log_harga` (`log_id`, `barang_id`, `harga_beli_awal`, `harga_beli_baru`, `harga_jual_awal`, `harga_jual_baru`, `harga_jual_online_lama`, `harga_jual_online_baru`, `user`, `tanggal`) VALUES
(1, 1, '0', '0', '150000', '170000', '', '', 43, '2019-10-19'),
(2, 3, '150000', '150000', '300000', '300000', '', '', 43, '2019-10-19'),
(3, 4, '0', '0', '50000', '60000', '', '', 2, '2019-11-15'),
(4, 4, '0', '0', '60000', '60000', '', '', 2, '2019-11-15');

-- --------------------------------------------------------

--
-- Table structure for table `log_nota`
--

CREATE TABLE `log_nota` (
  `id` int(10) NOT NULL,
  `tanggal` date NOT NULL,
  `nonota` varchar(10) NOT NULL,
  `user` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `log_stok`
--

CREATE TABLE `log_stok` (
  `log_id` int(20) NOT NULL,
  `user` int(10) NOT NULL,
  `barang` int(20) NOT NULL,
  `stok_awal` int(10) NOT NULL,
  `stok_jumlah` int(10) NOT NULL,
  `tanggal` date NOT NULL,
  `alasan` text NOT NULL,
  `keterangan` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log_stok`
--

INSERT INTO `log_stok` (`log_id`, `user`, `barang`, `stok_awal`, `stok_jumlah`, `tanggal`, `alasan`, `keterangan`) VALUES
(9, 2, 3, 31, 32, '2019-11-16', '', 'tambah'),
(10, 2, 3, 32, 29, '2019-11-16', 'Rusak', 'kurang'),
(11, 2, 3, 29, 31, '2019-11-16', '', 'tambah');

-- --------------------------------------------------------

--
-- Table structure for table `log_user`
--

CREATE TABLE `log_user` (
  `log_id` int(20) NOT NULL,
  `user` int(10) NOT NULL,
  `login` datetime NOT NULL,
  `logout` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log_user`
--

INSERT INTO `log_user` (`log_id`, `user`, `login`, `logout`) VALUES
(1, 1, '2019-10-21 22:58:41', '0000-00-00 00:00:00'),
(2, 2, '2019-10-23 00:32:42', '2019-10-25 22:05:45'),
(3, 2, '2019-10-25 22:05:59', '0000-00-00 00:00:00'),
(4, 2, '2019-10-26 10:50:38', '0000-00-00 00:00:00'),
(5, 2, '2019-10-26 19:45:45', '0000-00-00 00:00:00'),
(6, 2, '2019-10-27 20:25:35', '0000-00-00 00:00:00'),
(7, 2, '2019-10-29 19:41:47', '2019-10-29 22:18:23'),
(8, 2, '2019-10-29 22:19:03', '0000-00-00 00:00:00'),
(9, 2, '2019-11-07 21:58:56', '0000-00-00 00:00:00'),
(10, 2, '2019-11-15 21:41:10', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `member_id` int(10) NOT NULL,
  `member_no` varchar(10) NOT NULL,
  `member_nama` varchar(100) NOT NULL,
  `member_alamat` text NOT NULL,
  `member_tgl_lahir` date NOT NULL,
  `member_hp` varchar(20) NOT NULL,
  `member_gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `member_no`, `member_nama`, `member_alamat`, `member_tgl_lahir`, `member_hp`, `member_gender`) VALUES
(0, '', 'Non Member', '', '0000-00-00', '', 'Perempuan'),
(2, 'A1', 'Anna', 'Jl H Alwi A, Pakis, Malang', '1999-10-06', '08500001021', 'Perempuan'),
(3, 'A2', 'Ahmad', 'Malang', '2019-10-09', '085000003235', 'Laki-laki'),
(4, 'A3', 'Anggi', 'Malang', '1992-11-05', '0812200000', 'Perempuan');

-- --------------------------------------------------------

--
-- Table structure for table `member_temp`
--

CREATE TABLE `member_temp` (
  `member_temp_id` int(2) NOT NULL,
  `member_temp_member_id` int(5) NOT NULL,
  `member_temp_user_id` int(5) NOT NULL,
  `member_temp_therapist` int(5) NOT NULL,
  `member_temp_nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pengaturan_perusahaan`
--

CREATE TABLE `pengaturan_perusahaan` (
  `pengaturan_id` int(1) NOT NULL,
  `pengaturan_nama` varchar(30) NOT NULL,
  `pengaturan_alamat` text NOT NULL,
  `pengaturan_telp` varchar(20) NOT NULL,
  `pengaturan_logo` varchar(100) NOT NULL,
  `pengaturan_pajak` int(1) NOT NULL,
  `pengaturan_service` int(3) NOT NULL,
  `pengaturan_pajak_online` int(1) NOT NULL,
  `pengaturan_pajak_pembulatan` int(1) NOT NULL,
  `pengaturan_print_checklist` int(1) NOT NULL,
  `pengaturan_print_kitchen` int(1) NOT NULL,
  `pengaturan_print_bar` int(1) NOT NULL,
  `pengaturan_print_snack` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengaturan_perusahaan`
--

INSERT INTO `pengaturan_perusahaan` (`pengaturan_id`, `pengaturan_nama`, `pengaturan_alamat`, `pengaturan_telp`, `pengaturan_logo`, `pengaturan_pajak`, `pengaturan_service`, `pengaturan_pajak_online`, `pengaturan_pajak_pembulatan`, `pengaturan_print_checklist`, `pengaturan_print_kitchen`, `pengaturan_print_bar`, `pengaturan_print_snack`) VALUES
(1, 'Roketto', 'Jl Kendalsari No.6, Malang', '08113030639', 'logo.PNG', 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roles_id` int(10) UNSIGNED NOT NULL,
  `roles_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roles_id`, `roles_name`, `display_name`) VALUES
(0, 'administrator', 'Administrator'),
(1, 'admin', 'Admin'),
(2, 'therapist', 'Therapist'),
(3, 'kasir', 'Kasir');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `transaksi_id` int(10) NOT NULL,
  `transaksi_tanggal` date NOT NULL,
  `transaksi_waktu` time NOT NULL,
  `transaksi_bulan` varchar(10) NOT NULL,
  `transaksi_member` int(5) NOT NULL,
  `transaksi_total` int(20) NOT NULL,
  `transaksi_diskon` int(20) NOT NULL,
  `transaksi_tax` int(11) NOT NULL,
  `transaksi_tax_service` int(10) NOT NULL,
  `transaksi_bayar` int(20) NOT NULL,
  `transaksi_type_bayar` varchar(20) NOT NULL,
  `transaksi_user` int(5) NOT NULL,
  `transaksi_therapist` int(5) NOT NULL,
  `transaksi_nama` varchar(50) NOT NULL,
  `transaksi_ket` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`transaksi_id`, `transaksi_tanggal`, `transaksi_waktu`, `transaksi_bulan`, `transaksi_member`, `transaksi_total`, `transaksi_diskon`, `transaksi_tax`, `transaksi_tax_service`, `transaksi_bayar`, `transaksi_type_bayar`, `transaksi_user`, `transaksi_therapist`, `transaksi_nama`, `transaksi_ket`) VALUES
(1, '2019-10-26', '20:52:28', '2019-10', 0, 495000, 0, 45000, 0, 500000, 'cash', 2, 0, '', ''),
(2, '2019-10-26', '20:59:02', '2019-10', 2, 330000, 0, 30000, 0, 350000, 'cash', 2, 0, '', ''),
(3, '2019-10-26', '21:06:11', '2019-10', 2, 300000, 0, 0, 0, 300000, 'cash', 2, 0, '', ''),
(4, '2019-10-26', '21:07:03', '2019-10', 2, 120000, 30000, 0, 0, 150000, 'cash', 2, 0, '', ''),
(5, '2019-10-26', '21:09:55', '2019-10', 2, 453000, 0, 0, 0, 453000, 'debet', 2, 0, '', ''),
(6, '2019-10-27', '20:57:39', '2019-10', 2, 450000, 0, 0, 0, 500000, 'cash', 2, 0, '', ''),
(7, '2019-10-27', '21:00:01', '2019-10', 2, 153000, 0, 0, 0, 200000, 'cash', 2, 0, '', ''),
(8, '2019-10-27', '21:01:33', '2019-10', 2, 150000, 0, 0, 0, 150000, 'debet', 2, 0, '', ''),
(9, '2019-10-27', '21:02:20', '2019-10', 2, 300000, 0, 0, 0, 300000, 'debet', 2, 0, '', ''),
(10, '2019-10-27', '21:05:28', '2019-10', 2, 150000, 0, 0, 0, 150000, 'debet', 2, 0, '', ''),
(11, '2019-10-27', '21:21:21', '2019-10', 2, 150000, 0, 0, 0, 150000, 'debet', 2, 0, '', ''),
(12, '2019-10-27', '21:23:35', '2019-10', 2, 153000, 0, 0, 0, 200000, 'cash', 2, 0, '', ''),
(13, '2019-10-27', '21:28:44', '2019-10', 0, 153000, 0, 0, 0, 153000, 'debet', 2, 0, '', ''),
(14, '2019-10-27', '21:43:23', '2019-10', 0, 303000, 0, 0, 0, 350000, 'cash', 2, 0, '', ''),
(15, '2019-10-27', '21:49:59', '2019-10', 3, 150000, 0, 0, 0, 150000, 'debet', 2, 0, '', ''),
(16, '2019-10-29', '20:20:45', '2019-10', 3, 150000, 0, 0, 0, 150000, 'debet', 2, 0, '', ''),
(17, '2019-10-29', '21:18:37', '2019-10', 2, 153000, 0, 0, 0, 200000, 'cash', 2, 0, '', ''),
(18, '2019-11-15', '21:58:26', '2019-11', 2, 300000, 0, 0, 0, 300000, 'debet', 2, 0, '', ''),
(19, '2019-11-15', '22:09:55', '2019-11', 3, 153000, 0, 0, 0, 200000, 'cash', 2, 0, '', ''),
(20, '2019-11-15', '22:14:56', '2019-11', 2, 450000, 0, 0, 0, 450000, 'cash', 2, 0, '', ''),
(21, '2019-11-15', '23:30:51', '2019-11', 0, 300000, 0, 0, 0, 300000, 'cash', 2, 7, 'TES', ''),
(22, '2019-11-16', '00:08:42', '2019-11', 4, 60000, 0, 0, 0, 60000, 'debet', 2, 5, '', ''),
(23, '2019-11-16', '00:13:06', '2019-11', 2, 900000, 0, 0, 0, 900000, 'cash', 2, 5, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_detail`
--

CREATE TABLE `transaksi_detail` (
  `transaksi_detail_id` int(10) NOT NULL,
  `transaksi_detail_nota` int(10) NOT NULL,
  `transaksi_detail_barang_id` int(10) NOT NULL,
  `transaksi_detail_harga` int(20) NOT NULL,
  `transaksi_detail_harga_beli` int(10) NOT NULL,
  `transaksi_detail_diskon` int(10) NOT NULL,
  `transaksi_detail_jumlah` int(5) NOT NULL,
  `transaksi_detail_total` int(20) NOT NULL,
  `transaksi_detail_keterangan` text NOT NULL,
  `transaksi_detail_status` int(1) NOT NULL,
  `transaksi_detail_user` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi_detail`
--

INSERT INTO `transaksi_detail` (`transaksi_detail_id`, `transaksi_detail_nota`, `transaksi_detail_barang_id`, `transaksi_detail_harga`, `transaksi_detail_harga_beli`, `transaksi_detail_diskon`, `transaksi_detail_jumlah`, `transaksi_detail_total`, `transaksi_detail_keterangan`, `transaksi_detail_status`, `transaksi_detail_user`) VALUES
(1, 2, 3, 300000, 150000, 0, 1, 300000, '', 0, 2),
(2, 3, 3, 300000, 150000, 0, 1, 300000, '', 0, 2),
(3, 4, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(4, 5, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(5, 5, 3, 300000, 150000, 0, 1, 300000, '', 0, 2),
(6, 6, 2, 150000, 0, 0, 3, 450000, '', 0, 2),
(7, 7, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(8, 8, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(9, 9, 3, 300000, 150000, 0, 1, 300000, '', 0, 2),
(10, 10, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(11, 11, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(12, 12, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(13, 13, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(14, 14, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(15, 14, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(16, 15, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(17, 16, 2, 150000, 0, 0, 1, 150000, '', 0, 2),
(18, 17, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(19, 18, 2, 150000, 0, 0, 2, 300000, '', 0, 2),
(20, 19, 1, 153000, 0, 17000, 1, 153000, '', 0, 2),
(21, 20, 2, 150000, 0, 0, 3, 450000, '', 0, 2),
(22, 21, 3, 300000, 150000, 0, 1, 300000, '', 0, 2),
(23, 22, 4, 60000, 0, 0, 1, 60000, '', 0, 2),
(24, 23, 3, 300000, 150000, 0, 3, 900000, '', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_detail_temp`
--

CREATE TABLE `transaksi_detail_temp` (
  `transaksi_detail_temp_id` int(10) NOT NULL,
  `transaksi_detail_temp_barang_id` int(10) NOT NULL,
  `transaksi_detail_temp_harga` int(20) NOT NULL,
  `transaksi_detail_temp_harga_beli` int(10) NOT NULL,
  `transaksi_detail_temp_diskon` int(10) NOT NULL,
  `transaksi_detail_temp_jumlah` int(5) NOT NULL,
  `transaksi_detail_temp_total` int(20) NOT NULL,
  `transaksi_detail_temp_keterangan` text NOT NULL,
  `transaksi_detail_temp_status` varchar(10) NOT NULL,
  `transaksi_detail_temp_user` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_pengeluaran`
--

CREATE TABLE `transaksi_pengeluaran` (
  `transaksi_pengeluaran_id` int(10) NOT NULL,
  `transaksi_pengeluaran_tanggal` date NOT NULL,
  `transaksi_pengeluaran_user` int(10) NOT NULL,
  `transaksi_pengeluaran_nama` text NOT NULL,
  `transaksi_pengeluaran_harga` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `role`, `remember_token`) VALUES
(1, 'Roziqin', 'roziqin', '21232f297a57a5a743894a0e4a801fc3', '0', '0'),
(2, 'Admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', '1', '0'),
(3, 'kasir', 'kasir', '21232f297a57a5a743894a0e4a801fc3', '3', '0'),
(4, 'Anggi', 'anggi', '7f78f06d2d1262a0a222ca9834b15d9d', '2', '0'),
(5, 'Bunga', 'bunga', '21232f297a57a5a743894a0e4a801fc3', '2', '0'),
(7, 'Indah', 'indah', '92348a8febc8970da8442379262506f2', '2', '0');

-- --------------------------------------------------------

--
-- Table structure for table `validasi`
--

CREATE TABLE `validasi` (
  `validasi_id` int(10) NOT NULL,
  `validasi_tanggal` date NOT NULL,
  `validasi_waktu` time NOT NULL,
  `validasi_user_id` int(10) NOT NULL,
  `validasi_user_nama` varchar(50) NOT NULL,
  `validasi_jumlah` int(20) NOT NULL,
  `validasi_cash` int(20) NOT NULL,
  `validasi_debet` int(20) NOT NULL,
  `validasi_omset` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `validasi`
--

INSERT INTO `validasi` (`validasi_id`, `validasi_tanggal`, `validasi_waktu`, `validasi_user_id`, `validasi_user_nama`, `validasi_jumlah`, `validasi_cash`, `validasi_debet`, `validasi_omset`) VALUES
(12, '2019-10-29', '21:55:25', 2, 'Admin', 153000, 153000, 150000, 303000),
(16, '2019-11-15', '22:10:39', 2, 'Admin', 100000, 153000, 300000, 453000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`barang_id`);

--
-- Indexes for table `jenis`
--
ALTER TABLE `jenis`
  ADD PRIMARY KEY (`jenis_id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`kategori_id`);

--
-- Indexes for table `log_harga`
--
ALTER TABLE `log_harga`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `log_nota`
--
ALTER TABLE `log_nota`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log_stok`
--
ALTER TABLE `log_stok`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `log_user`
--
ALTER TABLE `log_user`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `member_temp`
--
ALTER TABLE `member_temp`
  ADD PRIMARY KEY (`member_temp_id`);

--
-- Indexes for table `pengaturan_perusahaan`
--
ALTER TABLE `pengaturan_perusahaan`
  ADD PRIMARY KEY (`pengaturan_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roles_id`),
  ADD UNIQUE KEY `roles_name_unique` (`roles_name`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`transaksi_id`);

--
-- Indexes for table `transaksi_detail`
--
ALTER TABLE `transaksi_detail`
  ADD PRIMARY KEY (`transaksi_detail_id`);

--
-- Indexes for table `transaksi_detail_temp`
--
ALTER TABLE `transaksi_detail_temp`
  ADD PRIMARY KEY (`transaksi_detail_temp_id`);

--
-- Indexes for table `transaksi_pengeluaran`
--
ALTER TABLE `transaksi_pengeluaran`
  ADD PRIMARY KEY (`transaksi_pengeluaran_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `validasi`
--
ALTER TABLE `validasi`
  ADD PRIMARY KEY (`validasi_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `barang_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `jenis`
--
ALTER TABLE `jenis`
  MODIFY `jenis_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `kategori_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `log_harga`
--
ALTER TABLE `log_harga`
  MODIFY `log_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `log_nota`
--
ALTER TABLE `log_nota`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `log_stok`
--
ALTER TABLE `log_stok`
  MODIFY `log_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `log_user`
--
ALTER TABLE `log_user`
  MODIFY `log_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `member_temp`
--
ALTER TABLE `member_temp`
  MODIFY `member_temp_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `pengaturan_perusahaan`
--
ALTER TABLE `pengaturan_perusahaan`
  MODIFY `pengaturan_id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roles_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `transaksi_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `transaksi_detail`
--
ALTER TABLE `transaksi_detail`
  MODIFY `transaksi_detail_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `transaksi_detail_temp`
--
ALTER TABLE `transaksi_detail_temp`
  MODIFY `transaksi_detail_temp_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `transaksi_pengeluaran`
--
ALTER TABLE `transaksi_pengeluaran`
  MODIFY `transaksi_pengeluaran_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `validasi`
--
ALTER TABLE `validasi`
  MODIFY `validasi_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
