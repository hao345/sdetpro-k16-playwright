const readline = require("readline-sync");

let givenStr =  userInput();
let rawWord = givenStr.replace(/[,.]/gi, '').split(/\s+/);
console.log(rawWord)
const groupWords = groupWord(rawWord);
console.log(groupWords)

function groupWord(rawWord) {
    let newArray = {};
    for (let word of rawWord) {
        if (newArray[word]) {
            newArray[word] = newArray[word] + 1;
        } else {
            newArray[word] = 1;
        }
    }
    return newArray;
}

function userInput(){
    return readline.question('Input your text: ')
 }