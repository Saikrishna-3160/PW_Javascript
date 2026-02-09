//=> arrow function -- no function name -- also called as annonymous function

let print = () => {
    console.log("Hello world!");
}

print();

console.log("==============");

let say = () => console.log('Hello playwright');
say();

console.log("===============");

let evenNumber = () => {
    let num = '';
    for (let i=1; i<=10; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
    return num;
}

let result = evenNumber();
console.log(result);

console.log("=================");

let sum = (a, b) => a+b;
let sum1 = sum(10, 20);
console.log(sum1);

console.log("=================");
//arrow function with one param: can use ()
let even = (num) => num % 2 === 0;
let e1 = even(10);
console.log(e1);

console.log("=================");

//arrow function with one param: no need to use ()
let pop = number => number * 2;
let r1 = pop(100);
console.log(r1);

//arrow function with two params
let sub = (a, b) => a-b;
let sb = sub(10, 20);
console.log(sb);

console.log('================');

let bye = e => console.log(e);
bye('naveen');

console.log("===============");

//external name: openBrowser
//internal name: no name --> annonymous
//param - 1 param -> browserName
//return : boolean : true/false
let openBrowser = browserName => {
    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;

        default:
            console.log('invalid browser');
            return false;
    }
}

let flag = openBrowser('chrome');
console.log(flag);

console.log("==================");

let checkEnv = (envName, browserName) => {
    console.log(browserName);
    console.log(envName);
    return 0;
}

let n = checkEnv('QA', 125.11);
console.log(n);
