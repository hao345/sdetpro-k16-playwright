const {isEvenNumber} = require('./UtilMethods')
let myArray = [1,2,3,4,5];

//Filter to get even number from array
//High order function: HOF

let evenNumber = myArray.filter(isEvenNumber)

console.log(evenNumber)