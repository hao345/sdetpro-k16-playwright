const givenStr = 'Hello ban, toi ten Hao, ban cung ten Hao luon a';
let rawWord = givenStr.replace(/,/gi, '').split(' ');
const groupWords = groupWord(rawWord);
console.log(groupWords)

function groupWord(rawWord) {
    let numMap = new Map();
    for (let word of rawWord) {
        if(!numMap.has(word)){
            numMap.set(word,1)
        }else{
            numMap.set(word,numMap.get(word)+1);
        }
    }
    return numMap;
}