//Create
const emergencyList = new Map([
    ['113', 'Polic Department'],
    ['114', 'Fire Dept']
])

//Read
console.log(emergencyList.get('113'));

//Check if key existing
console.log(emergencyList.has('117'))

//Loop over all keys then get the values out
for(const key of emergencyList.keys()){
    console.log(`${key}: ${emergencyList.get(key)}`)
}

//Loop over values without using keys
for(const value of emergencyList.values()){
    console.log(`Value: ${value}`)
}

//Update/Add
//Just update values, can't update key. Key just delete
console.log(emergencyList.set('113', 'Pooolice Department'))
console.log(emergencyList.set('115', 'Hospital Department'))

//Delete
console.log(`After: ${emergencyList.size}`)
emergencyList.delete('114')
console.log(emergencyList)
console.log(`Before: ${emergencyList.size}`)

// Time complexity