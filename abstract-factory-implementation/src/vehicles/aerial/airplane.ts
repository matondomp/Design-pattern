import { IAircraft } from "./interface/Iaircraft";

class Aircraft implements IAircraft {
    startRoute(): void {
        this.wind()
        this.getCargo()
        console.log("Iniciando a decologem...");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos!.");
    }
    wind(): void {
        console.log("Ventos as 25km, ventos ok!");
    }

}

export { Aircraft }