import { Aircraft } from "../airplane";
import { IAircraft } from "../interface/Iaircraft";
import ITransportFactory from "./ITransportFactory";


export class UberTransport implements ITransportFactory {
    createTransportAircraft(): IAircraft {
        return new Aircraft()
    }

}