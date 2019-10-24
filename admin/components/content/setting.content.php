<form method="post" class="form-setting">
  <div class="modal-body mx-3">
      <input type="hidden" id="defaultForm-id" name="ip-id">
      <div class="row">
          <div class="col-md-8">
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-nama" class="form-control validate mb-3" name="ip-nama">
              <label for="defaultForm-nama">Nama Perusahaan</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-alamat" class="form-control validate mb-3" name="ip-alamat">
              <label for="defaultForm-alamat">Alamat Perusahaan</label>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-telp" class="form-control validate mb-3" name="ip-telp">
              <label for="defaultForm-telp">Telp Perusahaan</label>
            </div>
            <div class="md-form mb-0">
              <div class="file-field">
                <div class="btn btn-primary btn-sm float-left">
                  <span>Choose file</span>
                  <input type="file" name="ip-logo" id="logo">
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" placeholder="Upload logo" name="ip-textlogo" id="textlogo">
                </div>
              </div>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="pajak10" name="ip-pajak">
                    <option value="" disabled selected>Set Pajak 10%</option>
                    <option value="0">Tidak</option>
                    <option value="1">Ya</option>
                </select>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="pajakonline" name="ip-pajak-online">
                    <option value="" disabled selected>Set Pajak online 10%</option>
                    <option value="0">Tidak</option>
                    <option value="1">Ya</option>
                </select>
            </div>
            <div class="md-form mb-0">
              <input type="text" id="defaultForm-service" class="form-control validate mb-3" name="ip-service">
              <label for="defaultForm-service">Pajak Service %</label>
            </div>
            <div class="md-form mb-0">
                <select class="mdb-select md-form" id="pajakpembulatan" name="ip-pajak-pembulatan">
                    <option value="" disabled selected>Set Pembulatan Pajak</option>
                    <option value="0">Tidak</option>
                    <option value="1">Ya</option>
                </select>
            </div>
            <!--
            <div class="row">
              <div class="col-md-3">
                <div class="md-form mb-0">
                    <select class="mdb-select md-form" id="printchecklist" name="ip-print-checklist">
                        <option value="" disabled selected>Print Checklist</option>
                        <option value="0">Tidak</option>
                        <option value="1">Ya</option>
                    </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="md-form mb-0">
                    <select class="mdb-select md-form" id="printkitchen" name="ip-print-kitchen">
                        <option value="" disabled selected>Print Kitchen</option>
                        <option value="0">Tidak</option>
                        <option value="1">Ya</option>
                    </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="md-form mb-0">
                    <select class="mdb-select md-form" id="printsnack" name="ip-print-snack">
                        <option value="" disabled selected>Print Snack</option>
                        <option value="0">Tidak</option>
                        <option value="1">Ya</option>
                    </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="md-form mb-0">
                    <select class="mdb-select md-form" id="printbar" name="ip-print-bar">
                        <option value="" disabled selected>Print Bar</option>
                        <option value="0">Tidak</option>
                        <option value="1">Ya</option>
                    </select>
                </div>
              </div>
            </div>
            -->
          </div>
          <div class="col-md-4">
            <img src="" class="img-fluid img-logo" alt="Responsive image">
          </div>
      </div>
  </div>
  <div class="modal-footer d-flex justify-content-center">
    <button class="btn btn-primary" id="update-setting" data-dismiss="modal" aria-label="Close">Edit</button>
  </div>
</form>

<script type="text/javascript">
  $(document).ready(function(){
      $('.mdb-select').materialSelect();
      $.ajax({
          type:'POST',
          url:'api/view.api.php?func=editsetting',
          dataType: "json",
          success:function(data){
              
              $("label").addClass("active");
              $("#defaultForm-nama").val(data[0].pengaturan_nama);
              $("#defaultForm-alamat").val(data[0].pengaturan_alamat);
              $("#defaultForm-telp").val(data[0].pengaturan_telp);
              $(".img-logo").attr("src", "../assets/img/"+data[0].pengaturan_logo);
              $("#defaultForm-service").val(data[0].pengaturan_service);
              $("#pajak10").val(data[0].pengaturan_pajak);
              $("#pajakonline").val(data[0].pengaturan_pajak_online);
              $("#pajakpembulatan").val(data[0].pengaturan_pajak_pembulatan);
              $("#printchecklist").val(data[0].pengaturan_print_checklist);
              $("#printkitchen").val(data[0].pengaturan_print_kitchen);
              $("#printsnack").val(data[0].pengaturan_print_snack);
              $("#printbar").val(data[0].pengaturan_print_bar);

          }
      });

      $("#update-setting").click(function(e){
        e.preventDefault();
        //var data = $('.form-setting').serialize();
        var data = new FormData();
        data.append('ip-nama', $("#defaultForm-nama").val());
        data.append('ip-alamat', $("#defaultForm-alamat").val());
        data.append('ip-telp', $("#defaultForm-telp").val());
        data.append('ip-service', $("#defaultForm-service").val());
        data.append('ip-textlogo', $("#textlogo").val());
        data.append('ip-pajak', $("#pajak10").val());
        data.append('ip-pajakonline', $("#pajakonline").val());
        data.append('ip-pajak-pembulatan', $("#pajakpembulatan").val());
        data.append('ip-print-checklist', $("#printchecklist").val());
        data.append('ip-print-kitchen', $("#printkitchen").val());
        data.append('ip-print-snack', $("#printsnack").val());
        data.append('ip-print-bar', $("#printbar").val());
        data.append('inputfile', $("#logo")[0].files[0]);
        console.log(data);
     
        $.ajax({
          type: 'POST',
          url: "controllers/setting.ctrl.php?ket=update-setting",
          data: data,
          cache: false,
        processData: false,
        contentType: false,
          success: function(data) {
            console.log(data)
            if (data!="noupload  ") {
              $(".img-logo").attr("src", "../assets/img/"+data);
            }
            alert("Data berhasil dirubah");
          }
        });
        
      }); 
  })
</script>