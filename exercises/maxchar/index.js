// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccddb") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var characterArray = str.split('');
    var hashmap = {};
    var max = 0;
    var maxChar = '';
    for(var i=0;i<characterArray.length;i++){
        if(hashmap[characterArray[i]]){
            hashmap[characterArray[i]] = hashmap[characterArray[i]]+1;
        }else{
            hashmap[characterArray[i]] = 1;
        }
    }
    for(var key in hashmap){
        if(hashmap[key]> max){
            max = hashmap[key];
            maxChar = key;
        }
    }
    return maxChar;
    
}
console.log(maxChar("aplep"));
module.exports = maxChar;
