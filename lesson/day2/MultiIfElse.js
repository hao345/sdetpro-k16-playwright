const readline = require('readline-sync');

let clientAge = Number(readline.question('Age: '));

if (clientAge < 18) {
    console.log('Not sell');
}
else if (clientAge <= 55) {
    console.log('unlimited');
}else{
    console.log('2 bottles');
}