const { sort } = require('./UtilMethods')
let arr = [12, 34, 1, 16, 28, -2];

/* let sortNumber = sort(arr);
console.log(sortNumber); */

let unsortedPosition;
for (unsortedPosition = arr.length - 1; unsortedPosition > 0; unsortedPosition--) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = arr[index]
        const rigtValue = arr[index + 1];
        if (leftValue > rigtValue) {
            swap(arr, index);
        }
    }
}
console.log(arr)

function swap(arr, index) {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
}