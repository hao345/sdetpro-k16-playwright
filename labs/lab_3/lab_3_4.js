const { sort } = require('./UtilMethods')

arr1 = [1, 12, 16, 28, 34]
arr2 = [1, 13, 16, 27, 99]

let total = arr1.concat(arr2)
let sortNumber = sort(total)
console.log(sortNumber)