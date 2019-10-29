<?php include '../modals/produk.modal.php'; ?>

    <button class="btn btn-primary btn-tambah-produk" data-toggle="modal" data-target="#modalproduk">Tambah Produk <i class="fas fa-box-open ml-1"></i></button>
    <table id="example" class="table table-striped table-bordered fadeInLeft slow animated" style="width:100%">
        <thead>
            <tr>
                <th>nama</th>
                <th>kategori</th>
                <th>stok</th>
                <th>batas stok</th>
                <th>harga beli</th>
                <th>harga jual</th>
                <th>diskon (%)</th>
                <th>disable</th>
                <th>foto produk</th>
                <th></th>
            </tr>
        </thead>
    </table>



    <script type="text/javascript">
      
    $(document).ready(function() {

        $('.btn-tambah-produk').on('click',function(){

            $('#modalproduk h4.modal-title').text('Tambah Produk');
            $("#modalproduk #update-produk").addClass('hidden');
            $("#modalproduk #submit-produk").removeClass('hidden');
            $("#modalproduk label").removeClass("active");
            $("#modalproduk #defaultForm-id").val('');
            $("#modalproduk #defaultForm-nama").val('');
            $("#modalproduk #defaultForm-kategori").val('');
            $("#modalproduk #defaultForm-beli").val('');
            $("#modalproduk #defaultForm-jual").val('');
            $("#modalproduk #defaultForm-diskon").val('');
            $("#modalproduk #defaultForm-komisi").val('');
            $("#modalproduk #defaultForm-komisi-dokter").val('');
            $("#modalproduk #defaultForm-setstok").val('');
            $("#modalproduk #defaultForm-stok").val('');
            $("#modalproduk #defaultForm-batas-stok").val('');
            $("#modalproduk #defaultForm-disable").val('');
            $("#modalproduk #textimage").val('');
            $("#modalproduk #image").val('');
        });

        $('#example').DataTable( {
            "processing": true,
            "serverSide": true,
            "ajax": 
            {
                "url": "api/datatable.api.php?ket=produk", // URL file untuk proses select datanya
                "type": "POST"
            },
            "deferRender": true,
            "columns": [
                { "data": "barang_nama" },
                { "data": "kategori_nama" },
                { "data": "barang_stok" },
                { "data": "barang_batas_stok" },
                { "render": function(data, type, full){
                   return formatRupiah(full['barang_harga_beli'].toString(), 'Rp. ');
                  }
                },
                { "render": function(data, type, full){
                   return formatRupiah(full['barang_harga_jual'].toString(), 'Rp. ');
                  }
                },
                { "data": "barang_diskon" },
                { "width": "150px", "render": function(data, type, full){

                    if (full['barang_disable']==1) {
                     return 'Ya';

                    } else {
                     return 'Tidak';
                    }
                  }
                },
                { "width": "110px", "render": function(data, type, full){
                   return '<img width="50" src="../assets/img/produk/' + full['barang_image'] + '" >';
                  }
                },
                { "width": "150px", "render": function(data, type, full){
                   return '<a class="btn-floating btn-sm btn-default mr-2 btn-edit" data-toggle="modal" data-target="#modalproduk" data-id="' + full['barang_id'] + '" title="Edit"><i class="fas fa-pen"></i></a> <a class="btn-floating btn-sm btn-danger btn-remove" data-id="' + full['barang_id'] + '" title="Delete"><i class="fas fa-trash"></i></a>';
                  }
                },
            ],
            "initComplete": function( settings, json ) {
              $('.btn-edit').on('click',function(){
                  var produk_id = $(this).data('id');
                  console.log(produk_id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editproduk',
                      dataType: "json",
                      data:{produk_id:produk_id},
                      success:function(data){
                          $('#modalproduk h4.modal-title').text('Edit Produk');
                          $("#modalproduk #update-produk").removeClass('hidden');
                          $("#modalproduk #submit-produk").addClass('hidden');
                          $("#modalproduk label").addClass("active");
                          $("#modalproduk #defaultForm-id").val(produk_id);
                          $("#modalproduk #defaultForm-nama").val(data[0].barang_nama);
                          $("#modalproduk #defaultForm-kategori").val(data[0].barang_kategori);
                          $("#modalproduk #defaultForm-beli").val(data[0].barang_harga_beli);
                          $("#modalproduk #defaultForm-jual").val(data[0].barang_harga_jual);
                          $("#modalproduk #defaultForm-diskon").val(data[0].barang_diskon);
                          $("#modalproduk #defaultForm-komisi").val(data[0].barang_komisi);
                          $("#modalproduk #defaultForm-komisi-dokter").val(data[0].barang_komisi_dokter);
                          $("#modalproduk #defaultForm-setstok").val(data[0].barang_set_stok);
                          $("#modalproduk #defaultForm-stok").val(data[0].barang_stok);
                          $("#modalproduk #defaultForm-batas-stok").val(data[0].barang_batas_stok);
                          $("#modalproduk #defaultForm-disable").val(data[0].barang_disable);
                          $("#modalproduk #textimage").val('');
                          $("#modalproduk #image").val('');

                      }
                  });
                  
              });
            },
            "drawCallback": function( settings ) {
              $('.btn-edit').on('click',function(){
                  var produk_id = $(this).data('id');
                  console.log(produk_id)
                  $.ajax({
                      type:'POST',
                      url:'api/view.api.php?func=editproduk',
                      dataType: "json",
                      data:{produk_id:produk_id},
                      success:function(data){
                          $('#modalproduk h4.modal-title').text('Edit Produk');
                          $("#modalproduk #update-produk").removeClass('hidden');
                          $("#modalproduk #submit-produk").addClass('hidden');
                          $("#modalproduk label").addClass("active");
                          $("#modalproduk #defaultForm-id").val(produk_id);
                          $("#modalproduk #defaultForm-nama").val(data[0].barang_nama);
                          $("#modalproduk #defaultForm-kategori").val(data[0].barang_kategori);
                          $("#modalproduk #defaultForm-beli").val(data[0].barang_harga_beli);
                          $("#modalproduk #defaultForm-jual").val(data[0].barang_harga_jual);
                          $("#modalproduk #defaultForm-diskon").val(data[0].barang_diskon);
                          $("#modalproduk #defaultForm-komisi").val(data[0].barang_komisi);
                          $("#modalproduk #defaultForm-komisi-dokter").val(data[0].barang_komisi_dokter);
                          $("#modalproduk #defaultForm-setstok").val(data[0].barang_set_stok);
                          $("#modalproduk #defaultForm-stok").val(data[0].barang_stok);
                          $("#modalproduk #defaultForm-batas-stok").val(data[0].barang_batas_stok);
                          $("#modalproduk #defaultForm-disable").val(data[0].barang_disable);

                      }
                  });
              });

              $('.btn-remove').on('click', function(){
                  var produk_id = $(this).data('id');
                  $.confirm({
                      title: 'Konfirmasi Hapus Produk',
                      content: 'Apakah yakin menghapus produk ini?',
                      buttons: {
                          confirm: {
                              text: 'Ya',
                              btnClass: 'col-md-6 btn btn-primary',
                              action: function(){
                                  console.log(produk_id);
                                  
                                  $.ajax({
                                    type: 'POST',
                                    url: "controllers/produk.ctrl.php?ket=remove-produk",
                                    dataType: "json",
                                    data:{produk_id:produk_id},
                                    success: function(data) {
                                      if (data[0]=="ok") {
                                        $('#example').DataTable().ajax.reload();
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