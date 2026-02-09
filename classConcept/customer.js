class Car{
    //name - public
    //price - private
    #price;
    constructor(name, price){
        this.name = name;
        this.#price = price;
    }

    //public
    testDrive(){
        console.log(this.#price);
    }

    //public getter
    getPrice() {
        return this.#price;
    }

    //public setter
    setPrice(price){
        this.#price = price;
    }

    //OOP: Encapsulation: private data of a class can be accessedusing public method

}

let c1 = new Car('Defender', 2.5);
console.log(c1.name);
//console.log(c1.#price); -- error coz of private(#)
c1.testDrive();

c1.setPrice(3);
let price = c1.getPrice();
console.log(price); //2.5

// let newPrice = c1.setPrice(3);
// console.log(newPrice);
