import Duck from "./Duck";
import FlyWithWing from "./FlyWithWing";
import Quack from "./Quack";

export default class Marllard extends Duck {
    constructor() {
        super(new FlyWithWing(), new Quack());
    }
}