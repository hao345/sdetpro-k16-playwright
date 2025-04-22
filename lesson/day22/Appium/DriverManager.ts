import AndroidDriver from "./AndroidDriver";
import AppiumDriver from "./AppiumDriver";
import IosDriver from "./IosDriver";

export default class DriverManager {
    static getAppiumDriver(platfrom: string): AppiumDriver {
        switch (platfrom) {
            case "Android":
                return new AndroidDriver()
            case "IOS":
                return new IosDriver()
            default:
                throw new Error(`Invalid platfrom`)
        }
    }
}