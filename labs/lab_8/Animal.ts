export default class Animal {
    private name: string;
    private speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    public getName(): string {
        return this.name;
    }

    public getSpeed(): number {
        return this.speed;
    }
}