//create
let myArray = [1,2,3,4,5]

//get array length
console.log(myArray.length)

//read
for (let index = 0;index<myArray.length;index++){
    console.log(myArray[index])
}

for (let index = myArray.length-1;index>=0; index--){
    console.log(myArray[index])
}

// undefined holes
myArray[5] = 6;
myArray.push(7);
console.log(myArray)