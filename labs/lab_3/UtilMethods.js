module.exports = { isEvenNumber, isOddNumber, input, sort}
const readline = require('readline-sync')

function isEvenNumber(number) {
    return number % 2 === 0
}

function isOddNumber(number) {
    return number % 2 !== 0
}

function input() {
    return Number(readline.question('Input:'))
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let z = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = z;
            }
        }
    }
    return arr;
}
