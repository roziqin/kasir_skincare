
	<div class="container-fluid p-0">
		<div class="row header-content pt-3 pb-3 info-color text-white">
			<div class="col-md-12">
				<h2>Dashboard</h2>
			</div>
		</div>
	</div>
	<main class="pt-4 dashboard pl-3 pr-3 mr-0">
		<div class="main-wrapper">
		    <div class="container-fluid">
				<div class="row mt-2 fadeIn animated">

					<!--Grid column-->
					<div class="col-md-7">
						<h5>Total Omset bulan ini</h5>
						<h3 id="totomset" class="display-4"></h3>
						<canvas id="lineChart" ></canvas>

					</div>
					<div class="col-md-5" id="box-right-dashboard">
						<!-- Card -->
						<div class="card testimonial-card">
							<!-- Content -->
							<div class="card-body">
							    <!-- Name -->
							    <h4 class="card-title">Pelanggan</h4>
							    <hr>    
								<canvas id="chartpelanggan" ></canvas>
						  	</div>

						</div>
						<!-- Card -->

						<!-- Card -->
						<div class="card testimonial-card mt-3">
							<!-- Content -->
							<div class="card-body">
							    <!-- Name -->
							    <h4 class="card-title">Total Item Sold</h4>
							    <hr>    
								<canvas id="chartitem" ></canvas>
						  	</div>

						</div>
						<!-- Card -->
					</div>
					<!--Grid column-->

				</div>
		    </div>
		</div>
	</main>

	<?php include 'partials/footer.php'; ?>