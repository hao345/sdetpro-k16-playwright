"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//outer class
var HouseWithBuildDesignPatterns = /** @class */ (function () {
    function HouseWithBuildDesignPatterns() {
    }
    //READ ONLY
    HouseWithBuildDesignPatterns.prototype.getTopRoofColor = function () {
        return this.topRoofColor;
    };
    HouseWithBuildDesignPatterns.prototype.getWindowNumber = function () {
        return this.windowNumber;
    };
    HouseWithBuildDesignPatterns.prototype.getColor = function () {
        return this.color;
    };
    HouseWithBuildDesignPatterns.prototype.getMainDoor = function () {
        return this.mainDoor;
    };
    //Inner class - Write only
    HouseWithBuildDesignPatterns.Builder = /** @class */ (function () {
        function class_1() {
            this.house = new HouseWithBuildDesignPatterns(); // Khởi tạo đối tượng home
        }
        class_1.prototype.setTopRoofColor = function (topRoofColor) {
            this.house.topRoofColor = topRoofColor;
            //Method channing
            return this;
        };
        class_1.prototype.setWindowNumber = function (windowNumber) {
            this.house.windowNumber = windowNumber;
            return this;
        };
        class_1.prototype.setColor = function (color) {
            this.house.color = color;
            return this;
        };
        class_1.prototype.setMainDoor = function (mainDoor) {
            this.house.mainDoor = mainDoor;
            return this;
        };
        class_1.prototype.build = function () {
            return this.house;
        };
        return class_1;
    }());
    return HouseWithBuildDesignPatterns;
}());
exports.default = HouseWithBuildDesignPatterns;
