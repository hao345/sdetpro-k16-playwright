console.log('1. Chay qua nha toi')
waitForResponse().then(goToCoffeeShop);
function goToCoffeeShop() {
    console.log('3. Chay toi quan cafe')
}

//wrap an asyncchoronus function to a promise
function waitForResponse() {
    return new Promise(wrapper)
}
function wrapper(reslove, reject) {
    setTimeout(function () {
        console.log(`2. Hao oi, uong cafe khong`)
        reslove();
    }, 2000)
}