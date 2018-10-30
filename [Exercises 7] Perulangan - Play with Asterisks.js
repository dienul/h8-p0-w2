// ******************Menyusun Barisan Bintang Dengan Nested Looping**************************************************
var row = 5

for (var i = 0; i < row; i++) {
  var hasil = '';
  for (var j = 0; j < row; j++) {
    hasil += '*'
  }
  console.log(hasil);
}
  
  
//  ******************Menyusun Barisan Bintang************************************************************************ 
  // menyusun baris bintang 
  var row =5;
  
    for (var angka = 0; angka < row; angka ++){
       console.log ('*');
    }
  
  
//  ******************Menyusun Barisan Tangga Bintang Dengan Nested Looping******************************************** 
 var row = 5;
var hasil ='';

for (var angka  = 1; angka <= row ; angka ++){

    hasil = '';
    // 1,2 
    for (var bintang = 1; bintang <= angka ; bintang++){
      hasil +='*'
      //console.log (hasil);
    }
  console.log (hasil);
}
  
