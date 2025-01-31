let person = {
    name: "Hao",
    age: 27,
    //Nested object
    bankAccount: {
        checkings: {
            accountNumber: '123456'
        },
        saving: {
            accountNumber: '1'
        }
    }
}

let person2 = person
person2.name = "Haoo"
person2.bankAccount.accountNumber = '4567890000';
console.log(person)
console.log(person2)

//Shallow copy handle single object
/* let person3 = {...person}
person3.name = "Haooo" */

//Shallow copy handle for nested object
let person4 = JSON.parse(JSON.stringify(person));
person4.name = "Haooo"
person4.bankAccount.accountNumber = '0987';
console.log(person4)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
