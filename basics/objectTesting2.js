//creating the object using the class: latest JS: Es6
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

//create the object of Product using new keyword:
//constructor will be called when you create the object
let p1 = new Product('macbook', 1000);
console.log(p1.name);
console.log(p1.price);

//create an object without reference name:
new Product ('iphone', 500);
new Product ('samsung', 1500);

let p2 = new Product('keyboard', 200);
console.log(p2);
p2.color = 'red';
console.log(p2);

//there is no gc method in JS: