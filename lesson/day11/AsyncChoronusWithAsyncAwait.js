    /*
    * 1. Send Request -> get response | AsyncChoronus
    * 2. Process the response | AsyncChoronus
    * 3. Validate the response | SyncChoronus
    */

    const url = 'google.com'
    main();

    async function main(){
        const response = await sendRequest(url);
        const statusCode = await processResponse(response);
        validateResponse(statusCode);
        console.log('Done')
    }

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