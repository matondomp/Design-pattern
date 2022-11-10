import { Engine } from "../components/Engine"
import { Transmission } from "../components/Transmission"
import { Wheel } from "../components/wheel"
import { vehicleType } from "../components/vehicleType"
import { Vehicle } from "../products/Vehicle"

export interface IBuilder {
    reset(): void
    getVehicle(): Vehicle
    addWeel(wheel: Wheel)
    setVehicleType(vehicleType: vehicleType)
    setEngine(engine: Engine)
    setTrasmission(transmission: Transmission)
    setSeats(seats: number);
}