class Vehicles {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}


class Cars extends Vehicle {
    constructor(name: string) {
        super(name);
    }

    putGasoline() {
        console.log("....put gasoline....");   
    }
}