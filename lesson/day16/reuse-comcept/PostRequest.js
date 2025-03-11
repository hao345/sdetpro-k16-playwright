const Request = require ('./Request')

//Child class, Sub-class, Delivered class
class PostRequest extends Request{
    //Overiding the parent class method
    setMethod(){
        super.setMethod('POST')
    }

    myNewMethod(){
        console.log('This is a new method')
    }
}

let postRequest = new PostRequest();
postRequest.setMethod();
postRequest.sendRequest();
postRequest.myNewMethod();
