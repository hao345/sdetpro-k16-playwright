import HouseWithBuildDesignPatterns from "./HouseWithBuildDesignPatterns";

let builder = new HouseWithBuildDesignPatterns.Builder();
let house:HouseWithBuildDesignPatterns = builder
    .setTopRoofColor('Red')
    .setColor('Green')
    .setMainDoor(2)
    .setWindowNumber(4)
    .build();

console.log(house)