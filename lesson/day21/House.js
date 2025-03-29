"use strict";
//Immutable object
Object.defineProperty(exports, "__esModule", { value: true });
var House = /** @class */ (function () {
    function House(topRoofColor, windowNumber, color, mainDoor) {
        this.topRoofColor = topRoofColor;
        this.windowNumber = windowNumber;
        this.color = color;
        this.mainDoor = mainDoor;
    }
    House.prototype.getTopRoofColor = function () {
        return this.topRoofColor;
    };
    House.prototype.getWindowNumber = function () {
        return this.windowNumber;
    };
    House.prototype.getColor = function () {
        return this.color;
    };
    House.prototype.getMainDoor = function () {
        return this.mainDoor;
    };
    return House;
}());
exports.default = House;
var teoHouse = new House('Red', 10, 'White', 2);
var tiHouse = new House('Blue', 5, 'Green', 1);
