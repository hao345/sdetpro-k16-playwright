export default class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.validateAge(age)
        this.name = name;
        this.age = age;
    }


    //Service method
    setAge(age: number) {
        this.validateAge(age)
        this.age = age;
    }

    //Support Method: hỗ trợ các phương thức khác trong 1 class
    private validateAge(age: number) {
        if (age < 0) {
            throw new Error(`Age must be greater than 0`)
        }
    }
}


//Normal class: all property is private, service method, support method
/* Class that IsA-relationship : Almost of the object property are protected. để cho người ta không init được, nếu có init được 
cũng hông làm được gì, nếu muốn mạnh tay hơn thì sử dụng abstract */