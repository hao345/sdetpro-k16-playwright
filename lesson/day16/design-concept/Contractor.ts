import Employee from "./Employee";

export default class Contractor extends Employee {
    constructor() {
        super(30000);
    }

    printSalary() {
        console.log(`Salary is: ${this.salary}`)
    }
}