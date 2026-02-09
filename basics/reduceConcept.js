let numbers = [1, 2, 3, 4, 5]; //total = 0, total = total+num => 0+1+2+3+4+5 = 15
//sum of all numbers: 15
let sum = numbers.reduce((total, num) => total = total+num, 0);
console.log(sum);

//multiply all the numbers: 120
let multiply = numbers.reduce((mul, num) => mul*num, 1);
console.log(multiply);

let dict = ['hello', 'javascript', 'playwright'];
//hello javascript playwright
let newDict = dict.reduce((result, ele) => result + ' ' + ele);
console.log(newDict);

//hello,javascript,playwright
newDict = dict.reduce((result, ele) => result + ',' + ele);
console.log(newDict);

let marks = [85, 90, 78, 92, 88];
let average = marks.reduce((avg, num) => avg + num, 0) / marks.length;
console.log(average);
