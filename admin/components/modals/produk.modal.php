<?php $con = mysqli_connect("localhost","root","","salon_kecantikan"); ?>

<!-------------- Modal tambah produk -------------->

<div class="modal fade" id="modalproduk" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Tambah Produk</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <form method="post" class="form-produk">
          <input type="hidden" id="defaultForm-id" name="ip-id">
          <div class="md-form mb-0">
            <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
            <label for="defaultForm-nama">Nama Produk</label>
          </div>
          <div class="md-form mb-0">
              <select class="mdb-select md-form" id="defaultForm-kategori" name="ip-kategori">
                  <option value="" disabled selected>Pilih Kategori</option>
              <?php
                  $sql="SELECT * from kategori";
                  $result=mysqli_query($con,$sql);
                  while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
                    /*
                      if ($data['kategori_id']==$data1['kategori_id']) {
                          $select="selected";
                      } else {
                          $select="";
                      }
                      */
                      echo "<option value='$data1[kategori_id]'>$data1[kategori_nama]</option>";
                  }
              ?>
              </select>
          </div>
          <input type="hidden" id="defaultForm-beli" class="form-control validate mb-3" name="ip-beli" value="0">
          <!--
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-beli" class="form-control validate mb-3" name="ip-beli">
            <label for="defaultForm-beli">Harga Beli</label>
          </div>
          -->
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-jual" class="form-control validate mb-3" name="ip-jual">
            <label for="defaultForm-jual">Harga Jual</label>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-diskon" class="form-control validate mb-3" name="ip-diskon">
            <label for="defaultForm-diskon">Diskon (%)</label>
          </div>
          <div class="md-form mb-0 mt-0 hidden">
            <input type="text" id="defaultForm-komisi" class="form-control validate mb-3" name="ip-komisi">
            <label for="defaultForm-komisi">Komisi</label>
          </div>
          <div class="md-form mb-0 mt-0 hidden">
            <input type="text" id="defaultForm-komisi-dokter" class="form-control validate mb-3" name="ip-komisi-dokter">
            <label for="defaultForm-komisi-dokter">Komisi Dokter</label>
          </div>
          <div class="md-form mb-0 mt-0">
              <select class="mdb-select md-form" id="defaultForm-setstok" name="ip-setstok">
                  <option value="" disabled selected>Set Stok</option>
                  <option value="0">Tidak</option>
                  <option value="1">Ya</option>
              </select>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-stok" class="form-control validate mb-3" name="ip-stok">
            <label for="defaultForm-stok">Stok Awal</label>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-batas-stok" class="form-control validate mb-3" name="ip-batas-stok">
            <label for="defaultForm-batas-stok">Batas Stok</label>
          </div>
          <div class="md-form mb-0 mt-0">
              <select class="mdb-select md-form" id="defaultForm-disable" name="ip-disable">
                  <option value="" disabled selected>Set Disable</option>
                  <option value="0">Tidak</option>
                  <option value="1">Ya</option>
              </select>
          </div>
          <div class="md-form mb-0">
            <div class="file-field">
              <div class="btn btn-primary btn-sm float-left">
                <span>Choose file</span>
                <input type="file" name="ip-image" id="image">
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" placeholder="Upload Image" name="ip-textimage" id="textimage">
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-primary" id="submit-produk" data-dismiss="modal" aria-label="Close">Proses</button>
        <button class="btn btn-primary" id="update-produk" data-dismiss="modal" aria-label="Close">Edit</button>
      </div>
    </div>
  </div>
</div>

<!-------------- End modal tambah produk -------------->



<!-------------- Modal edit produk --------------
<div class="modal fade" id="modaleditproduk" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Edit Produk</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <form method="post" class="form-produk-update">
          <input type="hidden" id="defaultForm-id" name="ip-id">
          <div class="md-form mb-0">
            <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
            <label for="defaultForm-nama">Nama Produk</label>
          </div>
          <div class="md-form mb-0">
              <select class="mdb-select md-form" id="defaultForm-kategori" name="ip-kategori">
                  <option value="" disabled selected>Pilih Kategori</option>
              <?php
                  $sql="SELECT * from kategori";
                  $result=mysqli_query($con,$sql);
                  while ($data1=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
                    /*
                      if ($data['kategori_id']==$data1['kategori_id']) {
                          $select="selected";
                      } else {
                          $select="";
                      }
                      */
                      echo "<option value='$data1[kategori_id]'>$data1[kategori_nama]</option>";
                  }
              ?>
              </select>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-beli" class="form-control validate mb-3" name="ip-beli">
            <label for="defaultForm-beli">Harga Beli</label>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-jual" class="form-control validate mb-3" name="ip-jual">
            <label for="defaultForm-jual">Harga Jual</label>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-jual-online" class="form-control validate mb-3" name="ip-jual-online">
            <label for="defaultForm-jual-online">Harga Jual Online</label>
          </div>
          <div class="md-form mb-0 mt-0">
              <select class="mdb-select md-form" id="defaultForm-setstok" name="ip-setstok">
                  <option value="" disabled selected>Set Stok</option>
                  <option value="0">Tidak</option>
                  <option value="1">Ya</option>
              </select>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-stok" class="form-control validate mb-3" name="ip-stok">
            <label for="defaultForm-stok">Stok Awal</label>
          </div>
          <div class="md-form mb-0 mt-0">
            <input type="text" id="defaultForm-batas-stok" class="form-control validate mb-3" name="ip-batas-stok">
            <label for="defaultForm-batas-stok">Batas Stok</label>
          </div>

          <div class="md-form mb-0 mt-0">
              <select class="mdb-select md-form" id="defaultForm-disable" name="ip-disable">
                  <option value="" disabled selected>Set Disable</option>
                  <option value="0">Tidak</option>
                  <option value="1">Ya</option>
              </select>
          </div>
        </form>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-primary" id="update-produk" data-dismiss="modal" aria-label="Close">Proses</button>
      </div>
    </div>
  </div>
</div>


-------------- End modal edit produk -------------->



  <script type="text/javascript">
    $(document).ready(function(){

      $('.mdb-select').materialSelect();

      $("#submit-produk").click(function(){
        var data = new FormData();
        data.append('ip-id', $("#defaultForm-id").val());
        data.append('ip-nama', $("#defaultForm-nama").val());
        data.append('ip-kategori', $("#defaultForm-kategori").val());
        data.append('ip-beli', $("#defaultForm-beli").val());
        data.append('ip-jual', $("#defaultForm-jual").val());
        data.append('ip-diskon', $("#defaultForm-diskon").val());
        data.append('ip-komisi', $("#defaultForm-komisi").val());
        data.append('ip-komisi-dokter', $("#defaultForm-komisi-dokter").val());
        data.append('ip-setstok', $("#defaultForm-setstok").val());
        data.append('ip-stok', $("#defaultForm-stok").val());
        data.append('ip-batas-stok', $("#defaultForm-batas-stok").val());
        data.append('ip-disable', $("#defaultForm-disable").val());
        data.append('inputfile', $("#image")[0].files[0]);

        console.log(data);

        $.ajax({
          type: 'POST',
          url: "controllers/produk.ctrl.php?ket=submit-produk",
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function() {
            console.log("sukses")
            $('#example').DataTable().ajax.reload();
          }
        });
      });   


      $("#update-produk").click(function(){
        
        var data = new FormData();
        data.append('ip-id', $("#defaultForm-id").val());
        data.append('ip-nama', $("#defaultForm-nama").val());
        data.append('ip-kategori', $("#defaultForm-kategori").val());
        data.append('ip-beli', $("#defaultForm-beli").val());
        data.append('ip-jual', $("#defaultForm-jual").val());
        data.append('ip-diskon', $("#defaultForm-diskon").val());
        data.append('ip-komisi', $("#defaultForm-komisi").val());
        data.append('ip-komisi-dokter', $("#defaultForm-komisi-dokter").val());
        data.append('ip-setstok', $("#defaultForm-setstok").val());
        data.append('ip-stok', $("#defaultForm-stok").val());
        data.append('ip-batas-stok', $("#defaultForm-batas-stok").val());
        data.append('ip-disable', $("#defaultForm-disable").val());
        data.append('inputfile', $("#image")[0].files[0]);

        console.log(data);

        $.ajax({
          type: 'POST',
          url: "controllers/produk.ctrl.php?ket=update-produk",
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          success: function(data) {
            console.log("sukses edit")
            console.log(data)
            $('#example').DataTable().ajax.reload();
          }
        });
      }); 
      
    });
  </script> 