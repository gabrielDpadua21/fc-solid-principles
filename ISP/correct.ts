interface Veicules {
    run(): void;
}

interface Motor {
    putsGasoline(): void;
}

class Cars implements Veicules, Motor {
    run(): void {
        console.log("Car is running");
    }

    putsGasoline(): void {
        console.log("Car is putting gasoline");
    }
}

class Bikes implements Veicules {
    run(): void {
        console.log("Bike is running");
    }
}