import Ivihicle from "./interface/Ivihicle";

class Motoclycles implements Ivihicle {
    startRoute(): void {
        this.getCargo()
        console.log("wi are already to go to client");
    }
    getCargo(): void {
        console.log("wi got the cargo");
    }

}

export { Motoclycles }