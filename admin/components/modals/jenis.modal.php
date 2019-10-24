<!-------------- Modal jenis -------------->

<div class="modal fade" id="modaltambahjenis" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Tambah Jenis</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-jenis">
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama jenis</label>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary" id="submit-jenis" data-dismiss="modal" aria-label="Close">Proses</button>
          <button class="btn btn-primary" id="update-jenis" data-dismiss="modal" aria-label="Close">Edit</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-------------- End modal jenis -------------->




  <script type="text/javascript">
    $(document).ready(function(){

      $('.mdb-select').materialSelect();

      $("#submit-jenis").click(function(){
        var data = $('#modaltambahjenis .form-jenis').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/jenis.ctrl.php?ket=submit-jenis",
          data: data,
          success: function() {
            console.log("sukses")
            $('#table-jenis').DataTable().ajax.reload();
            $("#modaltambahjenis #defaultForm-nama").val('');
          }
        });
      });   


      $("#update-jenis").click(function(){
        var data = $('#modaltambahjenis .form-jenis').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/jenis.ctrl.php?ket=update-jenis",
          data: data,
          success: function() {
            console.log("sukses edit")
            $('#table-jenis').DataTable().ajax.reload();
            $("#modaltambahjenis #defaultForm-nama").val('');
          }
        });
      }); 
      
    });
  </script> 