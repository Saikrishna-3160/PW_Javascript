//1. while
//2. for
//3. do-while
//4. for..in
//5. for..of
//6. for..each

//1. while :
//print 1 to 10
let i = 1;
while (i<=10) {
    console.log(i);
    i++;
}

console.log("===================");
//break:
let j = 1;
while(j<=10){
    console.log(j);//12345
    if(j === 5){
        console.log("Bye bro");
        break;
    }
    j++;//5
}

console.log("===================");
//print 10 to 1:
let a = 10;
while(a>=1){
    console.log(a);
    a--;
}


console.log("===================");
while(true){
    console.log("Welcome to Naveen AUtomation Labs");
    break;
}

console.log("================");
let k = 1;
while(true){
    console.log("Welcome to Novotel");
        if (k === 5) {
            console.log("Bye");
            break;
        }
    k++;
}

console.log("==============");
//2. for loop:

for(let m=1; m<=10; m++){
    console.log(m);
}

console.log("==============");
let n = 1;
for(; n<=10; ){
    console.log(n);
    n++;
}

console.log("==============");
//10 to 1:
for(let x = 10; x>=1; x--){
    console.log(x);
}

console.log("==============");
//print all the even numbers btw 1 to 10:
for(let b=1; b<=10; b++){
    if(b%2 === 0){
        console.log(b);
    }
}

console.log("==============");
//print all the odd numbers btw 1 to 10:
for(let b=1; b<=10; b++){
    if(b%2 === 1){
        console.log(b);
    }
}

//use cases for while loop: if number of iterations are not fixed
//1. wait for the webelement: 0 5 10 15 ...
//2. wait for page loading:  5 10 15 20 ...
//3. webtable pagintion
//4. infinite page scrolling
//5. total number of links/pages: 5 10 15 20
//6. calender handling:
//7. carousal handling:
//8. get the data from DB-table:
//9. progress bar: 0 to 100%: time taken
//10. File downloading: time taken to download it
//11. wait for the dynamic alert/popup
//12. EOF: end of file: 1 to n

//use cases of for loop: if number of iterations are fixed
//1. dropdown with fixed values: month, day, year, country, state
//2. exce/csv file: 1 to 10 rows
//3. Array/List : 1 to10
//4. flight/movie/bus booking: seats: 120 : 0 to 119
//5. Menu Items/Category:


console.log("==================");
//3. do-while:
//1 to 10:
let p = 1;
do{
    //p++; //2...11
    console.log(p);
    p++; //...10
}
while (p <= 10);

console.log("==================");

//let isElementDisplayed = false;
do{
    console.log("check the element");
}
while(false);

console.log("==================");
let d = 1;
do{
    console.log(d);
    d++
}while(d>=10); //2>=10 = false

//use cases of do-while loop:
//land on the pae
//check the element in the beginning itself -at least once
//if the element not present: then you start the loop
//if the element is present: click on element and break


