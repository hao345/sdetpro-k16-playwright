const readline = require('readline-sync')

let arriveTime = readline.question('arriveTime');
let isHeOnTime = (Number(arriveTime == 7));


//ternary operator: toán tử 3 ngôi
let msg = isHeOnTime ? "let talk" : "write a letter";
console.log(msg)