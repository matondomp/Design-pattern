import { Transport } from "./Transport";
import { Motoclycles } from "./vihicle/motocycle";
import Ivihicle from "./vihicle/interface/Ivihicle";

class MotoclycleTransport extends Transport {
    protected createTransport(): Ivihicle {
        return new Motoclycles()
    }

}

export { MotoclycleTransport }