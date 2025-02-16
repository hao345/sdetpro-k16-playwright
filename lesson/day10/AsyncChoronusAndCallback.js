/*
* 1. Send Request -> get response | AsyncChoronus
* 2. Process the response | AsyncChoronus
* 3. Validate the response | SyncChoronus
*/

const url = 'google.com'

// Callback hell
sendRequest(url, function(response){
    processResponse(response,function(statsCode){
        validateResponse(statsCode)
        console.log('Done')
    })
})

//Mimic AsyncChoronus
function sendRequest(url, callBackFunc) {
    console.log(`1. Sending the quest to the endpoint ${url}... `)
    setTimeout(function () {
        callBackFunc({ status: 200 });
    }, 2000);
}

//Mimic AsyncChoronus
function processResponse(response, callBackFunc) {
    console.log(`2.Processing the response... `)
    setTimeout(function () {
        callBackFunc(response.status)
    }, 3000)
}

//Mimic SyncChoronus
function validateResponse(responseStatus){
    console.log(`3.Validate the response... `)
    if(responseStatus === 200){
        console.log('PASSED!')
    }else{
        console.log('ERROR!')
    }
}