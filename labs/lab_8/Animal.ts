export default class Animal {
    protected name: string;
    protected speed: number;
    protected maxSpeed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = Math.floor(Math.random() * 100) + 1;
    }

    getName(): string {
        return this.name;
    }

    getMaxSpeed(): number {
        return this.maxSpeed;
    }

    getSpeed(): number {
        return this.speed;
    }
}