/*
* 1. Send Request -> get response | AsyncChoronus
* 2. Process the response | AsyncChoronus
* 3. Validate the response | SyncChoronus
*/

const url = 'google.com'

//Thenable chain
//sendRequest(url).then(processResponse).then(validateResponse)
sendRequest(url)
    .then(function (response) {
        return processResponse(response)
    })
    .then(function (statusCode) {
        return validateResponse(statusCode)
    });

//Mimic AsyncChoronus
function sendRequest(url) {
    console.log(`1.Sending the quest to the endpoint ${url}... `)
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            reslove({ status: 200 })
        }, 2000)
    })
}

//Mimic AsyncChoronus
function processResponse(response) {
    console.log(`2.Processing the response... `)
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            reslove(response.status)
        })
    }, 3000)

}

//Mimic SyncChoronus
function validateResponse(responseStatus) {
    console.log(`3.Validate the response... `)
    if (responseStatus === 200) {
        console.log('PASSED!')
    } else {
        console.log('ERROR!')
    }
}