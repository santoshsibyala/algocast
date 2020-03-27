// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var char = str.split('');
  var i = 0, j= char.length -1;
  while(Math.floor((char.length) /2 !== i)){
    if(char[i] !== char[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = palindrome;
