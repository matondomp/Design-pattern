import { VehicleBuilder } from "./builder/VehiceBuilder";
import { Director } from "./director/director";
import { Vehicle } from "./products/Vehicle";

const builder = new VehicleBuilder()
const director = new Director(builder)

director.constructSedanCar()

const sedan: Vehicle = builder.getVehicle()
console.log(`Criando um veículo do tipo: ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas`)

director.constructTruck()

const truck: Vehicle = builder.getVehicle()
console.log(`Criando um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas`)

director.constructMotocycle()
const motocycle: Vehicle = builder.getVehicle()
console.log(`Criando um veículo do tipo: ${motocycle.vehicleType} com ${motocycle.wheelsTotal} rodas`)
