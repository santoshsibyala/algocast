// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var char = str.split('');
  var i=0, j= char.length-1;
  var temp;
  while(Math.floor((char.length) /2 )!== i){
    temp = char[i];
    char[i] = char[j];
    char[j] = temp;
    i++;
    j--;
  }
  return char.join('');
}

/* For JS interview
function reverse(str){
  return str.split('').reduce((rev,char)=> char+rev,'');
}*/
module.exports = reverse;
