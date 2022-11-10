import Ivihicle from "./interface/Ivihicle";

class Bicycle implements Ivihicle {
    startRoute(): void {
        this.getCargo()
        console.log('we starting the ....')
    }
    getCargo(): void {
        console.log("we got the cargo with bicycle .");
    }

}

export { Bicycle }