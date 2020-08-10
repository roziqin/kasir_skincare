<!-------------- Modal member -------------->

<div class="modal fade" id="modalmember" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Tambah Member</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-member">
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <input type="hidden" id="defaultForm-no" name="ip-no">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-rm" class="form-control validate mb-3" name="ip-rm">
              <label for="defaultForm-rm">No RM</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama</label>
            </div>
            <div class="md-form mb-0">
              <textarea id="defaultForm-alamat" class="md-textarea form-control" rows="3" name="ip-alamat"></textarea>
              <label for="defaultForm-alamat">Alamat</label>
            </div>
            <div class="md-form mb-0">
              <input placeholder="Tanggal Lahir" type="text" id="defaultForm-tgl-lahir" class="form-control datepicker" name="ip-tgl-lahir">
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-usia" class="form-control validate mb-3" name="ip-usia">
              <label for="defaultForm-usia">Usia</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-hp" class="form-control validate mb-3" name="ip-hp">
              <label for="defaultForm-hp">No. HP</label>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="defaultForm-gender" name="ip-gender">
                    <option value="" disabled selected>Pilih Gender</option>
                    <option value="Perempuan">Perempuan</option>
                    <option value="Laki-laki">Laki-laki</option>
                </select>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <a class="btn btn-primary" id="submit-member">Proses</a>
          <a class="btn btn-primary" id="update-member">Edit</a>
        </div>
      </form>
    </div>
  </div>
</div>

<!-------------- End modal member -------------->




  <script type="text/javascript">
    $(document).ready(function(){

      //$('#defaultForm-gender').materialSelect();

      $('.datepicker').pickadate({
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        showMonthsShort: true
      })
      $("#submit-member").click(function(e){
        e.preventDefault();
        var id = $("#modalmember #defaultForm-id").val();
        var rm = $("#modalmember #defaultForm-rm").val();
        $.ajax({
          type: 'POST',
          dataType: "json",
          url: "controllers/member.ctrl.php?ket=cek-rm-member&rm="+rm+"&id="+id+"",
          success: function(data) {
            if (data[0]=="kosong") {
              var data = $('#modalmember .form-member').serialize();
              
              $.ajax({
                type: 'POST',
                url: "controllers/member.ctrl.php?ket=submit-member",
                data: data,
                success: function() {
                  
                  console.log("sukses edit")
                  $('#table-member').DataTable().ajax.reload();
                  $("#modalmember #defaultForm-id").val('');
                  $("#modalmember #defaultForm-no").val('');
                  $("#modalmember #defaultForm-rm").val('');
                  $("#modalmember #defaultForm-nama").val('');
                  $("#modalmember #defaultForm-alamat").val('');
                  $("#modalmember #defaultForm-hp").val('');
                  $("#modalmember #defaultForm-usia").val('');
                  $("#modalmember #defaultForm-gender").val('');
                  $("#modalmember #defaultForm-tgl-lahir").val('');
                  $('#modalmember').modal('toggle');    
                  $('.container__load').load('components/content/member.content.php');
                }
              });
              
            } else {
              alert("No. Rm Sudah dipakai, gunakan No. yang lain");

            }

          }
        });
      });   


      $("#update-member").click(function(e){
        e.preventDefault();
        var id = $("#modalmember #defaultForm-id").val();
        var rm = $("#modalmember #defaultForm-rm").val();
        $.ajax({
          type: 'POST',
          dataType: "json",
          url: "controllers/member.ctrl.php?ket=cek-rm-member&rm="+rm+"&id="+id+"",
          success: function(data) {
            if (data[0]=="kosong") {
              var data = $('#modalmember .form-member').serialize();
              
              $.ajax({
                type: 'POST',
                url: "controllers/member.ctrl.php?ket=update-member",
                data: data,
                success: function() {
                  
                  console.log("sukses edit")
                  $('#table-member').DataTable().ajax.reload();
                  $("#modalmember #defaultForm-id").val('');
                  $("#modalmember #defaultForm-no").val('');
                  $("#modalmember #defaultForm-rm").val('');
                  $("#modalmember #defaultForm-nama").val('');
                  $("#modalmember #defaultForm-alamat").val('');
                  $("#modalmember #defaultForm-hp").val('');
                  $("#modalmember #defaultForm-usia").val('');
                  $("#modalmember #defaultForm-gender").val('');
                  $("#modalmember #defaultForm-tgl-lahir").val('');
                  $('#modalmember').modal('toggle');    
                  $('.container__load').load('components/content/member.content.php');
                }
              });
              
            } else {
              alert("No. Rm Sudah dipakai, gunakan No. yang lain");

            }

          }
        });
        
        
      
        /*
        var data = $('#modalmember .form-member').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/member.ctrl.php?ket=update-member",
          data: data,
          success: function() {
            console.log(data[0]);
            
            if (data[0]=="ok") {
              console.log("sukses edit")
              $('#table-member').DataTable().ajax.reload();
              $("#modalmember #defaultForm-id").val('');
              $("#modalmember #defaultForm-no").val('');
              $("#modalmember #defaultForm-rm").val('');
              $("#modalmember #defaultForm-nama").val('');
              $("#modalmember #defaultForm-alamat").val('');
              $("#modalmember #defaultForm-hp").val('');
              $("#modalmember #defaultForm-usia").val('');
              $("#modalmember #defaultForm-gender").val('');
              $("#modalmember #defaultForm-tgl-lahir").val('');
              $('#modalmember').modal('toggle');
            } else {
              alert("No. Rm Sudah dipakai, gunakan No. yang lain");
              return false;
            }
            
            
          }
        });
        */
      }); 
      
    });
  </script> 