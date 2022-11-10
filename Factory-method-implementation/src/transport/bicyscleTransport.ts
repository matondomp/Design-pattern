import { Transport } from "./Transport";
import { Bicycle } from "./vihicle/Biscycle";
import Ivihicle from "./vihicle/interface/Ivihicle";

class BicycleTransport extends Transport {
    protected createTransport(): Ivihicle {
        return new Bicycle()
    }
}

export { BicycleTransport }

