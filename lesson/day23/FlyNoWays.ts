import FlyBehavior from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log(`i can't not fly`)
    }
}