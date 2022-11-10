import Ivihicle from "./interface/Ivihicle";

class Cars implements Ivihicle {
    startRoute(): void {
        this.getCargo()
        console.log('starting the route ...')
    }
    getCargo(): void {
        console.log("wi got the passenger");
    }

}

export { Cars }