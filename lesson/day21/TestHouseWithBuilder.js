"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HouseWithBuildDesignPatterns_1 = require("./HouseWithBuildDesignPatterns");
var builder = new HouseWithBuildDesignPatterns_1.default.Builder();
var house = builder
    .setTopRoofColor('Red')
    .setColor('Green')
    .setMainDoor(2)
    .setWindowNumber(4)
    .build();
console.log(house);
