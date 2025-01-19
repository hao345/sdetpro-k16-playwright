const {isEvenNumber,isOddNumber} = require ('./UtilMethods')

let intArr = [1,2,3,4,5];

let evenNumber = intArr.filter(isEvenNumber);
let oddNumber = intArr.filter(isOddNumber);

console.log(`Even numders: ${evenNumber.length} number ${sprintArray(evenNumber)}`);
console.log(`Odd numders: ${oddNumber.length} number ${sprintArray(oddNumber)}`);

function sprintArray(array){
    if( array.length == 0){
        return ''
    }else{
        return ''
    }

}