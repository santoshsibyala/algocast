// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){
    let resultStr ='';
    for(var i=0;i<str.length;i++){
        if(i === 0){
            resultStr = resultStr+str[0].toUpperCase();
        }else {
            if(str[i-1] === ' '){
                resultStr = resultStr + str[i].toUpperCase();
            } else{
                resultStr = resultStr + str[i];
            }
        }
    }
    return resultStr;
}

/* function capitalize(str) {
    let charArray = str.split(' ');
    let array1 = [];
    for(let i=0; i<charArray.length; i++){
        array1.push(charArray[i][0].toUpperCase()+charArray[i].substr(1,charArray[i].length));
    }
    let returnstr = array1.join(' ');
    console.log(returnstr);
    return returnstr;
} */
capitalize('I Love Breakfast At Bill Miller Bbq');
module.exports = capitalize;
