<?php $con = mysqli_connect("localhost","root","","salon_kecantikan"); ?>
<!-------------- Modal tambah kategori -------------->

<div class="modal fade" id="modaluser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Tambah user</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-user">
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama Display</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-user" class="form-control validate mb-3" name="ip-user">
              <label for="defaultForm-user">Username</label>
            </div>
            <div class="md-form mb-0">
              <input type="password" id="defaultForm-password" class="form-control validate mb-3" name="ip-password">
              <label for="defaultForm-password">Password</label>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="defaultForm-roles" name="ip-roles">
                    <option value="" disabled selected>Pilih Role</option>
                <?php
                  $sql="SELECT * from roles";
                  $result=mysqli_query($con,$sql);
                  while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
                    /*
                      if ($data['kategori_id']==$data1['kategori_id']) {
                          $select="selected";
                      } else {
                          $select="";
                      }
                      */
                      echo "<option value='$data1[roles_id]'>$data1[display_name]</option>";
                  }
                ?>
                </select>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary" id="submit-user" data-dismiss="modal" aria-label="Close">Proses</button>
          <button class="btn btn-primary" id="update-user" data-dismiss="modal" aria-label="Close">Edit</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-------------- End modal tambah user -------------->



<!-------------- Modal permission user -------------->
<div class="modal fade" id="modalpermission" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Permission user</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-permission-user">
        
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama Display</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-user" class="form-control validate mb-3" name="ip-user">
              <label for="defaultForm-nama">Username</label>
            </div>
            <div class="md-form mb-0">
              <input type="password" id="defaultForm-password" class="form-control validate mb-3" name="ip-password">
              <label for="defaultForm-nama">Password</label>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="defaultForm-roles" name="ip-roles">
                    <option value="" disabled selected>Pilih Role</option>
                <?php
                  $sql="SELECT * from roles";
                  $result=mysqli_query($con,$sql);
                  while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
                    /*
                      if ($data['kategori_id']==$data1['kategori_id']) {
                          $select="selected";
                      } else {
                          $select="";
                      }
                      */
                      echo "<option value='$data1[roles_id]'>$data1[display_name]</option>";
                  }
                ?>
                </select>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary" id="update-user" data-dismiss="modal" aria-label="Close">Proses</button>
        </div>
      </form>
    </div>
  </div>
</div>


<!-------------- End modal edit user -------------->



  <script type="text/javascript">
    $(document).ready(function(){

      $('.mdb-select').materialSelect();

      $("#submit-user").click(function(){
        var data = $('#modaluser .form-user').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/user.ctrl.php?ket=submit-user",
          data: data,
          success: function() {
            console.log("sukses")
            $('#table-user').DataTable().ajax.reload();
            $("#modaluser #defaultForm-nama").val('');
            $("#modaluser #defaultForm-jenis").val('');
          }
        });
      });   


      $("#update-user").click(function(){
        var data = $('#modaluser .form-user').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/user.ctrl.php?ket=update-user",
          data: data,
          success: function() {
            console.log("sukses edit")
            $('#table-user').DataTable().ajax.reload();
            $("#modaluser #defaultForm-nama").val('');
            $("#modaluser #defaultForm-jenis").val('');
          }
        });
      }); 
      
    });
  </script> 