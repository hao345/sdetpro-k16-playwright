const {isEvenNumber,isOddNumber} = require ('./UtilMethods')

let intArr = [1,2,3,4,5];

let evenNumber = intArr.filter(isEvenNumber);
let oddNumber = intArr.filter(isOddNumber);

console.log(`Even numders: ${evenNumber.length}`);
console.log(`Odd numders: ${oddNumber.length}`);