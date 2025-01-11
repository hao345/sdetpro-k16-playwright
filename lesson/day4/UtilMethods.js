//service function: export to use for another file 
//common JS module
module.exports = {isEvenNumber,isOddNumber}


//support function: use for local file
//3: argument
/* let result = isEvenNumber(3)
console.log(result);
let result1 = isOddNumber(3)
console.log(result1); */

// number: param
function isEvenNumber(num){
    return num % 2 === 0;
}

function isOddNumber(num){
    return num % 2 !== 0;
}

