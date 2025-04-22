import BabyDuck from "./BabyDuck";
import Duck from "./Duck";
import DuckController from "./DuckController";
import Marllard from "./Mallard";
import Quack from "./Quack";

let babyDuck: Duck = new BabyDuck();
let mallard: Duck = new Marllard();

//Something happened
babyDuck.setQuackBehavior(new Quack())

DuckController.performQuack(babyDuck);
DuckController.performQuack(mallard);
