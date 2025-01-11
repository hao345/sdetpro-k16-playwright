module.exports = {isEvenNumber,isOddNumber, input}
const readline = require ('readline-sync')

function isEvenNumber(number){
    return number % 2 === 0
}

function isOddNumber(number){
    return number % 2 !== 0
}
 
function input(){
    return Number(readline.question('Input:'))
}