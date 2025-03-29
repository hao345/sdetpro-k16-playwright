import Employee from "./Employee"

export default class FTE extends Employee {
    constructor() {
        super(20000)
    }

    protected setBonus(): void {
        this.bonus = 1000;
    }
}