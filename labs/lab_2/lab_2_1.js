const readline = require("readline-sync");

let height = Number(readline.question("Input your height: "));
let weight = Number(readline.question("Input your weight: "));

height = height/100
let BMI = weight / (height * height);

if (BMI < 18.5) {
    console.log('Underweight');
} else if (BMI <= 24.9) {
    console.log('Normal weight');
} else if (BMI <= 29.9) {
    console.log('Overweight');
} else {
    console.log('Obesity');
}