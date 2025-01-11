let intArr = [1, 2, 3, 4, 5, -10, 99, -1];

let min = intArr[0];
let max = intArr[0];

intArr.forEach(function(element){
    if (element>max){
        max = element
    }if (element<min){
        min = element
    }
})

console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);