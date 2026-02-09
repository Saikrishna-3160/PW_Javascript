//IIFE - Immediately invoked function expresssion: no name --> annonymous function
//this doesn't support function expression
//but I can return something from IIFE
//we have to store in a variable if we return something from IIFE

(function(){
    console.log('start the server');
})();

(function(name){
    console.log('start the server : ' + name);
})('tomcat');


let newEmpName = (function(empName){
    console.log('Employee Name is : ' + empName);
    return empName.toUpperCase();
})('Salman');

console.log(newEmpName);