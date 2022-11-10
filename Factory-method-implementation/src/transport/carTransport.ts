import { Transport } from "./Transport";
import { Cars } from "./vihicle/car";
import Ivihicle from "./vihicle/interface/Ivihicle";

class CarsTransport extends Transport {
    protected createTransport(): Ivihicle {
        return new Cars()
    }

}

export { CarsTransport }