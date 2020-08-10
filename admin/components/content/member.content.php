<?php include '../modals/member.modal.php'; ?>

<?php include '../modals/historymember.modal.php'; ?>
    <button class="btn btn-primary btn-tambah-member" data-toggle="modal" data-target="#modalmember">Tambah Member <i class="fas fa-box-open ml-1"></i></button>
    <table id="table-member" class="table table-striped table-bordered fadeInLeft slow animated" style="width:100%">
        <thead>
            <tr>
                <th>no member</th>
                <th>no rm</th>
                <th>nama</th>
                <th>alamat</th>
                <th>tanggal lahir</th>
                <th>usia (Th)</th>
                <th>no hp</th>
                <th>gender</th>
                <th></th>
            </tr>
        </thead>
    </table>



    <script type="text/javascript">
      
    $(document).ready(function() {
        $('.btn-tambah-member').on('click',function(){
            $("#modalmember #defaultForm-id").val('');
            $("#modalmember #defaultForm-rm").val('');
            $("#modalmember #defaultForm-nama").val('');
            $("#modalmember #defaultForm-alamat").val('');
            $("#modalmember #defaultForm-hp").val('');
            $("#modalmember #defaultForm-usia").val('');
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
                { "data": "member_rm" },
                { "data": "member_nama" },
                { "data": "member_alamat" },
                { "data": "member_tgl_lahir" },
                { "data": "member_usia" },
                { "data": "member_hp" },
                { "data": "member_gender" },

                { "width": "180px", "render": function(data, type, full){
                    
                      return '<a class="btn-floating btn-sm btn-warning mr-2 btn-history" data-toggle="modal" data-target="#historymember" data-id="' + full['member_id'] + '" title="Info"><i class="fas fa-clipboard-list"></i></a><a class="btn-floating btn-sm btn-default mr-2 btn-edit" data-toggle="modal" data-target="#modalmember" data-id="' + full['member_id'] + '" title="Edit"><i class="fas fa-pen"></i></a> <a class="btn-floating btn-sm btn-danger btn-remove  mr-2" data-id="' + full['member_id'] + '" title="Delete"><i class="fas fa-trash"></i></a>';
                  }
                },
            ],
            "drawCallback": function( settings ) {
              $('.btn-history').on('click',function(){
                  var id = $(this).data('id');
                  console.log("history")
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=historymember',
                      dataType: "json",
                      data:{id:id},
                      success:function(data){
                        $('#table-historymember').DataTable().clear().destroy();

                              
                        for (var i in data) {

                            if (i==0) {
                                $("#historymember .text-no").text("No Member: "+data[0].member.member_no);
                                $("#historymember .text-rm").text("No RM: "+data[0].member.member_rm);
                                $("#historymember .text-nama").text("Nama: "+data[0].member.member_nama);
                                $("#historymember .text-alamat").text("Alamat: "+data[0].member.member_alamat);
                                $("#historymember .text-usia").text("Usia: "+data[0].member.member_usia);
                                $("#historymember .text-hp").text("Telp: "+data[0].member.member_hp);
                                $("#historymember .text-gender").text("Gender: "+data[0].member.member_gender);
                                $("#historymember .text-tgl-lahir").text("Tgl Lahir: "+data[0].member.member_tgl_lahir);
                            } else {
                                
                                $('#table-historymember').DataTable( {
                                    paging: true,
                                    searching: true,
                                    ordering: true,
                                    deferRender: true,
                                    data: data["table"],
                                    columns: [
                                        { data: 'transaksi_tanggal' },
                                        { data: 'barang_nama' },
                                        { data: 'kategori_nama' },
                                        { data: 'jenis_nama' }
                                    ]
                                });
                                

                            }
                        }

                      }
                  });
              });

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
                          $("#modalmember #defaultForm-rm").val(data[0].member_rm);
                          $("#modalmember #defaultForm-nama").val(data[0].member_nama);
                          $("#modalmember #defaultForm-alamat").val(data[0].member_alamat);
                          $("#modalmember #defaultForm-usia").val(data[0].member_usia);
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