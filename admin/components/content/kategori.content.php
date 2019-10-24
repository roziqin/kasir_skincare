<?php include '../modals/kategori.modal.php'; ?>

    <button class="btn btn-primary btn-tambah-kategori" data-toggle="modal" data-target="#modaltambahkategori">Tambah Kategori <i class="fas fa-box-open ml-1"></i></button>
    <table id="table-kategori" class="table table-striped table-bordered fadeInLeft slow animated" style="width:100%">
        <thead>
            <tr>
                <th>nama</th>
                <th>jenis</th>
                <th></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>nama</th>
                <th>jenis</th>
                <th></th>
            </tr>
        </tfoot>
    </table>



    <script type="text/javascript">
      
    $(document).ready(function() {
    	
      	$('.btn-tambah-kategori').on('click',function(){
            $("#modaltambahkategori #defaultForm-nama").val('');
            $("#modaltambahkategori #defaultForm-jenis").val('');
            $("#modaltambahkategori #submit-kategori").removeClass('hidden');
            $("#modaltambahkategori #update-kategori").addClass('hidden');
            $('#modaltambahkategori h4.modal-title').text('Tambah Kategori');
      	});
      	
        $('#table-kategori').DataTable( {
            "processing": true,
            "serverSide": true,
            "ajax": 
            {
                "url": "api/datatable.api.php?ket=kategori", // URL file untuk proses select datanya
                "type": "POST"
            },
            "deferRender": true,
            "columns": [
                { "data": "kategori_nama" },
                { "data": "jenis_nama" },

                { "width": "150px", "render": function(data, type, full){
                   return '<a class="btn-floating btn-sm btn-default mr-2 btn-edit" data-toggle="modal" data-target="#modaltambahkategori" data-id="' + full['kategori_id'] + '" title="Edit"><i class="fas fa-pen"></i></a> <a class="btn-floating btn-sm btn-danger btn-remove" data-id="' + full['kategori_id'] + '" title="Delete"><i class="fas fa-trash"></i></a>';
                }
                },
            ],
            "initComplete": function( settings, json ) {
              $('.btn-edit').on('click',function(){
                  var kategori_id = $(this).data('id');
                  console.log(kategori_id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editkategori',
                      dataType: "json",
                      data:{kategori_id:kategori_id},
                      success:function(data){
			            $("#modaltambahkategori #update-kategori").removeClass('hidden');
			            $("#modaltambahkategori #submit-kategori").addClass('hidden');
			            $('#modaltambahkategori h4.modal-title').text('Edit Kategori');
                          $("#modaltambahkategori label").addClass("active");
                          $("#modaltambahkategori #defaultForm-id").val(data[0].kategori_id);
                          $("#modaltambahkategori #defaultForm-nama").val(data[0].kategori_nama);
                          $("#modaltambahkategori #defaultForm-jenis").val(data[0].kategori_jenis);

                      }
                  });
                  
              });
            },
            "drawCallback": function( settings ) {
              $('.btn-edit').on('click',function(){
                  var kategori_id = $(this).data('id');
                  console.log(kategori_id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editkategori',
                      dataType: "json",
                      data:{kategori_id:kategori_id},
                      success:function(data){
			            $("#modaltambahkategori #update-kategori").removeClass('hidden');
			            $("#modaltambahkategori #submit-kategori").addClass('hidden');
			            $('#modaltambahkategori h4.modal-title').text('Edit Kategori');
                          $("#modaltambahkategori label").addClass("active");
                          $("#modaltambahkategori #defaultForm-id").val(data[0].kategori_id);
                          $("#modaltambahkategori #defaultForm-nama").val(data[0].kategori_nama);
                          $("#modaltambahkategori #defaultForm-jenis").val(data[0].kategori_jenis);

                      }
                  });
              });

              $('.btn-remove').on('click', function(){
                  var kategori_id = $(this).data('id');
                  $.confirm({
                      title: 'Konfirmasi Hapus Kategori',
                      content: 'Apakah yakin menghapus kateogri ini?',
                      buttons: {
                          confirm: {
                              text: 'Ya',
                              btnClass: 'col-md-6 btn btn-primary',
                              action: function(){
                                  console.log(kategori_id);
                                  
                                  $.ajax({
                                    type: 'POST',
                                    url: "controllers/kategori.ctrl.php?ket=remove-kategori",
                                    dataType: "json",
                                    data:{kategori_id:kategori_id},
                                    success: function(data) {
                                      if (data[0]=="ok") {
                                        $('#table-kategori').DataTable().ajax.reload();
                                      } else {
                                        alert('Produk gagal dihapus')
                                      }
                                    }
                                  });
                                  
                              }
                          },
                          cancel: {
                              text: 'Tidak',
                              btnClass: 'col-md-6 btn btn-danger text-white',
                              action: function(){
                                  console.log("tidak")
                                 
                              }
                              
                          }
                      }
                  });
              });
              
            }
        } );

      
    } );
    </script>