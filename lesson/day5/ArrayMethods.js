let array = [1, 2, 3, 4, 5];

// Map 
let returnValue = array.map(function myRule(number){
    return number * 2
})
console.log(returnValue)
console.log(array)

let returnValue1 = array.map(function addAutomation(number){
    return `Automation_${number}`
})
console.log(returnValue1ß)


//ForEach
let userList = []
array.forEach(function addAutomation(value) {
    userList.push(`Automation_${value}`)
})
console.log(userList)

//Sort - String
let myString = ['B','C','A'];
// a-z
myString.sort();
//z-a 
myString.reverse();
console.log(myString)

//Sort - number

let anotherArray = [100,19,22]
anotherArray.sort(function sortNumberASC(num1,num2){
    return num1 - num2;
})
anotherArray.sort(function sortNumberDESC(num1,num2){
    return num2-num1;
})
console.log(anotherArray);