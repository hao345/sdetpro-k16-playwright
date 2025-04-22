import QuackBehavior from "./QuackBehavior";

export default class Queak implements QuackBehavior {
    quack(): void {
        console.log(`Queak Queak`)
    }
}