var tampung= ''

function bandingkanAngka (angka1, angka2){
  if ( angka2 > angka1 ){
     tampung = 'true';
  }
  else if ( angka2 == angka1 ){
     tampung = -1;
  }
  else {
    tampung = 'false';
  }
  return tampung
}
console.log (bandingkanAngka(5,8)); 
console.log (bandingkanAngka(5,3)); 
console.log (bandingkanAngka(4,4)); 
console.log (bandingkanAngka(3,3)); 
console.log (bandingkanAngka(17,2)); 