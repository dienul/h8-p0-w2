// ******************Menyusun Barisan Bintang Dengan Nested Looping**************************************************
var row = 5
var hasil = '';

for (var angka  = 0; angka < row ; angka ++){
    hasil += '*'
}

for (var bintang = 0; bintang < row ; bintang++){
    console.log(hasil);
}
  
  
//  ******************Menyusun Barisan Bintang************************************************************************ 
  menyusun baris bintang 
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
  