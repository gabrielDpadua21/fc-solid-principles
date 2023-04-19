interface Veicule {
    run(): void;
    putsGasoline(): void;
}

class Car implements Veicule {
    run(): void {
        console.log("Car is running");
    }

    putsGasoline(): void {
        console.log("Car is putting gasoline");
    }
}

class Bike implements Veicule {
    run(): void {
        console.log("Bike is running");
    }

    putsGasoline(): void {
        console.log("error");
    }
}