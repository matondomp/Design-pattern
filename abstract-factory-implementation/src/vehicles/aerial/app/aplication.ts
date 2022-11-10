import ITransportFactory from "../factory/ITransportFactory";
import { IAircraft } from "../interface/Iaircraft";


export class Aplication {
    private aircraft: IAircraft
    constructor(factory: ITransportFactory) {
        this.aircraft = factory.createTransportAircraft()
    }

    startRoute(): void {
        this.aircraft.startRoute()
    }
}