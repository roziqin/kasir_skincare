<script type="text/javascript" src="../assets/js/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../assets/js/agile-min.js"></script>
<script type="text/javascript" src="../assets/js/modules/scrolling-navbar.js"></script>
<script type="text/javascript" src="../assets/js/modules/chart.js"></script>
<script type="text/javascript" src="../assets/js/compiled.js?asu"></script>
<script type="text/javascript" src="../assets/js/moments.js?aa"></script>
<script type="text/javascript" src="../assets/js/ajax.js?aa"></script>
<script type="text/javascript" src="../assets/js/addons/datatables.min.js"></script>
<script type="text/javascript" src="../assets/js/jquery-confirm.min.js"></script>
<script type="text/javascript" src="../assets/js/jquery.price_format.2.0.js"></script>
<script type="text/javascript" src="../assets/js/bootstrap-datepicker.min.js"></script>


<script type="text/javascript"> 
  /* Fungsi formatRupiah */
  function formatRupiah(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split       = number_string.split(','),
    sisa        = split[0].length % 3,
    rupiah        = split[0].substr(0, sisa),
    ribuan        = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
  }

  function formatCurrency(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split       = number_string.split(','),
    sisa        = split[0].length % 3,
    rupiah        = split[0].substr(0, sisa),
    ribuan        = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
  }
	// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);
new WOW().init();
$(document).ready(function(){
  $("#toggle").click(function() {
    if ($("#slide-out").hasClass("slim")==true) {
      $(".mdb-skin-custom").addClass("nav-slim")
    } else {
      $(".mdb-skin-custom").removeClass("nav-slim")
    }

  })
	var pageURL = window.location.href;
	var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
	
	$(function() {
    $('[data-toggle="tooltip"]').tooltip()
		if ($('a[href~="' + lastURLSegment + '"]').parent().parent().attr('class')=='sub-menu') {
			$('a[href~="' + lastURLSegment + '"]').addClass('active');
			$('a[href~="' + lastURLSegment + '"]').parent().parent().parent().parent().addClass('active');
			$('a[href~="' + lastURLSegment + '"]').parent().parent().parent().parent().children('a.collapsible-header').addClass('active');
			
			//console.log(lastURLSegment)
		}
		
		if ($('a[href~="' + lastURLSegment + '"]').parent().attr('class')=='menu-item') {
			$('a[href~="' + lastURLSegment + '"]').addClass('active');
			$('a[href~="' + lastURLSegment + '"]').parent().addClass('active');
		}
	});
});

</script>
