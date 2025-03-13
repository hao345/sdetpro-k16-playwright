import Animal from "./Animal";

export default class AnimalControllers {
    static compareSpeed(listAnimal: Animal[]): Animal {
        let fastest = listAnimal[0];
        for (let element of listAnimal){
            if (element.getSpeed() > fastest.getSpeed()){
                fastest = element;
            }
        }
        return fastest;
    }
}