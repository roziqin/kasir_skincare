
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
					<div class="col-md-6">
						<h5>Total Omset bulan ini</h5>
						<h3 id="totomset" class="display-4"></h3>
						<canvas id="lineChart" ></canvas>

					</div>
					<div class="col-md-6">
						<div class="row" id="box-right-dashboard"></div>
					</div>
					<!--Grid column-->

				</div>
		    </div>
		</div>
	</main>

	<?php include 'partials/footer.php'; ?>