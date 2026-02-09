//callback : passing the function name to anotherfunction as a parameter
//call a function by passing the function name

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let div = (a, b) => a / b;
let mul = (a, b) => a * b;

//calculator function
function calculator(callback, a, b) {
    console.log('using two numbers');
   return callback(a, b); //mul(a,b)
}

//user is calling the function: calculator
let result = calculator(mul, 10, 20); //call by function and values
console.log(result);

result = calculator(sub, 10, 20);
console.log(result);

result = calculator(sum, 10, 20);
console.log(result);

result = calculator(div, 10, 20);
console.log(result);

console.log("====================");

let addition = function (a, b){
    return a+b;
}

let substraction = function (a, b){
    return a-b;
}

let multiplication = function (a, b){
    return a*b;
}

let division = function (a, b){
    return a/b;
}

//actual function: performCalculator
function performCalculator(a, b, funcName) {
    console.log('performing some calculations here with : ' + funcName.name);
    return funcName(a, b);
}

//user is calling:
let res = performCalculator(10, 30, addition);
console.log(res);

console.log("=================");

function summing(a, b){
    return a + b;
}

function calc (a, b, funcName) {
    return funcName (a, b);
}

let t1 = calc(10, 20, summing);
console.log(t1);

