import Animal from "./Animal";

export default class AnimalControllers {
    static compareSpeed(listAnimal: Animal[]): Animal {
        let max = listAnimal[0];
        for (let element of listAnimal){
            if (element.getSpeed() > max.getSpeed()){
                max = element;
            }
        }
        return max;
    }
}