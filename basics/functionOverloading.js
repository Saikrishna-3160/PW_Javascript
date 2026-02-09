//function overloading is not possible in JS

// function login(){
//     console.log('login to app1')
// }

// function login(a){
//     console.log('login to app2' + a)
// }

//login(10); //SyntaxError: Identifier 'login' has already been declared
//JS ES6 -- 2015

//login with: Nothing
//login with: Username, Password
//login with: Username, Password, OTP
function login(){
    console.log('login to app');
}

function loginwithUnPwd(un, pwd){
    console.log('login with : ' + un + " " + pwd);
}

function loginwithUnPwdOTP(un, pwd, otp){
    console.log('login with : ' + un + " " + pwd + " " + otp);
}

loginwithUnPwdOTP('anu', 'anu', 9898);

console.log("=================");

//search:
//1. name
//2. name, price
//3. name, price, color
//4. name, price, color, seller

function search(){
    if (arguments.length === 1){
    console.log(`You have searched for product : ${arguments[0]}`);
    }
    else if(arguments.length === 2){
        console.log(`searched product and price : ${arguments[0]} and ${arguments[1]}`);
    }
    else if(arguments.length === 3){
        console.log(`searched product, price, and color : ${arguments[0]} and ${arguments[1]} and ${arguments[2]}`);
    }
    else if(arguments.length === 4){
        console.log(`searched product, price, color, and seller : ${arguments[0]} and ${arguments[1]} and ${arguments[2]} and ${arguments[3]}`);
    }
    else{
        console.log("===Product NOT FOUND===")
    }
}

search('Mac pro');
search('Samsung', 20000);
search('Hawaii', 50000, 'Black');
search('Apple', 100000, 'Silver', 'IOS');
search();