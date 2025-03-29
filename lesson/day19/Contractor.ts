import Employee from "./Employee";

export default class Contractor extends Employee {
    constructor() {
        super(30000);
    }

    protected setBonus(): void {
        this.bonus = 0;
    }
}