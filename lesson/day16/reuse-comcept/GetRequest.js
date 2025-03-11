const Request = require ('./Request')

//Child class, Sub-class, Delivered class
class GetRequest extends Request{
    //Overiding the parent class method
    setMethod(){
        super.setMethod('GET')
    }

    myNewMethod(){
        console.log('This is a new method')
    }
}

let getRequest = new GetRequest();
getRequest.setMethod();
getRequest.sendRequest();
getRequest.myNewMethod();
