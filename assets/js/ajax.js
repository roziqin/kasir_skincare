
function convertToRupiah(angka)
{
  var rupiah = '';    
  var angkarev = angka.toString().split('').reverse().join('');
  for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
  return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}
var dateformat = ["01","02","03","04","05","06","07","08","09","10",
            "11","12","13","14","15","16","17","18","19","20",
            "21","22","23","24","25","26","27","28","29","30","31"];

if ($("main").hasClass("dashboard") == true) {
    console.log(moment(new Date('2019-11-23')).format('ddd'))
    $.ajax({
        type:'POST',
        url:'api/view.api.php?func=dasboard-omset',
        dataType: "json",
        success:function(data){
            var date = [];
            var total = [];
            var omset = 0;

            for (var i in data) {
                date.push(moment(new Date(data[i].transaksi_tanggal)).format('ddd')+'-'+moment(new Date(data[i].transaksi_tanggal)).format('DD'));
                total.push(data[i].total);
                omset += parseInt(data[i].total);
            }
            $('#totomset').text(convertToRupiah(omset));
            var ctxL = document.getElementById("lineChart").getContext('2d');
            var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                            label: "",
                            data: total,
                            backgroundColor: [
                                'rgba(0, 137, 132, .2)',
                            ],
                            borderColor: [
                                'rgba(0, 10, 130, .7)',
                            ],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    aspectRatio: 2,
                    tooltips: {
                      callbacks: {
                        label: function(t, d) {
                           var xLabel = d.datasets[t.datasetIndex].label;
                           var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
                           return xLabel + ': ' + yLabel;
                        }
                      }
                    },
                    scales: {
                      yAxes: [{
                        ticks: {
                           callback: function(value, index, total) {
                              if (parseInt(value) >= 1000) {
                                 return 'Rp. ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                              } else {
                                 return 'Rp. ' + value;
                              }
                           }
                        }
                      }]
                    }
                }
            });
        }
    });


    $.ajax({
        type:'POST',
        url:'api/view.api.php?func=dasboard-pelanggan',
        dataType: "json",
        success:function(data){
            var date = [];
            var jumlah = [];

            for (var i in data) {
                date.push(dateformat[i]);
                jumlah.push(data[i].jumlah);
            }
            var ctxL = document.getElementById("chartpelanggan").getContext('2d');
            var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                            label: "",
                            data: jumlah,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.5)',
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, .9)',
                            ],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    aspectRatio: 3,
                }
            });
        }
    });

    $.ajax({
        type:'POST',
        url:'api/view.api.php?func=dasboard-itemsold',
        dataType: "json",
        success:function(data){
            var date = [];
            var jumlah = [];

            for (var i in data) {
                date.push(dateformat[i]);
                jumlah.push(data[i].jumlah);
            }
            var ctxL = document.getElementById("chartitem").getContext('2d');
            var myLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                            label: "",
                            data: jumlah,
                            backgroundColor: [
                                'rgba(255, 159, 64, 0.5)',
                            ],
                            borderColor: [
                                'rgba(255, 159, 64, .9)',
                            ],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    aspectRatio: 3,
                }
            });
        }
    });
}