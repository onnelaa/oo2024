class Car {
    brand: string;
    model: string;
    fuelConsumption: number; //Keskmine küttekulu, liitrites 100 km kohta

    constructor(brand: string, model: string, fuelConsumption: number) {
        this.brand = brand;
        this.model = model;
        this.fuelConsumption = fuelConsumption;
    }

    calculateFuelCost(distance: number, fuelPrice: number) {
        const fuelCost = (distance / 100) * this.fuelConsumption * fuelPrice;
        console.log(this.brand + ' ' + this.model + ' küttekulu, vahemikus: ' + distance + ' km on ' + fuelCost.toFixed(2) + ' €');
    }
}

//Esimene auto
let car1 = new Car("Toyota", "Corolla", 6.5);
car1.calculateFuelCost(300, 1.5); 
//Väljund 1: Toyota Corolla küttekulu, vahemikus: 300 km on 29.25 €

//Teine auto
let car2 = new Car("Ford", "Mustang", 12);
car2.calculateFuelCost(300, 1.7); 
//Väljund 2: Ford Mustang küttekulu, vahemikus: 300 km on 61.20 €
