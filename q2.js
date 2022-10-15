// clCreate an automobile class. The class will have name, model, color, type: automatic or manual properties and create different methods e-g: start() logs car is ready for drive, opendoor() logs door is open
// Create child classes of Automobile Car, Truck, Bus these classes also have extra information like doors property, maxspeed.ass Automobile{




class Automobile{
    constructor (name , model, color, type){
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;

    }
    start(){
        
        console.log("The car is ready for drive ");

    }

    opendoor(){
        console.log("The car door is open");
    }
    display(){
        console.log("name : "  + this.name);
        console.log("model : "  + this.model);
        console.log("color: "  + this.color);
        console.log("type : "  + this.type);

    }

}

class Car extends Automobile {

    constructor (name , model, color, type, doors, maxspeed){
        super(name , model, color, type);
        this.doors = doors;
        this.maxspeed = maxspeed;
    }
    carinfo(){
        console.log("***************Car details **********************");
        console.log("Doors : "  + this.doors);
        console.log("maxspeed : "  + this.maxspeed);

    }
}

class Truck extends Automobile {

    constructor(name , model, color, type, doors, maxspeed){
        super(name , model, color, type);
        this.doors = doors;
        this.maxspeed = maxspeed;

    }
    truckinfo(){
        console.log("***************Truck details **********************");
        console.log("Doors : "  + this.doors);
        console.log("maxspeed : "  + this.maxspeed);

    }
}

const car =  new Car("audi", "2022", "black", "auto", 4, 200);
car.display();
car.carinfo();
car.opendoor();
car.start();

const truck =  new Truck("Faw", "2022", "white", "manual", 2, 120);
truck.display();
truck.truckinfo();
truck.opendoor();
truck.start();





