<!-------------- Modal stok -------------->

<div class="modal fade" id="modalstok" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Tambah Stok</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-stok">
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama" disabled>
              <label for="defaultForm-nama">Nama stok</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-jumlah" class="form-control validate mb-3" name="ip-jumlah">
              <label for="defaultForm-jumlah">Jumlah</label>
            </div>
            <div class="md-form" id="md-form-ket">
              <input type="text" id="defaultForm-ket" class="form-control validate mb-3" name="ip-ket">
              <label for="defaultForm-ket">Ket Dikurangi</label>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary" id="submit-stok" data-dismiss="modal" aria-label="Close">Proses</button>
          <button class="btn btn-primary" id="update-stok" data-dismiss="modal" aria-label="Close" disabled="true">Proses</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-------------- End modal stok -------------->





  <script type="text/javascript">
    $(document).ready(function(){
      $( "#defaultForm-ket" ).change(function() {
        if($(this).val()!='') {
          $('#update-stok').removeAttr("disabled");
        } else {
          $('#update-stok').attr("disabled","true");
        }
      });
      $("#submit-stok").click(function(){
        var data = $('#modalstok .form-stok').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/stok.ctrl.php?ket=submit-stok",
          data: data,
          success: function() {
            console.log("sukses")
            $('#table-stok').DataTable().ajax.reload();
            $("#modalstok #defaultForm-nama").val('');
            $("#modalstok #defaultForm-jumlah").val('');
            $("#modalstok #defaultForm-ket").val('');
          }
        });
      });   


      $("#update-stok").click(function(){
        var data = $('#modalstok .form-stok').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/stok.ctrl.php?ket=update-stok",
          data: data,
          success: function() {
            console.log("sukses edit")
            $('#table-stok').DataTable().ajax.reload();
            $("#modalstok #defaultForm-nama").val('');
            $("#modalstok #defaultForm-jumlah").val('');
            $("#modalstok #defaultForm-ket").val('');
          }
        });
      }); 
      
    });
  </script> 