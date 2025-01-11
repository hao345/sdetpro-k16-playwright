//Break

let array = [1, 2, 3, 4, 5];
let targerIndex = -1;
for (let index = 0; index < array.length; index++) {
    if (array[index] === 3) {
        targerIndex = index;
        break;
    }
}

if (targerIndex < 0) {
    console.log('No number found')
} else {
    console.log(`The number found at ${targerIndex}`)
}


//Continue
for (let index = 0; index < array.length; index++) {
    if (array[index] === 3) {
        targerIndex = index;
        continue;
    } else {
        console.log(array[index])
    }
}

//return
function increaseValue() {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 3) {
            break;
        } else {
            array[index] = array[index] + 3;
        }
    }
}


increaseValue(array);
console.log(array)