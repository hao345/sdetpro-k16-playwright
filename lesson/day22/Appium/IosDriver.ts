import AppiumDriver from "./AppiumDriver";

export default class IosDriver extends AppiumDriver {
    launchApp(): void {
        console.log(`Launching IOS session`)
    }

    closeApp(): void {
        console.log(`Closing IOS session`)
    }
}