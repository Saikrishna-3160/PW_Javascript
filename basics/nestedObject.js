let user = {
    name: 'tom',
    age: 30,
    address: {
        city: 'bangalore',
        zip: 56011,
        area: {
            areaname: 'BTM Layout'
        }
    }
};

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.area.areaname);
console.log("===============");

// for(let key in user){
//     console.log(user[key]);
//     console.log(user.address[key]);
//     console.log(user.address.area[key]);
// }


