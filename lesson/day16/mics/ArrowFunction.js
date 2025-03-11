//Function Declaration
function add(a, b) {
    return a + b;
}

//Function Expression
const add1 = function (a, b) {
    return a + b;
}

//Arrow Function
const arrowAddNumber = (a, b) => console.log(a + b)

//one param
const oneParam = a => console.log(a)

//Lexical this binding 

//Object literal
const person = {
    name: 'Hao',
    age: 30,
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello i am ${this.name} and ${this.age} years old`)
        }, 3000)
    }
}

person.sayHello();

//Fitler
const array = [1, 2, 3, 4, 5];
/* const newNumber = array.filter(function(num){
    return num % 2 !== 0
}) */
const newNumber = array.filter(num => num % 2 !== 0)
