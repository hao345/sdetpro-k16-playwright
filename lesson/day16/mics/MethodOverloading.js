class MethodOverloading {

    /*  static add(a, b) {
         return a + b
     }
 
     static add_(a, b, c) {
         return a + b + c
     } */

    //Rest parameter
    /*  static add(...nums) {
         let sum = 0;
         for (let num of nums) {
             sum += num;
         }
         return sum;
     } */
    static add(factor, anothing, ...nums) {
        return nums.map(num => num * factor)
    }

}

const result = MethodOverloading.add(10, 2);
const result2 = MethodOverloading.add(10, 2, 3);

console.log(result)
console.log(result2)

class ArrayHelper {
    static filterNumber(array, isEven) {
        if (isEven) {
            return array.filter(num => num % 2 === 0)
        } else {
            return array.filter(num => num % 2 !== 0)
        }
    }
}

let targetArray = [1,2,3,4,5,6,7,8,9];
let isEven = true;
const evenNumber = ArrayHelper.filterNumber(targetArray,isEven);
const oddNumber = ArrayHelper.filterNumber(targetArray);

console.log(evenNumber);
console.log(oddNumber);