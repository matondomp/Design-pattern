import { IAircraft } from "../interface/Iaircraft";

export default interface ITransportFactory {
    createTransportAircraft(): IAircraft
}