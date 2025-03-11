// Parent class, Super class, Base class
class Request {
    constructor(url, hearder = {}) {
        this.url = url;
        this.hearder = hearder;
        this.method = '';
    }

    setMethod(method) {
        this.hearder = { ...this.hearder, method: method }
    }

    sendRequest() {
        console.log(`Sending request with the header: ${JSON.stringify(this.hearder)}`)
    }

    verifyResponse() {
        console.log(`Verifying response`)
    }
}

module.exports = Request;