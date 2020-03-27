// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let newStringA = stringA.replace('/[^\w]/g','').toLowerCase();
    let newStringB = stringB.replace('/[^\w]/g','').toLowerCase();
    let newStringAObj = {};
    let newStringBObj = {};
    for(let index of newStringA){
        if(newStringAObj[index]){
            newStringAObj[index]++;
        }else{
            newStringAObj[index] = 1;
        }
    }
    newStringBObj = Object.assign({},newStringAObj);
    for(let index of newStringB){
        if(!newStringAObj[index]){
            return false;
        }
        newStringAObj[index]++;
    }

    for(let index in newStringAObj){
        if(newStringAObj[index] !== 2 * newStringBObj[index]){
            return false;
        }
    }
    return true;
}
console.log(anagrams('hello', 'llohe'));
module.exports = anagrams;
