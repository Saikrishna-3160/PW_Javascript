let numbers = [1, 2, 3, 4, 5];
let newNum = numbers.map(ele => ele + 5);
console.log(newNum);
console.log(numbers);

let myNum = numbers.map(ele => ele * ele);
console.log(myNum);

let words = ['hello', 'world', 'javascript', 'playwright'];
let upper = words.map(ele => ele.toUpperCase());
console.log(upper);

//get the fiest letter of each word:
let firstletter = words.map(ele => ele[0]);
console.log(firstletter);

//hello! world!
let newWords = words.map(ele => ele + '!');
console.log(newWords);

let links = ['help', 'contact', 'music', 'prime', 'price'];
let footerLinks = links.map(ele => 'amazon ' + ele);
console.log(footerLinks);