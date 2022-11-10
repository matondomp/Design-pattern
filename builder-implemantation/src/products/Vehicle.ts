import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { vehicleType } from "../components/vehicleType";
import { Wheel } from "../components/wheel";

export class Vehicle {

    private _vehicleType: vehicleType
    private _seats: number
    private _engine: Engine
    private _transmission: Transmission
    private _wheels: Wheel[] = []

    addWheel(wheel: Wheel) {
        this._wheels.push(wheel)
    }

    get wheels(): Wheel[] {
        return this._wheels
    }
    get wheelsTotal(): number {
        return this._wheels.length
    }
    get vehicleType(): vehicleType {
        return this._vehicleType
    }
    get seats(): number {
        return this.seats
    }
    get engine(): Engine {
        return this._engine
    }
    get transmission() {
        return this._transmission
    }


    set vehicleType(vehicleType: vehicleType) {
        this._vehicleType = vehicleType
    }
    set seats(seats: number) {
        this._seats = seats
    }
    set engine(engine: Engine) {
        this._engine = engine
    }
    set transmission(transmission: Transmission) {
        this._transmission = transmission
    }

}