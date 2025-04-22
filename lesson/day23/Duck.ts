import FlyBehavior from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";

export default class Duck {
    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    performFly(): void {
        this.flyBehavior.fly()
    }

    performQuack(): void {
        this.quackBehavior.quack()
    }

    setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior
    }

    setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior
    }
}