
import { BicycleTransport } from "./transport/bicyscleTransport";
import { CarsTransport } from "./transport/carTransport";
import { MotoclycleTransport } from "./transport/motocycleTransport";
import { Transport } from "./transport/Transport";
import { Motoclycles } from "./transport/vihicle/motocycle";


declare var process

let transport: Transport | null = null

if (process.argv.includes('--uber')) {
    transport = new CarsTransport()
} else if (process.argv.includes('--log')) {
    transport = new MotoclycleTransport()
} else if (process.argv.includes('--bi')) {
    transport = new BicycleTransport()
} else {
    console.log('choose one vihicle')
}

if (transport) {
    transport.startTransport()
}
