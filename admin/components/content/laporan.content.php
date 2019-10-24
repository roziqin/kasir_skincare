<?php
$con = mysqli_connect("localhost","root","","salon_kecantikan");
$ket = $_GET['ket'];

if ($ket=='omset' || $ket=='kasir') {
	if ($ket=='kasir') {
		$kasir = '';
		$col = 'col-md-6';
		$btn = 'btn-proses-laporan-kasir';
	} else {
		$kasir = 'hidden';
		$col = 'col-md-8';
		$btn = 'btn-proses-laporan-omset';
	}
	?>
	<div class="row justify-content-md-center">
		<div class="col-md-10">
			<div class="row">
				<div class="col-md-2">
				    <div class="md-form">
				        <select class="mdb-select md-form" id="daterange" name="ip-daterange">
				            <option value="harian">Harian</option>
				            <option value="bulanan">Bulanan</option>
				        </select>
				    </div>
				</div>
				<div class="col-md-2 <?php echo $kasir; ?>">
				    <div class="md-form">
				        <select class="mdb-select md-form" id="defaultForm-kasir" name="ip-kasir">
		                    <option value="" disabled selected>Pilih Kasir</option>
		                <?php
		                	$sql="SELECT * from users";
		                  	$result=mysqli_query($con,$sql);
		                  	while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
		                      	echo "<option value='$data1[id]'>$data1[name]</option>";
		                  	}
		                ?>
				        </select>
				    </div>
				</div>
				<div class="<?php echo $col; ?>">
					<div class="row form-date">
						<div class="col-md-6">
				            <div class="md-form">
							  	<input placeholder="Start date" type="text" id="defaultForm-startdate" class="form-control datepicker">
				            </div>
						</div>
						<div class="col-md-6">
				            <div class="md-form">
							  	<input placeholder="End date" type="text" id="defaultForm-enddate" class="form-control datepicker">
				            </div>
				        </div>
					</div>
					<div class="row form-month hidden">
						<div class="col-md-6">
				            <div class="md-form m-0">
				            	<div class="row">
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="startmonth" name="ip-startmonth">
						                    <option value="" disabled selected>Bulan Mulai</option>
								            <option value="01">01</option>
								            <option value="02">02</option>
								            <option value="03">03</option>
								            <option value="04">04</option>
								            <option value="05">05</option>
								            <option value="06">06</option>
								            <option value="07">07</option>
								            <option value="08">08</option>
								            <option value="09">09</option>
								            <option value="10">10</option>
								            <option value="11">11</option>
								            <option value="12">12</option>
								        </select>
					            	</div>
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="startyear" name="ip-startyear">
						                    <option value="" disabled selected>Tahun Mulai</option>
								            <option value="2018">2018</option>
								            <option value="2019">2019</option>
								            <option value="2020">2020</option>
								            <option value="2021">2021</option>
								        </select>
					            	</div>
					            </div>
				            </div>
						</div>
						<div class="col-md-6">
				            <div class="md-form m-0">
				            	<div class="row">
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="endmonth" name="ip-endmonth">
						                    <option value="" disabled selected>Bulan Sampai</option>
								            <option value="01">01</option>
								            <option value="02">02</option>
								            <option value="03">03</option>
								            <option value="04">04</option>
								            <option value="05">05</option>
								            <option value="06">06</option>
								            <option value="07">07</option>
								            <option value="08">08</option>
								            <option value="09">09</option>
								            <option value="10">10</option>
								            <option value="11">11</option>
								            <option value="12">12</option>
								        </select>
					            	</div>
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="endyear" name="ip-endyear">
						                    <option value="" disabled selected>Tahun Sampai</option>
								            <option value="2018">2018</option>
								            <option value="2019">2019</option>
								            <option value="2020">2020</option>
								            <option value="2021">2021</option>
								        </select>
					            	</div>
					            </div>
				            </div>
				        </div>
					</div>
				</div>
				<div class="col-md-2">
				    <div class="md-form">
				    	<button class="btn btn-primary <?php echo $btn; ?>">Proses</button>
				    </div>
				</div>
			</div>	
			<div class="row fadeInLeft slow animated">
				<div class="col-md-12">
					<?php
					if ($ket=='kasir') {
					?>
						<table id="table-kasir" class="table table-striped table-bordered" style="width:100%">
					        <thead>
					            <tr>
		                            <th>tanggal</th>
		                            <th>kasir</th>
		                            <th style="text-align: right;">Cash</th>
		                            <th style="text-align: right;">Debet</th>
		                            <th style="text-align: right;">online</th>
		                            <th>total omset</th>
					            </tr>
					        </thead>
					        <tfoot>
					            <tr>
		                            <th>tanggal</th>
		                            <th>kasir</th>
		                            <th style="text-align: right;">Cash</th>
		                            <th style="text-align: right;">Debet</th>
		                            <th style="text-align: right;">online</th>
		                            <th>total omset</th>
					            </tr>
					        </tfoot>
					    </table>


					<?php
					} else {
					?>
						<table id="table-omset" class="table table-striped table-bordered" style="width:100%">
					        <thead>
					            <tr>
		                            <th>tanggal</th>
		                            <th style="text-align: right;">Cash</th>
		                            <th style="text-align: right;">Debet</th>
		                            <th style="text-align: right;">online</th>
		                            <th>total omset</th>
					            </tr>
					        </thead>
					        <tfoot>
					            <tr>
		                            <th>tanggal</th>
		                            <th style="text-align: right;">Cash</th>
		                            <th style="text-align: right;">Debet</th>
		                            <th style="text-align: right;">online</th>
		                            <th>total omset</th>
					            </tr>
					        </tfoot>
					    </table>
					<?php
					}
					?>
				</div>
			</div>
		</div>
	</div>

<?php
} elseif ($ket=='menu') {
	?>
	<div class="row justify-content-md-center">
		<div class="col-md-10">
			<div class="row">
				<div class="col-md-2">
				    <div class="md-form">
				        <select class="mdb-select md-form" id="daterange" name="ip-daterange">
				            <option value="harian">Harian</option>
				            <option value="bulanan">Bulanan</option>
				        </select>
				    </div>
				</div>
				<div class="col-md-2">
				    <div class="md-form">
				        <select class="mdb-select md-form" id="defaultForm-menu" name="ip-menu">
		                    <option value="" disabled selected>Pilih Menu</option>
		                <?php
		                	$sql="SELECT * from barang";
		                  	$result=mysqli_query($con,$sql);
		                  	while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
		                      	echo "<option value='$data1[barang_id]'>$data1[barang_nama]</option>";
		                  	}
		                ?>
				        </select>
				    </div>
				</div>
				<div class="col-md-6">
					<div class="row form-date">
						<div class="col-md-6">
				            <div class="md-form">
							  	<input placeholder="Start date" type="text" id="defaultForm-startdate" class="form-control datepicker">
				            </div>
						</div>
						<div class="col-md-6">
				            <div class="md-form">
							  	<input placeholder="End date" type="text" id="defaultForm-enddate" class="form-control datepicker">
				            </div>
				        </div>
					</div>
					<div class="row form-month hidden">
						<div class="col-md-6">
				            <div class="md-form m-0">
				            	<div class="row">
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="startmonth" name="ip-startmonth">
						                    <option value="" disabled selected>Bulan Mulai</option>
								            <option value="01">01</option>
								            <option value="02">02</option>
								            <option value="03">03</option>
								            <option value="04">04</option>
								            <option value="05">05</option>
								            <option value="06">06</option>
								            <option value="07">07</option>
								            <option value="08">08</option>
								            <option value="09">09</option>
								            <option value="10">10</option>
								            <option value="11">11</option>
								            <option value="12">12</option>
								        </select>
					            	</div>
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="startyear" name="ip-startyear">
						                    <option value="" disabled selected>Tahun Mulai</option>
								            <option value="2018">2018</option>
								            <option value="2019">2019</option>
								            <option value="2020">2020</option>
								            <option value="2021">2021</option>
								        </select>
					            	</div>
					            </div>
				            </div>
						</div>
						<div class="col-md-6">
				            <div class="md-form m-0">
				            	<div class="row">
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="endmonth" name="ip-endmonth">
						                    <option value="" disabled selected>Bulan Sampai</option>
								            <option value="01">01</option>
								            <option value="02">02</option>
								            <option value="03">03</option>
								            <option value="04">04</option>
								            <option value="05">05</option>
								            <option value="06">06</option>
								            <option value="07">07</option>
								            <option value="08">08</option>
								            <option value="09">09</option>
								            <option value="10">10</option>
								            <option value="11">11</option>
								            <option value="12">12</option>
								        </select>
					            	</div>
					            	<div class="col-md-6">
								        <select class="mdb-select md-form" id="endyear" name="ip-endyear">
						                    <option value="" disabled selected>Tahun Sampai</option>
								            <option value="2018">2018</option>
								            <option value="2019">2019</option>
								            <option value="2020">2020</option>
								            <option value="2021">2021</option>
								        </select>
					            	</div>
					            </div>
				            </div>
				        </div>
					</div>
				</div>
				<div class="col-md-2">
				    <div class="md-form">
				    	<button class="btn btn-primary btn-proses-laporan-menu">Proses</button>
				    </div>
				</div>
			</div>	
			<div class="row fadeInLeft slow animated">
				<div class="col-md-12">
					<table id="table-menu" class="table table-striped table-bordered" style="width:100%">
				        <thead>
				            <tr>
	                            <th>tanggal</th>
	                            <th>menu</th>
	                            <th>jumlah</th>
				            </tr>
				        </thead>
				        <tfoot>
				            <tr>
	                            <th>tanggal</th>
	                            <th>menu</th>
	                            <th>jumlah</th>
				            </tr>
				        </tfoot>
				    </table>
				</div>
			</div>
		</div>
	</div>

<?php

}




?>
<script type="text/javascript">

  $(document).ready(function(){
      	$('.mdb-select').materialSelect();
		
		$("#daterange").change(function(){
			if ($(this).val()=="harian") {

	            $("#defaultForm-startdate").val('');
	            $("#startmonth").val('');
	            $("#startyear").val('');
	            $("#endmonth").val('');
	            $("#endyear").val('');

	           
	            $(".form-month").addClass('hidden');
	            $(".form-date").removeClass('hidden');
			
			} else if ($(this).val()=="bulanan") {
	        
	            $("#defaultForm-startdate").val('');
	            $("#startmonth").val('');
	            $("#startyear").val('');
	            $("#endmonth").val('');
	            $("#endyear").val('');

	            $(".form-month").removeClass('hidden');
	            $(".form-date").addClass('hidden');
			
			}
		});
		$('.datepicker').pickadate({
			weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			showMonthsShort: true
		})
		
		function convertToRupiah(angka)
		{
		  var rupiah = '';    
		  var angkarev = angka.toString().split('').reverse().join('');
		  for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
		  return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
		}
		
		var dateformat = ["01","02","03","04","05","06","07","08","09","10",
		            "11","12","13","14","15","16","17","18","19","20",
		            "21","22","23","24","25","26","27","28","29","30","31"];

		
		$('.btn-proses-laporan-omset').on('click',function(){
			var daterange = $('#daterange').val();

			if (daterange=='harian') {

	          	var start = $('#defaultForm-startdate').val();
	          	var end = $('#defaultForm-enddate').val();
	          	var kettext = 'transaksi_tanggal';
				
			} else if (daterange=='bulanan') {

	          	var start = $("#startyear").val()+"-"+$("#startmonth").val();
	          	var end = $("#endyear").val()+"-"+$("#endmonth").val();
	          	var kettext = 'transaksi_bulan';
				
			}

			
			$.ajax({
		        type:'POST',
		        url:'api/view.api.php?func=laporan-omset',
		        dataType: "json",
            	data:{
            		daterange:daterange,
            		start:start,
            		end:end
            	},
		        success:function(data){
		        	$('#table-omset').DataTable().clear().destroy();
		        	if (kettext=='transaksi_bulan') {
			        	$('#table-omset').DataTable( {
						    paging: false,
						    searching: false,
						    ordering: false,
						    data: data,
						    columns: [
						        { data: 'transaksi_bulan' },
						        { data: 'cash' },
						        { data: 'debet' },
						        { data: 'online' },
						        { data: 'total' }
						    ]
						} );

		        	} else if (kettext=='transaksi_tanggal') {
			        	$('#table-omset').DataTable( {
						    paging: false,
						    searching: false,
						    ordering: false,
						    data: data,
						    columns: [
						        { data: 'transaksi_tanggal' },
						        { data: 'cash' },
						        { data: 'debet' },
						        { data: 'online' },
						        { data: 'total' }
						    ]
						} );

		        	} 

		        	console.log("success "+kettext);
		        	console.log(data);
		        }
		    });
			/*
		    
			$('#table-omset').DataTable( {
			    ajax:  {
			        type:'POST',
			        url:'api/view.api.php?func=laporan-omset',
			        dataType: "json",
	            	data:{
	            		daterange:daterange,
	            		start:start,
	            		end:end
	            	}
			    },
			    columns: [
			        { data: 'transaksi_tanggal' },
			        { data: 'cash' },
			        { data: 'debet' },
			        { data: 'online' },
			        { data: 'total' }
			    ]
			} );

		    $.ajax({
		        type:'POST',
		        url:'api/view.api.php?func=laporan-omset',
		        dataType: "json",
            	data:{
            		daterange:daterange,
            		start:start,
            		end:end
            	},
		        success:function(data){
		            var date = [];
		            var total = [];
		            var omset = 0;

		            for (var i in data) {
		                date.push(moment(new Date(data[i].transaksi_tanggal)).format('ddd')+'-'+moment(new Date(data[i].transaksi_tanggal)).format('DD'));
		                total.push(data[i].total);
		                omset += parseInt(data[i].total);
		            }
		            $('#totomset').text(convertToRupiah(omset));
		            var ctxL = document.getElementById("lineChart").getContext('2d');
		            var myLineChart = new Chart(ctxL, {
		                type: 'line',
		                data: {
		                    labels: date,
		                    datasets: [{
		                            label: "",
		                            data: total,
		                            backgroundColor: [
		                                'rgba(0, 137, 132, .2)',
		                            ],
		                            borderColor: [
		                                'rgba(0, 10, 130, .7)',
		                            ],
		                            borderWidth: 2
		                        }
		                    ]
		                },
		                options: {
		                    responsive: true,
		                    aspectRatio: 2,
		                    tooltips: {
		                      callbacks: {
		                        label: function(t, d) {
		                           var xLabel = d.datasets[t.datasetIndex].label;
		                           var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
		                           return xLabel + ': ' + yLabel;
		                        }
		                      }
		                    },
		                    scales: {
		                      yAxes: [{
		                        ticks: {
		                           callback: function(value, index, total) {
		                              if (parseInt(value) >= 1000) {
		                                 return 'Rp. ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		                              } else {
		                                 return 'Rp. ' + value;
		                              }
		                           }
		                        }
		                      }]
		                    }
		                }
		            });
		        }
		    });
		    */
		});

	
		$('.btn-proses-laporan-kasir').on('click',function(){
			var daterange = $('#daterange').val();
			var kasir = $('#defaultForm-kasir').val();

			if (daterange=='harian') {

	          	var start = $('#defaultForm-startdate').val();
	          	var end = $('#defaultForm-enddate').val();
	          	var kettext = 'transaksi_tanggal';
				
			} else if (daterange=='bulanan') {

	          	var start = $("#startyear").val()+"-"+$("#startmonth").val();
	          	var end = $("#endyear").val()+"-"+$("#endmonth").val();
	          	var kettext = 'transaksi_bulan';
				
			}

			
			$.ajax({
		        type:'POST',
		        url:'api/view.api.php?func=laporan-kasir',
		        dataType: "json",
            	data:{
            		daterange:daterange,
            		start:start,
            		end:end,
            		kasir:kasir
            	},
		        success:function(data){
		        	console.log(kasir);
		        	$('#table-kasir').DataTable().clear().destroy();
		        	if (kettext=='transaksi_bulan') {
			        	$('#table-kasir').DataTable( {
						    paging: false,
						    searching: false,
						    ordering: false,
						    data: data,
						    columns: [
						        { data: 'transaksi_bulan' },
						        { data: 'kasir' },
						        { data: 'cash' },
						        { data: 'debet' },
						        { data: 'online' },
						        { data: 'total' }
						    ]
						} );

		        	} else if (kettext=='transaksi_tanggal') {
			        	$('#table-kasir').DataTable( {
						    paging: false,
						    searching: false,
						    ordering: false,
						    data: data,
						    columns: [
						        { data: 'transaksi_tanggal' },
						        { data: 'kasir' },
						        { data: 'cash' },
						        { data: 'debet' },
						        { data: 'online' },
						        { data: 'total' }
						    ]
						} );

		        	} 

		        	console.log("success "+kettext);
		        	console.log(data);
		        }
		    });
		});   

		$('.btn-proses-laporan-menu').on('click',function(){
			var daterange = $('#daterange').val();
			var menu = $('#defaultForm-menu').val();

			if (daterange=='harian') {

	          	var start = $('#defaultForm-startdate').val();
	          	var end = $('#defaultForm-enddate').val();
	          	var kettext = 'transaksi_tanggal';
				
			} else if (daterange=='bulanan') {

	          	var start = $("#startyear").val()+"-"+$("#startmonth").val();
	          	var end = $("#endyear").val()+"-"+$("#endmonth").val();
	          	var kettext = 'transaksi_bulan';
				
			}

			
			$.ajax({
		        type:'POST',
		        url:'api/view.api.php?func=laporan-menu',
		        dataType: "json",
            	data:{
            		daterange:daterange,
            		start:start,
            		end:end,
            		menu:menu
            	},
		        success:function(data){
		        	console.log(menu);
		        	$('#table-menu').DataTable().clear().destroy();
		        	if (kettext=='transaksi_bulan') {
			        	$('#table-menu').DataTable( {
						    paging: false,
						    searching: false,
						    ordering: false,
						    data: data,
						    columns: [
						        { data: 'transaksi_bulan' },
						        { data: 'barang_nama' },
						        { data: 'jumlah' }
						    ]
						} );

		        	} else if (kettext=='transaksi_tanggal') {
			        	$('#table-menu').DataTable( {
						    paging: false,
						    searching: false,
						    ordering: false,
						    data: data,
						    columns: [
						        { data: 'transaksi_tanggal' },
						        { data: 'barang_nama' },
						        { data: 'jumlah' }
						    ]
						} );

		        	} 

		        	console.log("success "+kettext);
		        	console.log(data);
		        }
		    });
		});         
	});

/*
if ($("main").hasClass("dashboard") == true) {

    $.ajax({
        type:'POST',
        url:'api/view.api.php?func=dasboard-omset',
        dataType: "json",
        success:function(data){
            var date = [];
            var total = [];
            var omset = 0;

            for (var i in data) {
                date.push(moment(new Date(data[i].transaksi_tanggal)).format('ddd')+'-'+moment(new Date(data[i].transaksi_tanggal)).format('DD'));
                total.push(data[i].total);
                omset += parseInt(data[i].total);
            }
            $('#totomset').text(convertToRupiah(omset));
            var ctxL = document.getElementById("lineChart").getContext('2d');
            var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                            label: "",
                            data: total,
                            backgroundColor: [
                                'rgba(0, 137, 132, .2)',
                            ],
                            borderColor: [
                                'rgba(0, 10, 130, .7)',
                            ],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    aspectRatio: 2,
                    tooltips: {
                      callbacks: {
                        label: function(t, d) {
                           var xLabel = d.datasets[t.datasetIndex].label;
                           var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
                           return xLabel + ': ' + yLabel;
                        }
                      }
                    },
                    scales: {
                      yAxes: [{
                        ticks: {
                           callback: function(value, index, total) {
                              if (parseInt(value) >= 1000) {
                                 return 'Rp. ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                              } else {
                                 return 'Rp. ' + value;
                              }
                           }
                        }
                      }]
                    }
                }
            });
        }
    });


    $.ajax({
        type:'POST',
        url:'api/view.api.php?func=dasboard-pelanggan',
        dataType: "json",
        success:function(data){
            var date = [];
            var jumlah = [];

            for (var i in data) {
                date.push(dateformat[i]);
                jumlah.push(data[i].jumlah);
            }
            var ctxL = document.getElementById("chartpelanggan").getContext('2d');
            var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                            label: "",
                            data: jumlah,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.5)',
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, .9)',
                            ],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    aspectRatio: 3,
                }
            });
        }
    });

    $.ajax({
        type:'POST',
        url:'api/view.api.php?func=dasboard-itemsold',
        dataType: "json",
        success:function(data){
            var date = [];
            var jumlah = [];

            for (var i in data) {
                date.push(dateformat[i]);
                jumlah.push(data[i].jumlah);
            }
            var ctxL = document.getElementById("chartitem").getContext('2d');
            var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                            label: "",
                            data: jumlah,
                            backgroundColor: [
                                'rgba(255, 159, 64, 0.5)',
                            ],
                            borderColor: [
                                'rgba(255, 159, 64, .9)',
                            ],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    aspectRatio: 3,
                }
            });
        }
    });
}
*/
</script>