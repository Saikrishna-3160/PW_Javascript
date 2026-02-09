let user = {
    name: 'pradeep',
    age: 30,
    status: 'active',
    isActive: true,
    name: 'naveen'
};

let userKeys = Object.keys(user); //returns only the object keys inside an array
console.log(userKeys);
console.log(userKeys.length);

let userValues = Object.values(user); //returns only the object values inside an array
console.log(userValues);
console.log(userValues.length);

let pair = Object.entries(user); //returns the object keys & values inside an array
console.log(pair);
console.log(pair.length);

//print the key on the basis of value
for(let e in user){
    if(user[e] === 'active'){
        console.log(e);
    }
}