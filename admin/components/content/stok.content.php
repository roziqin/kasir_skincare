<?php include '../modals/stok.modal.php'; ?>
    <table id="table-stok" class="table table-striped table-bordered fadeInLeft slow animated" style="width:100%">
        <thead>
            <tr>
                <th>nama</th>
                <th>stok</th>
                <th>set stok</th>
                <th></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>nama</th>
                <th>stok</th>
                <th>set stok</th>
                <th></th>
            </tr>
        </tfoot>
    </table>



    <script type="text/javascript">
      
    $(document).ready(function() {

        $('#table-stok').DataTable( {
            "processing": true,
            "serverSide": true,
            "ajax": 
            {
                "url": "api/datatable.api.php?ket=stok", // URL file untuk proses select datanya
                "type": "POST"
            },
            "deferRender": true,
            "columns": [
                { "data": "barang_nama" },
                { "data": "barang_stok" },
                { "width": "150px", "render": function(data, type, full){

                    if (full['barang_set_stok']==1) {
                     return 'Ya';

                    } else {
                     return 'Tidak';
                    }
                  }
                },
                { "width": "150px", "render": function(data, type, full){

                    if (full['barang_set_stok']==0) {
                     return '<a class="btn-floating btn-sm btn-primary mr-2 btn-tambah disabled" title="Tambah" ><i class="fas fa-plus"></i></a> <a class="btn-floating btn-sm btn-default mr-2 btn-edit disabled" title="Kurang" ><i class="fas fa-minus"></i></a>';

                    } else {
                     return '<a class="btn-floating btn-sm btn-primary mr-2 btn-tambah" data-toggle="modal" data-target="#modalstok" data-id="' + full['barang_id'] + '" title="Tambah"><i class="fas fa-plus"></i></a><a class="btn-floating btn-sm btn-default mr-2 btn-edit" data-toggle="modal" data-target="#modalstok" data-id="' + full['barang_id'] + '" title="Kurang"><i class="fas fa-minus"></i></a>';
                    }
                  }
                },
            ],
            /*
            "initComplete": function( settings, json ) {
              $('.btn-edit').on('click',function(){
                  var stok_id = $(this).data('id');
                  console.log(stok_id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editstok',
                      dataType: "json",
                      data:{stok_id:stok_id},
                      success:function(data){
                        $("#modalstok #update-stok").removeClass('hidden');
                        $("#modalstok #submit-stok").addClass('hidden');
                        $('#modalstok h4.modal-title').text('Edit stok');
                          $("#modalstok label").addClass("active");
                          $("#modalstok #defaultForm-id").val(data[0].stok_id);
                          $("#modalstok #defaultForm-nama").val(data[0].stok_nama);
                          $("#modalstok #defaultForm-jenis").val(data[0].stok_jenis);

                      }
                  });
                  
              });
            },
            */
            "drawCallback": function( settings ) {
              $('.btn-tambah').on('click',function(){
                  var id = $(this).data('id');
                  console.log(id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editstok',
                      dataType: "json",
                      data:{id:id},
                      success:function(data){
                      $("#modalstok #update-stok").addClass('hidden');
                      $("#modalstok #submit-stok").removeClass('hidden');
                      $("#modalstok #md-form-ket").addClass('hidden');
                      $('#modalstok h4.modal-title').text('Tambah stok');
                          $("#modalstok label").addClass("active");
                          $("#modalstok #defaultForm-id").val(data[0].barang_id);
                          $("#modalstok #defaultForm-nama").val(data[0].barang_nama);
                      }
                  });
              });

              $('.btn-edit').on('click',function(){
                  var id = $(this).data('id');
                  console.log(id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editstok',
                      dataType: "json",
                      data:{id:id},
                      success:function(data){
                          $("#modalstok #update-stok").removeClass('hidden');
                          $("#modalstok #submit-stok").addClass('hidden');
                          $("#modalstok #md-form-ket").removeClass('hidden');
                          $("[name='ip-ket']").attr('required',true);
                          $('#modalstok h4.modal-title').text('Kurangi stok');
                          $("#modalstok label").addClass("active");
                          $("#modalstok #defaultForm-id").val(data[0].barang_id);
                          $("#modalstok #defaultForm-nama").val(data[0].barang_nama);
                      }
                  });
              });

             
              
            }
        } );

      
    } );
    </script>