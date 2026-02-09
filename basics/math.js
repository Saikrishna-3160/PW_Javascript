let pi = 3.14;

let name = 'tom';
let age = 30;

function add(a, b){
    console.log(a+b);
    return a + b;
}

function pop(){
    console.log('pop');
}

export {pi, name, add, pop};

//only default prop, func, var, object, array you can export
//duplicate default properties are not allowed
//export default prop can be renamed also in the import statement of another class 
// export default function testapi(){
//     console.log('testing my apis...');
// }

let price = 100;
export default price;


// console.log(pi);
// console.log(add(10,20));