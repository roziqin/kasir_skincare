<!-------------- Modal member -------------->

<div class="modal fade" id="historymember" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog custom" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">History Member</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="row">
          <div class="col-md-6 col-md-offset-0">
            <p class="text-nama"></p>
          </div>
          <div class="col-md-6 col-md-offset-0">
            <p class="text-no"></p>
          </div>
          <div class="col-md-6 col-md-offset-0">
            <p class="text-tgl-lahir"></p>
          </div>
          <div class="col-md-6 col-md-offset-0">
            <p class="text-usia"></p>
          </div>
          <div class="col-md-6 col-md-offset-0">
            <p class="text-gender"></p>
          </div>
          <div class="col-md-6 col-md-offset-0">
            <p class="text-hp"></p>
          </div>
          <div class="col-md-12 col-md-offset-0">
            <p class="text-alamat"></p>
          </div>
        </div>
        <table id="table-historymember" class="table table-striped table-bordered fadeInLeft slow animated" style="width:100%">
            <thead>
                <tr>
                    <th>tanggal</th>
                    <th>nama produk/treatment</th>
                    <th>kategori</th>
                    <th>jenis</th>
                </tr>
            </thead>
        </table>
      </div>
    </div>
  </div>
</div>

<!-------------- End modal member -------------->




  <script type="text/javascript">
    $(document).ready(function(){

      $('.mdb-select').materialSelect();

      $('.datepicker').pickadate({
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        showMonthsShort: true
      }) 
      
    });
  </script> 