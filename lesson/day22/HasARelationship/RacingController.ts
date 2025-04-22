import Animal from "./Animal";
import Human from "./Human";
import Movable from "./Movable";
import Talkable from "./Talkable";

export default class RacingController {
    static move(movable: Movable): void {
        movable.move();
    }

    static talk(talkable: Talkable): void {
        talkable.talk();
    }
}

RacingController.move(new Animal());
RacingController.talk(new Animal());

RacingController.move(new Human());
RacingController.talk(new Human());