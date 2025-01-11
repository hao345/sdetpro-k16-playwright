const {isEvenNumber,isOddNumber} = require('./UtilMethods')
let myArray = [1,2,3,4,5];

//Filter to get even number from array
//High order function: HOF

let evenNumber = myArray.filter(isEvenNumber)
let oddnNumber = myArray.filter(isOddNumber)
console.log(evenNumber)
console.log(oddnNumber)