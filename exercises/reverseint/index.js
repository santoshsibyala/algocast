// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var char = [],num = n;
  if(n < 0){
    n = n + (2 * -n);
  }
  while(n>10){
    if(n%10 !== 0){
      char.push(n%10);
    }
    n = Math.floor(n/10);
  }
  char.push(n);
  if(num < 0){
    return Number(char.join('')) - (2 * Number(char.join('')));
  }
  return Number(char.join(""));
}

module.exports = reverseInt;
