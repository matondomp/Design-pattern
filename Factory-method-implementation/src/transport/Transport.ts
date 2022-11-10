import Ivihicle from "./vihicle/interface/Ivihicle";

abstract class Transport {
    startTransport() {
        let vihicle = this.createTransport()
        vihicle.startRoute()
    }
    protected abstract createTransport(): Ivihicle
}

export { Transport }

