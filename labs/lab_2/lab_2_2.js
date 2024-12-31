const readline = require("readline-sync")

let number = Number(readline.question('Input your number: '));
let result = (number % 2 === 0 ? "Even number" : "Odd number");
console.log(result);