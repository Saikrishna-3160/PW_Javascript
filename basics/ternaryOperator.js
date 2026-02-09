//condition ? expressionIfTrue : expressionIfFalse

let age = 20;
let result = age > 18 ? "Adult" : "Minor";
console.log(result);

let a = 10;
a > 5 ? console.log("Hii") : console.log("Bye");

let browser = "firefox";
browser === "chrome" ? console.log("run chrome") : browser === "firefox" ? console.log("run firefox") : console.log("browser not found");

let isLoggedin = true;
isLoggedin ? showDashboard() : redirectToLogin();

function showDashboard(){
    console.log("Welcome to Dashboard");
}

function redirectToLogin(){
    console.log("go to login page");
}

//to not print in new line
process.stdout.write("Hello coding");
console.log("Bye coding");
process.stdout.write(123+""+"\n");
process.stdout.write((123).toString());
process.stdout.write(String(123));
process.stdout.write('123');

console.log("----------------");

let path1 = 'C:\\Users\\Documents\\file.txt';
let path2 = 'C:\Users\Documents\file.txt';
//let path2 = String.raw`C:\\Users\\Documents\\file.txt`;
console.log(path1);
console.log(path2);
// /**
// \U becomes just U (invalid escape, treated as literal)
// \D becomes just D (invalid escape, treated as literal)
// \f becomes a form feed character (valid escape sequence)
// \t becomes a tab character (valid escape sequence)
//  */