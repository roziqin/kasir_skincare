-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2019 at 04:39 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
(3, 'Acne Series', 2, 150000, 300000, 0, 0, 0, 1, 24, 5, 0, ''),
(4, 'FAC. BASIC', 3, 25000, 40000, 0, 0, 0, 0, 0, 0, 0, ''),
(5, 'FAC. NAT LIGHT', 3, 40000, 75000, 0, 0, 0, 0, 0, 0, 0, ''),
(6, 'FAC. LUX WHT', 3, 50000, 90000, 0, 0, 0, 0, 0, 0, 0, ''),
(7, 'FAC. GLOW SKIN', 3, 75000, 125000, 0, 0, 0, 0, 0, 0, 0, '');

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
(2, 3, '150000', '150000', '300000', '300000', '', '', 43, '2019-10-19');

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
  `alasan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log_stok`
--

INSERT INTO `log_stok` (`log_id`, `user`, `barang`, `stok_awal`, `stok_jumlah`, `tanggal`, `alasan`) VALUES
(1, 43, 3, 25, 30, '2019-10-19', ''),
(2, 43, 3, 30, 24, '2019-10-19', 'Rusak');

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
(1, 1, '2019-10-21 22:58:41', '2019-10-25 11:15:20'),
(2, 1, '2019-10-25 11:15:35', '0000-00-00 00:00:00'),
(3, 1, '2019-11-04 10:35:52', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `member_id` int(10) NOT NULL,
  `member_nama` varchar(100) NOT NULL,
  `member_alamat` text NOT NULL,
  `member_tgl_lahir` date NOT NULL,
  `member_hp` varchar(20) NOT NULL,
  `member_gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `member_nama`, `member_alamat`, `member_tgl_lahir`, `member_hp`, `member_gender`) VALUES
(1, 'Tutik Mahmudah', 'sentong', '1998-04-24', '081233529513', 'Perempuan'),
(2, 'Anna', 'Jl H Alwi A, Pakis, Malang', '1999-10-06', '08500001021', 'Perempuan'),
(3, 'Roziqin', 'Malang', '2019-10-09', '085000003235', 'Laki-laki'),
(4, 'Ila firdah', 'Pagelaran', '1992-08-25', '', 'Perempuan'),
(5, 'Endri Ana', 'Sanggrahan', '1985-05-09', '082334031080', 'Perempuan'),
(6, 'Sri winarni', 'Ubalan', '1965-06-10', '', 'Perempuan'),
(7, 'Ayu mega arlinda', 'Blimbing', '1990-10-01', '', 'Perempuan'),
(8, 'Aulia rahmawati', 'Blimbing', '1996-10-24', '', 'Perempuan'),
(9, 'Eri widyawati', 'Tugu sari', '1991-11-25', '087859085133', 'Perempuan'),
(10, 'Dewi wulandari', 'Semeru selatan', '1999-04-21', '08785945230', 'Perempuan'),
(11, 'Duril sahara safitri', 'Sumber tangkep', '1998-01-30', '089619625451', 'Perempuan'),
(12, 'Tari kusyanti', 'Dampit', '1984-08-20', '', 'Perempuan'),
(13, 'Yosinanda', 'Dampit', '1987-04-05', '081357586228', 'Perempuan'),
(14, 'Nunuk susanti', 'Gadang', '1976-05-16', '03415170000', 'Perempuan'),
(15, 'Endah Yuniati', 'jl.Mataram', '1973-06-20', '', 'Perempuan'),
(16, 'Ike martini', 'prambanan', '1992-03-22', '085781486348', 'Perempuan'),
(17, 'Ari supriani', 'polaman', '1964-04-01', '085646426111', 'Perempuan'),
(18, 'Nadya diyanti', 'polaman', '1996-12-10', '081333797974', 'Perempuan'),
(19, 'Gusti karinda', 'polaman', '0000-00-00', '085755137871', 'Perempuan'),
(20, 'dr.Ni matus sholihah', '', '0000-00-00', '', 'Perempuan'),
(21, 'Muutik astikah', 'Bumirejo', '1975-01-12', '082337719257', 'Perempuan'),
(22, 'Puput winarti', 'umbul rejo', '1985-01-30', '085791810203', 'Perempuan'),
(23, 'Malikha', 'Dampit', '1993-10-14', '', 'Perempuan'),
(24, 'paiman', '', '0000-00-00', '', 'Perempuan'),
(25, 'Tutuk wisarawati', 'Gunung jati', '1975-04-24', '', 'Perempuan'),
(26, 'Rito nisadana', 'Sumber kembar', '1997-08-23', '087859437993', 'Perempuan'),
(27, 'Yolan efril', 'Dampit', '1997-04-19', '', 'Perempuan'),
(28, 'Hayun', 'jl.jenggolo', '1977-02-06', '081233155326', 'Perempuan'),
(29, 'Suci yuliana', 'Genteng', '1979-07-28', '', 'Perempuan'),
(30, 'Dyah ayu rohmani', 'Bumirejo', '1997-11-26', '081945367895', 'Perempuan'),
(31, 'Dwi ning sih', 'Segaluh', '1972-06-26', '085203338566', 'Perempuan'),
(32, 'Nurul idayati', 'Sumberayu', '1985-05-20', '089665894190', 'Perempuan'),
(33, 'Nancy', 'Sumber kembang', '1986-04-24', '081330563550', 'Perempuan'),
(34, 'Reny indah', 'Semeru selatan', '1999-02-06', '082232950579', 'Perempuan'),
(35, 'Anggi mayda damta', 'Semeru selatan', '2000-05-05', '081945955875', 'Perempuan'),
(36, 'Dyah warianti', 'jl.Pasar baru', '1989-11-24', '081217366629', 'Perempuan'),
(37, 'Mochamad rafli', 'jl.jenggolo', '1997-06-17', '089677554607', 'Perempuan'),
(38, 'Hj.Nurhasanah', 'jl.Ngurawan', '1955-08-10', '085100580577', 'Perempuan'),
(39, 'Tutik', 'Sidoasri', '1979-09-09', '', 'Perempuan'),
(40, 'Yamik/endah wahyuni', 'Sidoasri', '1977-02-02', '', 'Perempuan'),
(41, 'Kustinaning', 'Dampit', '1967-06-27', '081230035400', 'Perempuan'),
(42, 'Nur cahyati rina', 'Semeru selatan', '1962-07-19', '08125215110', 'Perempuan'),
(43, 'Anggun Natarena', 'Baturetno', '1999-06-17', '082143432584', 'Perempuan'),
(44, 'Riza Afifa ', 'Sanggrahan', '1993-07-23', '082337871199', 'Perempuan'),
(45, 'Jumiati', 'Sumber kembar', '1984-11-03', '081233589189', 'Perempuan'),
(46, 'Ririn eka mudywati', 'Gedog wetan', '1972-09-10', '081249055069', 'Perempuan'),
(47, 'Yulistianah', 'jl.Nakulo', '1974-07-01', '081555721933', 'Perempuan'),
(48, 'Fitri Sinta', 'Semeru selatan', '1982-01-17', '081216310666', 'Perempuan'),
(49, 'Diana yuliastyorini', 'jl.Pahlawan', '1978-06-24', '082232377411', 'Perempuan'),
(50, 'Jamilah', 'Sumberayu', '1978-01-23', '081252427310', 'Perempuan'),
(51, 'Emma kurniawati', 'Srimulyo', '1978-05-02', '081615727226', 'Perempuan'),
(52, 'Ika purwati', 'Amadanom', '1984-11-02', '082140545650', 'Perempuan'),
(53, 'Ninik setyowati', 'Amadanom', '1980-04-03', '085649544373', 'Perempuan'),
(54, 'Cholilatul milan', 'Sumber tangkep', '1996-12-02', '081944967722', 'Perempuan'),
(55, 'Arofa islamia', 'Sumberayu', '0000-00-00', '087759977975', 'Perempuan'),
(56, 'Diva iftihal ', 'Sumber tangkep', '1995-08-06', '081232235128', 'Perempuan'),
(57, 'Ika puji', 'Ngelak - dampit', '1999-01-05', '081945991941', 'Perempuan'),
(58, 'Yulaekah ', 'Semeru selatan', '1970-08-25', '085101427358', 'Perempuan'),
(59, 'anggita putri', 'jl. tugu mulyo', '1998-05-08', '082249106662', 'Perempuan'),
(60, 'Sri hartanti', 'Sumber kembar', '1978-07-20', '', 'Perempuan'),
(61, 'Dewik novitasari', 'Kepanjen', '1991-11-06', '', 'Perempuan'),
(62, 'Luluk sulistyowati', 'jl. malowopati', '1959-09-08', '085815064611', 'Perempuan'),
(63, 'Rosida arfiani', 'genteng ', '1998-03-23', '085203821219', 'Perempuan'),
(64, 'Sri enti', 'jl. mataram', '1979-06-17', '085855733739', 'Perempuan'),
(65, 'Nita nur isyanah', 'jl. malowopati', '1978-12-23', '082140155923', 'Perempuan'),
(66, 'Kamsini', 'pamotan ', '1971-01-25', '', 'Perempuan'),
(67, 'Ekawippi', 'jl. gunung jati', '1998-01-19', '085933048536', 'Perempuan'),
(68, 'Jessika', 'simpang mataram', '1998-07-09', '088217530899', 'Perempuan'),
(69, 'Linda kartika sari', 'jl. pahlawan ', '1997-10-20', '082233683279', 'Perempuan'),
(70, 'Miftachul khoiriyah', 'Sumberayu', '1997-04-19', '087859241701', 'Perempuan'),
(71, 'giovani milda', 'jl. pahlawan ', '1985-02-13', '085102180601', 'Perempuan'),
(72, 'Ernawati', 'ngelak', '1984-08-17', '081252113249', 'Perempuan'),
(73, 'Evi nadia m. s', 'Sumber tangkep', '1994-08-09', '085704207650', 'Perempuan'),
(74, 'Iis humaidah', 'Dampit', '1993-05-01', '081216840463', 'Perempuan'),
(75, 'sulfia ningtias', 'jl. dhoho barat', '1989-10-20', '085933023028', 'Perempuan'),
(76, 'Anisa yuni lestari ', 'jl. dhoho barat', '1995-06-22', '085648385563', 'Perempuan'),
(77, 'Ani herawati', 'Ngelak - dampit', '1982-08-15', '082236384696', 'Perempuan'),
(78, 'Candra wijayanti', 'Dampit', '1992-09-19', '085749523143', 'Perempuan'),
(79, 'riska fidinia', 'jl. intan no 1 malang ', '1985-04-16', '08113437830', 'Perempuan'),
(80, 'erny yuliati', 'jl. blambangan', '1967-01-27', '0812331275582', 'Perempuan'),
(81, 'Rizky  fajar setyorini ', 'Semeru selatan', '1989-08-31', '081336653963', 'Perempuan'),
(82, 'Reza fatmala', 'klepu', '1995-10-28', '082244163586', 'Perempuan'),
(83, 'Siti maimunah ', 'jl. raya talangsuko', '1986-11-23', '082232954702', 'Perempuan'),
(84, 'Satriyo rachman ', 'jl. dhoho', '1998-01-24', '0341896801', 'Perempuan'),
(85, 'Oktavia ', 'Semeru selatan', '1984-10-30', '082142321333', 'Perempuan'),
(86, 'Selvi widya ', 'jl. mamenang', '1984-07-21', '082232962003', 'Perempuan'),
(87, 'Ester daniar', 'Amadanom', '1995-06-09', '082131212103', 'Perempuan'),
(88, 'Anita rahayu', 'Amadanom', '1967-04-09', '082131212103', 'Perempuan'),
(89, 'Atik maria ulfa', 'jl. kauman', '1983-01-04', '085731373730', 'Perempuan'),
(90, 'Danik arfiani ', 'jl. mayor damar', '1990-03-30', '08989354553', 'Perempuan'),
(91, 'sumakyah', 'kedawung', '1976-04-20', '085755036931', 'Perempuan'),
(92, 'fidya ', 'Bumirejo', '1986-05-30', '085259302568', 'Perempuan'),
(93, 'Siana ', 'Segaluh', '1987-06-16', '', 'Perempuan'),
(94, 'Sih Muriati', 'Tambak Asri', '0000-00-00', '', 'Perempuan'),
(95, 'Qomatiah', 'simpang gurawan', '1975-08-28', '082301579989', 'Perempuan'),
(96, 'Nevi ayu ', 'pamotan ', '1992-03-23', '082257874546', 'Perempuan'),
(97, 'winda', 'Dampit', '1994-06-07', '0', 'Perempuan'),
(98, 'ida armiati', 'Bumirejo', '1979-04-15', '085101577539', 'Perempuan'),
(99, 'Neni kartika sari', 'Amadanom', '1988-03-15', '085791001873', 'Perempuan');

-- --------------------------------------------------------

--
-- Table structure for table `member_temp`
--

CREATE TABLE `member_temp` (
  `member_temp_id` int(2) NOT NULL,
  `member_temp_member_id` int(5) NOT NULL,
  `member_temp_user_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member_temp`
--

INSERT INTO `member_temp` (`member_temp_id`, `member_temp_member_id`, `member_temp_user_id`) VALUES
(0, 2, 1);

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
(1, 'Roketto', 'Jl Kendalsari No.6, Malang', '08113030639', 'logo.PNG', 1, 0, 0, 0, 0, 0, 0, 0);

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
(1, 'owner', 'Owner'),
(2, 'admin', 'Admin'),
(3, 'kasir', 'Kasir'),
(4, 'pelanggan', 'Pelanggan'),
(6, 'investor', 'Investor');

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
  `transaksi_ket` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`transaksi_id`, `transaksi_tanggal`, `transaksi_waktu`, `transaksi_bulan`, `transaksi_member`, `transaksi_total`, `transaksi_diskon`, `transaksi_tax`, `transaksi_tax_service`, `transaksi_bayar`, `transaksi_type_bayar`, `transaksi_user`, `transaksi_ket`) VALUES
(1, '2019-10-26', '20:52:28', '2019-10', 0, 495000, 0, 45000, 0, 500000, 'cash', 2, ''),
(2, '2019-10-26', '20:59:02', '2019-10', 2, 330000, 0, 30000, 0, 350000, 'cash', 2, ''),
(3, '2019-10-26', '21:06:11', '2019-10', 2, 300000, 0, 0, 0, 300000, 'cash', 2, ''),
(4, '2019-10-26', '21:07:03', '2019-10', 2, 120000, 30000, 0, 0, 150000, 'cash', 2, ''),
(5, '2019-10-26', '21:09:55', '2019-10', 2, 453000, 0, 0, 0, 453000, 'debet', 2, ''),
(6, '2019-10-27', '20:57:39', '2019-10', 2, 450000, 0, 0, 0, 500000, 'cash', 2, ''),
(7, '2019-10-27', '21:00:01', '2019-10', 2, 153000, 0, 0, 0, 200000, 'cash', 2, ''),
(8, '2019-10-27', '21:01:33', '2019-10', 2, 150000, 0, 0, 0, 150000, 'debet', 2, ''),
(9, '2019-10-27', '21:02:20', '2019-10', 2, 300000, 0, 0, 0, 300000, 'debet', 2, ''),
(10, '2019-10-27', '21:05:28', '2019-10', 2, 150000, 0, 0, 0, 150000, 'debet', 2, ''),
(11, '2019-10-27', '21:21:21', '2019-10', 2, 150000, 0, 0, 0, 150000, 'debet', 2, ''),
(12, '2019-10-27', '21:23:35', '2019-10', 2, 153000, 0, 0, 0, 200000, 'cash', 2, ''),
(13, '2019-10-27', '21:28:44', '2019-10', 0, 153000, 0, 0, 0, 153000, 'debet', 2, ''),
(14, '2019-10-27', '21:43:23', '2019-10', 0, 303000, 0, 0, 0, 350000, 'cash', 2, ''),
(15, '2019-10-27', '21:49:59', '2019-10', 3, 150000, 0, 0, 0, 150000, 'debet', 2, ''),
(16, '2019-10-30', '12:18:35', '2019-10', 4, 99000, 0, 9000, 0, 100000, 'cash', 1, '');

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
(17, 16, 6, 90000, 50000, 0, 1, 90000, '', 0, 1);

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

--
-- Dumping data for table `transaksi_detail_temp`
--

INSERT INTO `transaksi_detail_temp` (`transaksi_detail_temp_id`, `transaksi_detail_temp_barang_id`, `transaksi_detail_temp_harga`, `transaksi_detail_temp_harga_beli`, `transaksi_detail_temp_diskon`, `transaksi_detail_temp_jumlah`, `transaksi_detail_temp_total`, `transaksi_detail_temp_keterangan`, `transaksi_detail_temp_status`, `transaksi_detail_temp_user`) VALUES
(1, 2, 150000, 0, 0, 1, 150000, '', '', 1);

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
(2, 'Admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', '2', '0'),
(3, 'kasir', 'kasir', '21232f297a57a5a743894a0e4a801fc3', '3', '0'),
(4, 'Pelanggan', 'pelanggan', '7f78f06d2d1262a0a222ca9834b15d9d', '4', '0'),
(5, 'Bagus', 'bagus', '21232f297a57a5a743894a0e4a801fc3', '1', '0'),
(7, 'Investor', 'roketto', '92348a8febc8970da8442379262506f2', '6', '0');

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
  `validasi_jumlah` int(50) NOT NULL,
  `validasi_omset` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `barang_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `log_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `log_nota`
--
ALTER TABLE `log_nota`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `log_stok`
--
ALTER TABLE `log_stok`
  MODIFY `log_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `log_user`
--
ALTER TABLE `log_user`
  MODIFY `log_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

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
  MODIFY `transaksi_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `transaksi_detail`
--
ALTER TABLE `transaksi_detail`
  MODIFY `transaksi_detail_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `transaksi_detail_temp`
--
ALTER TABLE `transaksi_detail_temp`
  MODIFY `transaksi_detail_temp_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `validasi_id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
