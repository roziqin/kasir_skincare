<!-------------- Modal Transaksi -------------->

<div class="modal fade" id="modaldiscount" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h2 class="modal-title w-100 font-weight-bold" id="totaltransaksi"></h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="row">
          <div class="col-md-6">
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="jenisdiskon" name="jenisdiskon">
                    <option value="" disabled selected>Pilih Diskon/Potongan</option>
                    <option value="Diskon">Diskon</option>
                    <option value="Potongan">Potongan</option>
                </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input type="text" id="jumlahdiskon" class="form-control validate mb-3" name="jumlahdiskon">
              <label for="jumlahdiskon">Jumlah</label>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-primary" id="submit-discount" data-dismiss="modal" aria-label="Close">Proses</button>
      </div>
    </div>
  </div>
</div>

<!-------------- End modal transaksi -------------->





  <script type="text/javascript">
      
      $('.mdb-select').materialSelect();
      $('#price').priceFormat({ prefix: '', centsSeparator: ',', thousandsSeparator: '.', centsLimit: 0 });

      $("#submit-discount").click(function(e){
        e.preventDefault();

        var jmldiskon = 0;
        var subtotal = $('#defaultForm-subtotal').val(); 
        if ($("#jenisdiskon").val()=='Potongan') {
          jmldiskon = $("#jumlahdiskon").val();
        } else if ($("#jenisdiskon").val()=='Diskon') {
          jmldiskon = $("#defaultForm-subtotal").val()*$("#jumlahdiskon").val()/100
        }
        $("#defaultForm-jenisdiskon").val($("#jenisdiskon").val());
        $("#defaultForm-jumlahdiskon").val(jmldiskon);

        $('.text-jenisdiskon').empty();
        $('.text-jenisdiskon').append($("#jenisdiskon").val());

        $('.text-jumlahdiskon').empty();
        $('.text-jumlahdiskon').append(formatRupiah(jmldiskon.toString(), 'Rp. '));

        $("#jumlahdiskon").val('');
        $("#jenisdiskon").val('');

        if ($('#defaultForm-ordertype').val()=='online') {
          var pajakjml = $('#ip-pajakonline').val();  
        } else {
          var pajakjml = $('#ip-pajakresto').val();
        }

        var tax = parseInt(pajakjml)*(subtotal-jmldiskon)*0.1;
        if ($('#ip-pajakpembulatan').val()==1) {
          tax = pembulatan(tax);
        }
        $('#pajak').empty();
        $('#pajak').append(formatRupiah(tax.toString(), 'Rp. '))

        var taxservice = 0;
        if ($('#ip-pajakservice').val()!='') {
          taxservice = parseInt($('#ip-pajakservice').val())*(subtotal-jmldiskon)/100;
          
          if ($('#ip-pajakpembulatan').val()==1) {
            taxservice = pembulatan(taxservice);
          }
              
          $('#pajakservice').empty();
          $('#pajakservice').append(formatRupiah(taxservice.toString(), 'Rp. '))
        }

        var total = subtotal-jmldiskon+tax+taxservice;

        $("#defaultForm-tax").val(tax);
        $("#defaultForm-servicetax").val(taxservice);
        $("#defaultForm-total").val(total);

        $('#total').empty();
        $('#total').append(formatRupiah(total.toString(), 'Rp. '));
      }); 
    
  </script> 