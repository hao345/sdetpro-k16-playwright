export default abstract class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string) {
        this.name = name;
        this.salary = 0;
    }
    public abstract getSalary(): void;

    public getName(): string {
        return this.name;
    }

    public getSalaryValue(): number {
        return this.salary;
    }
}