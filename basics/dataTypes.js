//number:
//size: 8 bytes = 64 bits
let a = 10;
let b = 12.33;
let c = 100;
console.log(a);
//typeof method will print the datatype of the variable
console.log(typeof(a));
console.log(typeof(b));


//string:
//size: 2 bytes for each character
let empname = 'Sai krishna';
let browser = "chrome";
let lang = 'javascript';
let num = '100';
let gender = 'm';
console.log(typeof(empname));
console.log(typeof(lang));
console.log(typeof(num));

//boolean:
//size: 4 bytes = 32 bits
let flag = true;
let isActive = false;
console.log(typeof(isActive));

//undefined
//not fixed, depends on the JS engine; may vary from 0 to 4 bytes
let p;
let q = undefined;
console.log(p);
console.log(typeof(p));
console.log(q);
console.log(typeof(q));

//null: may vary from 0 to 4 bytes
let driver = null;
console.log(driver);
console.log(typeof(driver)); //typeof null - object - existing in JS

let username = "";
console.log(typeof(username));

let testing = 10;
testing = "naveen";
testing = true;
console.log(testing);

// console.log(dg);
// let dg = 10;
