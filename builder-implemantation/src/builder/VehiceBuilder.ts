import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { vehicleType } from "../components/vehicleType";
import { Wheel } from "../components/wheel";
import { Vehicle } from "../products/Vehicle";
import { IBuilder } from "./IBuilder";

export class VehicleBuilder implements IBuilder {

    private vehicle = new Vehicle()

    setSeats(seats: number) {
        this.vehicle.seats = seats
    }
    reset(): void {
        this.vehicle = new Vehicle()
    }
    getVehicle(): Vehicle {
        const vehicle: Vehicle = this.vehicle
        this.reset()
        return vehicle
    }
    addWeel(wheel: Wheel) {
        this.vehicle.addWheel(wheel)
    }
    setVehicleType(vehicleType: vehicleType) {
        this.vehicle.vehicleType = vehicleType
    }
    setEngine(engine: Engine) {
        this.vehicle.engine = engine
    }
    setTrasmission(transmission: Transmission) {
        this.vehicle.transmission = transmission
    }

}