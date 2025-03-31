//outer class
export default class HouseWithBuildDesignPatterns {

    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoor: number;

    private constructor() {

    }

    //READ ONLY
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


    //Inner class - Write only
    public static Builder = class {
        private house: HouseWithBuildDesignPatterns;

        constructor() {
            this.house = new HouseWithBuildDesignPatterns(); // Khởi tạo đối tượng home
        }

        public setTopRoofColor(topRoofColor: string): this {
            this.house.topRoofColor = topRoofColor;
            //Method channing
            return this;
        }
        public setWindowNumber(windowNumber: number): this {
            this.house.windowNumber = windowNumber
            return this;
        }
        public setColor(color: string): this {
            this.house.color = color
            return this;
        }
        public setMainDoor(mainDoor: number): this {
            this.house.mainDoor = mainDoor
            return this;
        }
        public build(): HouseWithBuildDesignPatterns {
            return this.house;
        }
    }


}