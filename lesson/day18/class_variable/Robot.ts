export default class Robot {
    static id = 0;
    constructor(){
        Robot.id++;
    }

    getId(){
        return Robot.id;
    }
}

/* const lulu = new Robot();
console.log(lulu.getId());
const meomeo = new Robot();
console.log(meomeo.getId()); */