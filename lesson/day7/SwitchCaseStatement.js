const readline = require('readline-sync');

let userNum = userRespone();

switch (userNum) {
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    case 8:
        console.log('Sunday')
        break;
    default:
        console.log('Wrong')
}

function userRespone() {
    return Number(readline.question('Enter your number: '))
}
