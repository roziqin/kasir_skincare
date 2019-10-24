<?php $con = mysqli_connect("localhost","root","","salon_kecantikan"); ?>
<!-------------- Modal tambah kategori -------------->

<div class="modal fade" id="modaltambahkategori" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Tambah Kategori</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-kategori">
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama Kategori</label>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="defaultForm-jenis" name="ip-jenis">
                    <option value="" disabled selected>Pilih Jenis Kategori</option>
                    <?php
                        $sql="SELECT * from jenis";
                        $result=mysqli_query($con,$sql);
                        while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
                            echo "<option value='$data1[jenis_id]'>$data1[jenis_nama]</option>";
                        }
                    ?>
                </select>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary" id="submit-kategori" data-dismiss="modal" aria-label="Close">Proses</button>
          <button class="btn btn-primary" id="update-kategori" data-dismiss="modal" aria-label="Close">Edit</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-------------- End modal tambah kategori -------------->



<!-------------- Modal edit kategori --------------
<div class="modal fade" id="modaleditkategori" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Edit Kategori</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form method="post" class="form-kategori-update">
        <div class="modal-body mx-3">
            <input type="hidden" id="defaultForm-id" name="ip-id">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama kategori</label>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="defaultForm-jenis" name="ip-jenis">
                    <option value="" disabled selected>Pilih Jenis Kategori</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-primary" id="update-kategori" data-dismiss="modal" aria-label="Close">Proses</button>
        </div>
      </form>
    </div>
  </div>
</div>


-------------- End modal edit kategori -------------->



  <script type="text/javascript">
    $(document).ready(function(){

      $('.mdb-select').materialSelect();

      $("#submit-kategori").click(function(){
        var data = $('#modaltambahkategori .form-kategori').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/kategori.ctrl.php?ket=submit-kategori",
          data: data,
          success: function() {
            console.log("sukses")
            $('#table-kategori').DataTable().ajax.reload();
            $("#modaltambahkategori #defaultForm-nama").val('');
            $("#modaltambahkategori #defaultForm-jenis").val('');
          }
        });
      });   


      $("#update-kategori").click(function(){
        var data = $('#modaltambahkategori .form-kategori').serialize();
        $.ajax({
          type: 'POST',
          url: "controllers/kategori.ctrl.php?ket=update-kategori",
          data: data,
          success: function() {
            console.log("sukses edit")
            $('#table-kategori').DataTable().ajax.reload();
            $("#modaltambahkategori #defaultForm-nama").val('');
            $("#modaltambahkategori #defaultForm-jenis").val('');
          }
        });
      }); 
      
    });
  </script> 