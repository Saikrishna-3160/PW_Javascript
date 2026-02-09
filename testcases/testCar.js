import { Car, BMW } from "../inheritance/inheritance.js";

let bm = new BMW();

bm.start(); //overriden
bm.refuel(); //inherited
bm.stop(); //inherited
bm.autoParking(); //individual
console.log(bm.speed); //individual speed
BMW.billing(); //static method
bm.loading();

console.log("------------------");

let cr = new Car();
cr.start();
cr.refuel();
//cr.autoParking(); -- not allowed to child class properties
console.log(cr.speed); //individual speed
Car.billing();
cr.loading();

//
//IS - A Relationship: BMW IS-A Car IS-A Vehicle: BMW IS-A Vehicle

console.log('---------------');
//top casting/down casting in JS: NA

let b1 = new BMW();
b1.start();