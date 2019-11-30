<?php
include 'config/database.php';
session_start();

if(isset($_SESSION['login'])){
    header('location: admin?menu=');
}
else{

?>
<!DOCTYPE html>
<html>
<head>
	<?php include 'views/partials/head.php'; ?>
</head>
<body>
	<div class="view jarallax custom animated fadeIn" style="background-image: url('assets/img/gradient3.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
        <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
			<div class="container-fluid full-page-container">
				<div class="row h-100 justify-content-center align-items-center">
					<div class="col-lg-4 col-sm-8 animated fadeIn">
                        <section class="form-elegant slow bounceInDown animated">
                            <div class="card" style="">
                              <div class="card-body mx-4">

                                    <div class="row delay-2s fadeIn animated">
                                        <div class="col-12">
                                            <div class="align-items-center">
                                                <div class="text-center"><img src="assets/img/logo-baru.jpeg" width="200px" class="m-lr-auto"></div>
                                                <!--<h1 class="display-4 text-center mt-2 text-white">POS App</h1>-->
                                            </div>
                                        </div>
                                    </div>
                                   
                                        <div class="md-form delay-2s fadeIn animated mb-5">
                                            <input type="text" id="username" name="username" class="form-control ">
                                            <label for="username" class="" >USERNAME</label>
                                        </div>
                                        <div class="md-form delay-2s fadeIn animated mb-4">
                                            <input type="password" id="password" name="password" class="form-control ">
                                            <label for="password" class="" >PASSWORD</label>
                                        </div>

                                        <div class="text-center mb-3 delay-2s fadeIn animated">
                                            <button class="btn blue-gradient btn-block btn-rounded z-depth-1a waves-effect waves-light" type="submit" onclick="check_login();">Login</button>
                                        </div>
                              

                                </div>
                            </div>
                        </section>  
					</div>
				</div>
			</div>
        </div>
    </div>
	<?php include 'views/partials/footer.php'; ?>
    <script type="text/javascript">
        function check_login()
        {
            //Mengambil value dari input username & Password
            var username = $('#username').val();
            var password = $('#password').val();
            //Ubah alamat url berikut, sesuaikan dengan alamat script pada komputer anda
            var url_login    = 'controllers/login.ctrl.php';
            var url_admin    = 'admin/?menu=';
            var url_kasir    = 'admin/?menu=transaksi';
            
            //Ubah tulisan pada button saat click login
            
            
            //Gunakan jquery AJAX
            $.ajax({
                url     : url_login,
                //mengirimkan username dan password ke script login.php
                data    : 'var_usn='+username+'&var_pwd='+password, 
                //Method pengiriman
                type    : 'POST',
                //Data yang akan diambil dari script pemroses
                dataType: 'html',
                //Respon jika data berhasil dikirim
                success : function(pesan){

                    if (pesan=='admin' || pesan=='administrator') {
                        window.location = url_admin;
                    }
                    else if (pesan=='salah') {
                        alert("Username atau Password Salah !");
                    } else {
                        window.location = url_kasir;

                    }
                },
            });
        }
    </script>
</body>
</html>

<?php
}
?>