const emergencyList = new Map([
    ['113', 'Polic Department'],
    ['114', 'Fire Dept']
]);

const value = 'Fire Dept';

let foundKey = null;
for (const [key, values] of emergencyList) {
    if (values === value) {
        foundKey = key;
        break;
    }
}
console.log(foundKey)