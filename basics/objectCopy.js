let user = {
    name: 'naveen',
    city: 'LA'
};

let person = {...user}; //new object created with same values as {user}
console.log(person);

person.city = 'Pune';
console.log(person);

console.log(user);

let u1 = {
    name: 'tom',
    age: 30
}

let u2 = u1; //one object having 2 references
console.log(u1);
console.log(u2);

u2.age = 50;
console.log(u1);
console.log(u2);
