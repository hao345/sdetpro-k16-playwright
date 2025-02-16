//method always clone another string, not change in the origin string
let myString = ' This is \`a dog\` ';
console.log(myString);

//length
console.log(myString.length);

//chartAt
console.log(myString.charAt(0));


//Print each character
for (let index = 0; index < myString.length; index++) {
    console.log(myString.charAt(index))
}

//eliminate space
console.log(myString.trim())

//replace 
let targetString = 'tMomi mnay gmap mnmhamu 7MH';
//g=global, i = ignore case: remove hoa va thuong 
let decodedStr = targetString.replace(/m/gi,'')
console.log(decodedStr)


let uiStr = "200mins";
let uiNum = uiStr.replace(/[^0-9]/gi,'')
console.log(Number(uiNum) + 1)

//concat
let firstStr = 'Hello'
let secondStr = 'Heo'
console.log(firstStr.concat(' ').concat(secondStr).concat(' !'))

//SubString
let strToBeCut = 'https://sdetpro.com';
console.log(strToBeCut.substring(0,5));

//Split
console.log(strToBeCut.split(''))
console.log(strToBeCut.split('://'))
