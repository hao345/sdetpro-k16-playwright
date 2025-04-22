import Duck from "./Duck";
import FlyNoWay from "./FlyNoWays";
import Mute from "./Mute";

export default class Decoy extends Duck {
    constructor() {
        super(new FlyNoWay(), new Mute());
    }
}