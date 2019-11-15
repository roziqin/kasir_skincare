<?php include '../modals/member.modal.php'; ?>

    <button class="btn btn-primary btn-tambah-member" data-toggle="modal" data-target="#modalmember">Tambah Member <i class="fas fa-box-open ml-1"></i></button>
    <table id="table-member" class="table table-striped table-bordered fadeInLeft slow animated" style="width:100%">
        <thead>
            <tr>
                <th>no member</th>
                <th>nama</th>
                <th>alamat</th>
                <th>tanggal lahir</th>
                <th>no hp</th>
                <th>gender</th>
                <th></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>no member</th>
                <th>nama</th>
                <th>alamat</th>
                <th>tanggal lahir</th>
                <th>no hp</th>
                <th>gender</th>
                <th></th>
            </tr>
        </tfoot>
    </table>



    <script type="text/javascript">
      
    $(document).ready(function() {
        $('.btn-tambah-member').on('click',function(){
            $("#modalmember #defaultForm-id").val('');
            $("#modalmember #defaultForm-nama").val('');
            $("#modalmember #defaultForm-alamat").val('');
            $("#modalmember #defaultForm-hp").val('');
            $("#modalmember #defaultForm-gender").val('');
            $("#modalmember #defaultForm-tgl-lahir").val('');
            $("#modalmember #submit-member").removeClass('hidden');
            $("#modalmember #update-member").addClass('hidden');
            $('#modalmember h4.modal-title').text('Tambah member');
        });

        $('#table-member').DataTable( {
            "processing": true,
            "serverSide": true,
            "ajax": 
            {
                "url": "api/datatable.api.php?ket=member", // URL file untuk proses select datanya
                "type": "POST"
            },
            "deferRender": true,
            "columns": [
                { "data": "member_no" },
                { "data": "member_nama" },
                { "data": "member_alamat" },
                { "data": "member_tgl_lahir" },
                { "data": "member_hp" },
                { "data": "member_gender" },

                { "width": "180px", "render": function(data, type, full){
                    
                      return '<a class="btn-floating btn-sm btn-default mr-2 btn-edit" data-toggle="modal" data-target="#modalmember" data-id="' + full['member_id'] + '" title="Edit"><i class="fas fa-pen"></i></a> <a class="btn-floating btn-sm btn-danger btn-remove  mr-2" data-id="' + full['member_id'] + '" title="Delete"><i class="fas fa-trash"></i></a>';
                  }
                },
            ],
            "drawCallback": function( settings ) {
              $('.btn-edit').on('click',function(){
                  var id = $(this).data('id');
                        console.log(id+" edit");
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editmember',
                      dataType: "json",
                      data:{id:id},
                      success:function(data){
                        console.log(data+" edit");
                      $("#modalmember #update-member").removeClass('hidden');
                      $("#modalmember #submit-member").addClass('hidden');
                      $('#modalmember h4.modal-title').text('Edit member');
                          $("#modalmember label").addClass("active");
                          $("#modalmember #defaultForm-id").val(data[0].member_id);
                          $("#modalmember #defaultForm-no").val(data[0].member_no);
                          $("#modalmember #defaultForm-nama").val(data[0].member_nama);
                          $("#modalmember #defaultForm-alamat").val(data[0].member_alamat);
                          $("#modalmember #defaultForm-hp").val(data[0].member_hp);
                          $("#modalmember #defaultForm-gender").val(data[0].member_gender);
                          $("#modalmember #defaultForm-tgl-lahir").val(data[0].member_tgl_lahir);

                      }
                  });
              });

              $('.btn-remove').on('click', function(){
                  var id = $(this).data('id');
                  $.confirm({
                      title: 'Konfirmasi Hapus member',
                      content: 'Apakah yakin menghapus member ini?',
                      buttons: {
                          confirm: {
                              text: 'Ya',
                              btnClass: 'col-md-6 btn btn-primary',
                              action: function(){
                                  console.log(id);
                                  
                                  $.ajax({
                                    type: 'POST',
                                    url: "controllers/member.ctrl.php?ket=remove-member",
                                    dataType: "json",
                                    data:{id:id},
                                    success: function(data) {
                                      if (data[0]=="ok") {
                                        $('#table-member').DataTable().ajax.reload();
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