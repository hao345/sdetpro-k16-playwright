console.log('1')
setTimeout(callBackFunc, 2000)
console.log('3')

function callBackFunc() {
    console.log('2')
}