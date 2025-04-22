import Movable from "./Movable";
import Talkable from "./Talkable";

export default class Animal implements Movable, Talkable {
    move(): void {
        console.log(`Animal Moving...`)
    }

    talk(): void {
        console.log(`Animal talking...`)
    }
}