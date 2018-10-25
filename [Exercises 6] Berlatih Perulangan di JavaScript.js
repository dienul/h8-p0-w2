// 1. Melakukan Looping Menggunakan While//
var deret = 1;
var jumlah = 0;

console.log('LOOPING PERTAMA')
while(jumlah < 20) {
  jumlah += 2; 
  console.log( jumlah +' - i love coding' )
}

console.log('LOOPING KEDUA');
var jumlah =22
while (jumlah > 2){
  jumlah -=2;
  console.log( jumlah +' - i will become fullstack developer')
}

// 2.Melakukan Looping Menggunakan For ************************************************************************

console.log('LOOPING PERTAMA')
for (var deret = 1; deret <= 20; deret++ ){
  console.log(deret + ' - I love coding')
}

console.log('LOOPING KEDUA')
for ( var deret = 20; deret >= 1; deret--){
  console.log(deret + ' - I will become fullstack developer')
  }
// 3. angka ganjil dan genap***********************************************************************************

for ( var deret = 0; deret <= 20;  deret++ ){
  if ( deret%2 ){  
    console.log(deret + ' = ganjil')
    }
  else {
    console.log(deret + ' = genap')
  }
}

// KELIPATAN 3//
for ( var deret = 1; deret < 100; deret+=2){
  if ( deret %3==0){
    console.log(deret + ' KELIPATAN ' + '3')
  } else {
    console.log("");
  }
}

// KELIPATAN 6//
for ( var deret = 1; deret < 100; deret+=5){
  if ( deret %6==0){
    console.log(deret + ' KELIPATAN ' + '6')
  } else {
    console.log("");
  }
}

// KELIPATAN 10//
for ( var deret = 1; deret < 100; deret+=9){
  if ( deret %10==0){
    console.log(deret + ' KELIPATAN ' + '10')
  } else {
    console.log("");
  }
}

