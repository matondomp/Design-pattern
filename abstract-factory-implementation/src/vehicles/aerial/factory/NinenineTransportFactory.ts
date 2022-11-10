import { Helicoptes } from "../helicopters";
import { IAircraft } from "../interface/Iaircraft";
import ITransportFactory from "./ITransportFactory";

export class NineNineTransport implements ITransportFactory {
    createTransportAircraft(): IAircraft {
        return new Helicoptes();
    }

}