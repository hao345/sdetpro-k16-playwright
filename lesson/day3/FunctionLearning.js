//declare a function
//method 1: function declaration | hoisting
let returnValued = functionName()
function functionName() {
    return 1;
}

//method 2: function expression   | no hoisting 
let addNumber = function(num1,num2){
    return num1 + num2;
}
let sum = addNumber(1,2)