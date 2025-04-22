import Duck from "./Duck";
import FlyNoWay from "./FlyNoWays";
import Queak from "./Squeak";

export default class BabyDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Queak());
    }
}