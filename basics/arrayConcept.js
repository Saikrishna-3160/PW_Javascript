//Array: collection of multiple elements in the single varaiable
//[]
//10 20 30 40

let n = []; //empty array
console.log(n.length);
console.log(n);

let arr = [10, 20, 30, 40]; //Array Literals: 0-3: 4
console.log(arr.length);
console.log(arr[0]);
console.log(arr[-1]);
console.log(arr[3]);
console.log(arr[4]);

//mixed data types:
let empData = ['manisha', 30, 23.33, true, 'f']; //0-4: 5
console.log(empData.length);
console.log(empData);

//using the Array Constructor:
let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test);
console.log(test[0]);

//dynamic array: JSarrays are dynamic in nature
console.log("---------------");
let num = [1, 2, 3]; //3
console.log(num.length);
num.push(4); //add at the end
console.log(num);
num.push('chrome');
console.log(num);

//add to the beginning:
num.unshift('firefox');
console.log(num);

//remove the element:
let browser1 = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser1.length);
console.log(browser1);
//remove from end: using pop():
browser1.pop();
console.log(browser1);

//remove from the beginning: using shift():
browser1.shift(); //chrome
console.log(browser1);

browser1.shift(); //firefox
console.log(browser1);

console.log("--------------");
//print all the values from an array: using loops:

let myBrowser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];//0-4: 5

//1. index for loop:
for(let i=0; i<myBrowser.length; i++){
    console.log(myBrowser[i]);
    if(myBrowser[i] === 'opera'){
        console.log('this browser is not supported now..');
        break;
    }
}

console.log("---------------");

//2. for..of loop:
for(let ele of myBrowser){
    console.log(ele);
    if(ele === 'safari'){
        console.log('run it in headless mode');
        break;
    }
}

console.log("================");

//print in the reverse order using for loop
let emp = ['ravi', 'abhi', 'pooja', 'dinesh', 'sandeep'];//0-4: 5
for(let i=emp.length-1; i>=0; i--){
    console.log(emp[i]);
}

//print in the reverse order using for..of loop
console.log("================");
for(let i of emp.keys()){
    console.log(emp[emp.length - 1 - i]);
}

//for..in loop: print th index
for(let ele in emp){
    console.log(ele+" = "+ emp[ele]);
}

console.log('==========');
//print the array elements in reverse
let counter = emp.length - 1; //4
for (let e in emp) {
    e = counter;//4
    console.log(emp[e]);
    counter--;
}

//reverse(): reverse the values in array
let reverseArray = emp.reverse();
console.log(reverseArray);

//join:
let words = ['hello', 'playwright', 'with test', 'automation'];
let sentence = words.join(' ');
console.log(sentence); //array to csv

console.log("================");
//copying and combining using .. (spread operator)
let first = [1, 2, 3];
let second = [...first]; //same values of array1 will be populated in the array2
console.log(second);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let result = arr1.concat(arr2);
console.log(result);