//addition (+)/ concat
console.log(1 + 1); //2
console.log(1 + '1'); //11
console.log('1' + '1'); //11

//- substraction
console.log(1 - '1'); //convert string to number--> 1 -1 = 0
console.log('5' - 2); //3
console.log('5' - '2'); //3
console.log('5' - "hello"); //NaN - Not a number
console.log('naveen' - 10); //NaN
console.log('naveen' - 'automation'); //NaN

//* multiplication
console.log(2 * 3); //6
console.log('2' * 3); //6
console.log('naveen' * 'automation' - '2'); //NaN

let price = '1000';
console.log(price + 5); //concat: 10005
console.log(price - 5); //1000-5 = 995

// / division:
console.log(6 / 2); //3
console.log('6' / 2); //6/2=3
console.log('6' / '2'); //6/2=3
console.log(9 / 2); //4.5
console.log(9.0 / 2); //4.5
console.log(9 / 2.0); //4.5
console.log(9 / 0); //Infinity
console.log(0 / 9); //0
console.log(0 / 0); //NaN
console.log(0.0 / 0); //NaN
console.log(0.0 / 0.0); //NaN

//modulus % - remainder
console.log(8 % 2); //0
console.log(9 % 2); //1
console.log('8' % 2); //8%2=0
console.log('9' % '2'); //9%2 = 1

console.log('800' + '200'); //800200

//power - exponential: **
console.log(2 ** 3); //2*2*2 = 8
console.log(3 ** '2'); //3^2 = 9

//+ : unaryPlus operator
console.log(+'45' + 5); //convert string to number - 50
console.log(+'800' + +'200'); //1000

//- : unary negotion operator
console.log(-'42' + 5); //-42+5 = -37
console.log(-"hello"); //NaN
console.log(+800 +200); //1000

//console.log(++100); //100+1
console.log(+'100'); //string to number conversion: '100' --> 100