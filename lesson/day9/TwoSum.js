//Brute Force
function findIndicesUsingBruteFore(arr, targetNumber) {
    for (let firstNumIndex = 0; firstNumIndex < arr.length - 1; firstNumIndex++) {
        let firstNumber = arr[firstNumIndex];
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < arr.length; secondNumIndex++) {
            let secondNumber = arr[secondNumIndex];
            if (firstNumber + secondNumber === targetNumber) {
                //return [firstNumIndex, secondNumIndex] // return a index of number 
                return [firstNumber, secondNumber] //return a number
            }
        }
    }
    return []
}
console.log(findIndicesUsingBruteFore([2, 22, 5, 1, 7], 8))


//Map
function findIndicesUsingMap(arr, targetNumber) {
    let numMap = new Map();
    for (let currenIndex = 0; currenIndex < arr.length; currenIndex++) {
        let currentNumber = arr[currenIndex];
        const lookingNumber = targetNumber - currentNumber;
        if (numMap.has(lookingNumber)) {
            return [numMap.get(lookingNumber), currenIndex]
        }
        numMap.set(currentNumber, currenIndex)
    }
    return []
}

console.log(findIndicesUsingMap([3, 7, 22, 1], 8))