class Vehicle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    
    putGasoline() {
     console.log("....put gasoline....");   
    }
}


class Car extends Vehicle {
    constructor(name: string) {
        super(name);
    }
}

class EletricCar extends Vehicle {
    constructor(name: string) {
        super(name);
    }
}