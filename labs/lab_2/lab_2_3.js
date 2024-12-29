const readline = require("readline-sync");

let height = Number(readline.question("Input your height: "));
let weight = Number(readline.question("Input your weight: "));

height = height / 100
let BMI = weight / (height * height);
BMI = BMI.toFixed(1);

if (BMI < 18.5) {
    console.log(`Underweight: ${BMI}`);
    let result = 18.5 - BMI;
    console.log(`You should increase ${result.toFixed(1)}`);
} else if (BMI <= 24.9) {
    console.log(`Normal weight: ${BMI}`);
} else if (BMI <= 29.9) {
    console.log(`Overweight: ${BMI}`);
    let result = BMI - 25;
    console.log(`You should decrease ${result.toFixed(1)}`)
} else {
    console.log(`Obesity: ${BMI}`);
    let result = BMI - 25;
    console.log(`You should decrease ${result.toFixed(1)}`)
}