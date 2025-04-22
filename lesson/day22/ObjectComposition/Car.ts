//Object Composition

import ElectricEnginee from "./ElectricEnginee";
import Enginee from "./Enginee";
import GasEnginee from "./GasEnginee";

export default class Car {

    constructor(enginee: Enginee) {
        this.enginee = enginee;
    }

    //Controller
    start(): void {
        this.enginee.start();
    }

    move(): void {
        console.log(`Car moving...`)
    }

    stop(): void {
        console.log(`Car Stoping`)
    }
    private enginee: Enginee;
}


//Object Composition
let electricCar = new Car(new ElectricEnginee());
electricCar.start();
let gasCar = new Car(new GasEnginee());
gasCar.start();