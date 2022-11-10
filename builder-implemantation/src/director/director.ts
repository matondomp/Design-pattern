
import { IBuilder } from "../builder/IBuilder";
import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { vehicleType } from "../components/vehicleType";
import { Wheel } from "../components/wheel";

export class Director {
    constructor(private builder: IBuilder) { }

    constructSedanCar() {
        this.builder.setVehicleType(vehicleType.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTrasmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1600))
        this.builder.addWeel(new Wheel(15))
        this.builder.addWeel(new Wheel(15))
        this.builder.addWeel(new Wheel(15))
        this.builder.addWeel(new Wheel(15))
        this.builder.addWeel(new Wheel(15))
    }

    constructTruck() {
        this.builder.setVehicleType(vehicleType.TRUCK)
        this.builder.setSeats(3)
        this.builder.setTrasmission(Transmission.AUTOMATIC_SEQUENTIAL)
        this.builder.setEngine(new Engine(13000))
        this.builder.addWeel(new Wheel(22))
        this.builder.addWeel(new Wheel(22))
        this.builder.addWeel(new Wheel(22))
        this.builder.addWeel(new Wheel(22))
        this.builder.addWeel(new Wheel(22))
    }

    constructMotocycle() {
        this.builder.setVehicleType(vehicleType.MOTORCYCLE)
        this.builder.setSeats(1)
        this.builder.setTrasmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(500))
        this.builder.addWeel(new Wheel(22))
        this.builder.addWeel(new Wheel(22))
    }
}