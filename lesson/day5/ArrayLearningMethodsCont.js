let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Delete | Splice()

let returnValue = myArray.splice(2,9,10);
console.log(returnValue)
console.log(myArray) 

/* function isOddNumber(number){
    return number % 2 !==0;
}

function removeElementFromArray(list,startElement){
    list.splice(startElement,1);
}

for (let index = 0; index < myArray.length;index++){
    if(isOddNumber(myArray[index])){
        removeElementFromArray(myArray,index);
        index--;
    }
}
console.log(myArray) */ 