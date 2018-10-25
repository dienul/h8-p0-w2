var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+' '+ second +' '+ third +' '+ fourth +' '+ fifth +' '+ sixth +' '+ seventh)
//*****************************************************************************************************************************
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word.substr(4,10)// do your own!
var thirdWord = word.substr(15,2)// do your own!
var fourthWord = word.substr(18,2) // do your own!
var fifthWord = word.substr(21)// do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//******************************************************************************************************************************

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+ word[5]+ word[6]+ word[7]+ word[8]+ word[9] +word[10] +word[11] +word[12]+word[14]
var thirdWord = word[15]+word[16]
var fourthWord = word[18]+word[19]
var fifthWord = word[21]+word[22]+word[23]+word[24]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// *******************************************************************************************************************************

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substr(4,10)
var thirdWord = word.substr(15,2)
var fourthWord = word.substr(18,2)
var fifthWord = word.substr(21)

var firstWordLength = exampleFirstWord.length;
var secondwordlength = secondWord.length;
var thirdwordlength = thirdWord.length;
var fourtwordlength = fourthWord.length;
var fifthwordlength = fifthWord.length;

// create new variables around here

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' +  secondwordlength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdwordlength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourtwordlength);
console.log('Fifth Word: ' + fifthWord + ', with length: '+ fifthwordlength);