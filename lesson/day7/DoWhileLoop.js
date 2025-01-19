const readline = require('readline-sync')
const randomNumber = generate();
let guessingTime = 0;
do {
    let userNum = userRespone();
    if (userNum === randomNumber) {
        console.log('Hooray');
        break;
    }
    guessingTime++;
}
while (guessingTime < 3)
if (guessingTime === 3) {
    console.log(`Good luck next time`)
} else {
    console.log(`Best`)
}

function userRespone() {
    return Number(readline.question('Enter your number: '))
}

function generate() {
    return Math.floor(Math.random() * 10 + 1);
}