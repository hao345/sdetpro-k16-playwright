const readline = require('readline-sync')
/* let index = 0;
while (index < 5) {
    console.log(index);
    index++;
} */

isPlaying = true;
while(isPlaying){
    start()
    let option = userOption();

    if(option === 0){
        isPlaying = false;
    }else if(option === 1){
        let randomnumber = Math.random();
        console.log(`Your number: ${randomnumber}`)
    }else{
        console.log('Error')
    }
}
console.log('See u again')

function start (){
    console.log(`1.Play | 0.Exit`)
}

function userOption(){
    return Number(readline.question('Input your number'))
}