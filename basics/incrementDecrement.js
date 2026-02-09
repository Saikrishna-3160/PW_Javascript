//1. post increment : ++
let a = 1;
let b = a++;
console.log(a);//2
console.log(b);//1

let m = -99;
let n = m++;
console.log(m);//-98
console.log(n);//-99

//2. pre increment: ++
let c = 1;
let d = ++c;
console.log(c);//2
console.log(d);//2

let x = -999;
let y = ++x;
console.log(x);//-998
console.log(y);//-998

//3. post decrement: --
let p = 2;
let q = p--;
console.log(p);//1
console.log(q);//2

let k = -89;
let h = k--;
console.log(k);//-90
console.log(h);//-89

//4. pre decrement: --
let v = 2;
let z = --v;
console.log(v);//1
console.log(z);//1

let total = 100;
console.log(total++);//100
console.log(total);//101

let num = 1000;
console.log(++num);//1001
console.log(num);//1001

let st = '5';//6
console.log(++st);

let tr = '5';
console.log(tr--);//5


console.log('===============');

let i = 11;
let j = i++ + ++i;
    // 
console.log(i);//13
console.log(j);//24

console.log('===============');

let a1 = 11;
let b1 = 22;
let c1 = a1 + b1 + a1++ + b1++ + ++a1 + ++b1;
		
console.log(a1);//13
console.log(b1);//24
console.log(c1);//103

console.log('===============');
let s=0;
let w = s++ - --s + ++s - s--;

console.log(s);//0
console.log(w);//0

console.log('===============');

let m1 = 0;
let n1 = 0;
let p1 = --m1 * --n1 * n1-- * m1--;

console.log(m1);//-2
console.log(n1);//-2
console.log(p1);//1

console.log('===============');

let d1 = 1.5;
let D1 = 2.5;

let res = d1++ + ++D1;
console.log(res);//5
console.log(d1);//2.5
console.log(D1);//3.5
