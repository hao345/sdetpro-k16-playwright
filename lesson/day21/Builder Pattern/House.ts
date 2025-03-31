//Immutable object

export default class House {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoor: number;

    constructor(topRoofColor: string, windowNumber: number, color: string, mainDoor: number) {
        this.topRoofColor = topRoofColor;
        this.windowNumber = windowNumber;
        this.color = color;
        this.mainDoor = mainDoor;
    }

    getTopRoofColor(): string {
        return this.topRoofColor;
    }
    getWindowNumber(): number {
        return this.windowNumber;
    }
    getColor(): string {
        return this.color;
    }
    getMainDoor(): number {
        return this.mainDoor;
    }
}

let teoHouse = new House('Red',10,'White',2);
let tiHouse = new House('Blue',5,'Green',1);