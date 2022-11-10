import { Aplication } from "./src/vehicles/aerial/app/aplication";
import Company from "./src/vehicles/aerial/const/conpany";
import { NineNineTransport } from "./src/vehicles/aerial/factory/NinenineTransportFactory";
import ITransportFactory from "./src/vehicles/aerial/factory/ITransportFactory";
import { UberTransport } from "./src/vehicles/aerial/factory/UberTransport";

const currentCompany = Company.NINENINE;
let factory: ITransportFactory

switch (currentCompany) {

    case Company.USER:
        factory = new UberTransport();
        break;

    case Company.NINENINE:
        factory = new NineNineTransport();
        break;

    default:
        console.log("Desconhecida");

}


const app = new Aplication(factory);

app.startRoute();
