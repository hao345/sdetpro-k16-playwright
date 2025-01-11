let arr = [12, 34, 1, 16, 28];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let z = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = z;
        }
    }
}
console.log(arr)