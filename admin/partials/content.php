<?php
    if ($_GET['menu']=='home' || $_GET['menu']=='') {

        include "components/dashboard.page.php";

    } elseif ($_GET['menu']=='transaksi') {

        include "components/transaksi.page.php";

    }  elseif ($_GET['menu']=='stok') {

        include "components/stok.page.php";

    } elseif ($_GET['menu']=='produk') {

        include "components/produk.page.php";

    } elseif ($_GET['menu']=='laporan') {

        include "components/laporan.page.php";

    } elseif ($_GET['menu']=='user') {

        include "components/user.page.php";

    } elseif ($_GET['menu']=='setting') {

        include "components/setting.page.php";

    }