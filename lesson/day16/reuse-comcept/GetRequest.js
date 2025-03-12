const Request = require('./Request')

//Child class, Sub-class, Delivered class
class GetRequest extends Request {
    static id = 1;

    constructor(url, method = 'GET') {
        super(url);
        super.setMethod(method)
    }

    myNewMethod() {
        console.log('This is a new method')
    }

    //Non-static can access class variables by accessing class.properties directly and the same for the static class
    //Static method can be overridden in a subclass, but it cannot be overridden in the parent class
    static doSomething() {
        console.log(GetRequest.id);
        console.log(`This is a class method from the child class`)
    }
}

let getRequest = new GetRequest();
getRequest.sendRequest();
getRequest.verifyResponse();
getRequest.myNewMethod();
//static method must be called through class instead of initialized object
GetRequest.doSomething();
