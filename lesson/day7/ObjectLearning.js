//Create
let person = {
    name: 'Hao',
    age: 27,
    "my-gender": "M"
}

//Read
console.log(person.name);
console.log(person["my-gender"]);

//Upadte
person.name = 'Haoo';
console.log(person.name);

//Destructure
const { name, age, ["my-gender"]:gender } = person;

//function with Destructure params
function sayHello({ name }) {
    console.log(`My name is ${name}`);
}
sayHello(person)

//Delete
delete person.name;
console.log(person)