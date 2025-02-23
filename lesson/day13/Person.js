//Class is a template/blueprint to build an object

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    //Getter: return the current value
    get name() {
        return this._name;
    }

    //Setter: change the value
    set name(name) {
        this._name = name
    }
}

let hao = new Person("Hao", 18);
hao.name = "Hao Mai"
let name = hao.name;
console.log(name)
