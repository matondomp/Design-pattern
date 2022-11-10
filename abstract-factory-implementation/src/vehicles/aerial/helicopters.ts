import { IAircraft } from "./interface/Iaircraft";

class Helicoptes implements IAircraft {

    startRoute(): void {
        this.wind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }

    getCargo(): void {
        console.log("Passageiros ok. ligando hélices");
    }

    wind(): void {
        console.log("Ventos as 25km, Sudeste, ventos ok!");
    }

}

export { Helicoptes }