import Dog from "./Dog";
import Tiger from "./Tiger";
import Horse from "./Horse";
import AnimalControllers from "./AnimalControllers";

function main() {
    const dog = new Dog();
    const tiger = new Tiger();
    const horse = new Horse();

    const winner = AnimalControllers.compareSpeed([dog, tiger, horse]);

    console.log(`${dog.getName()} has speed: ${dog.getSpeed()} km/h`);
    console.log(`${tiger.getName()} has speed: ${tiger.getSpeed()} km/h`);
    console.log(`${horse.getName()} has speed: ${horse.getSpeed()} km/h`);

    console.log(`Winner is ${winner.getName()} with speed: ${winner.getSpeed()} km/h`);
}

main();
