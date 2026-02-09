//filter even numbers
let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(ele => ele % 2 === 0);
console.log(even);

//filter greater than 5
let newNum = numbers.filter(ele => ele > 5);
console.log(newNum);

//num >=3 and num <= 7
let myNum = numbers.filter(ele => ele>=3 && ele<=7);
console.log(myNum);

let links = ['help', 'contact', 'music', 'prim', 'price'];
//links where length of the links >4
let newLinks = links.filter(ele => ele.length > 4);
console.log(newLinks);

//print the words starting with 'amazon'
let footer = ['amazon help', 'contact', 'amazon music', 'amazon prime', 'price'];
let newFooter = footer.filter(ele => ele.trim().startsWith('amazon'));
let primefooter = footer.filter(ele => ele.trim().startsWith('amazon')).filter(ele => ele.includes('prime'));
console.log(newFooter);
console.log(primefooter);

let num = [-85, 0, -9, -89, 92, -67, 78, -95, 42, 88];
let finalNum = num.filter(ele => ele > 0).filter(ele => ele > 70);
console.log(finalNum);