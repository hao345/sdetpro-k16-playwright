// Parent class, Super class, Base class
class Request {

    //class variable, was born before object born
    static id = 1;

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

    static doSomething() {
        console.log('This is a class method')
    }
}

module.exports = Request;