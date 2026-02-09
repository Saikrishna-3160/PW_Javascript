//Asynchronous function to get coffee: it can be async also but its not mandatory to write
async function startMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1. Machine is started..');
            resolve();
        }, 2000);
    })
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. Water is boiled');
            resolve();
        }, 3000);
    })
}

function addCoffeePowder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. Coffee powder added');
            resolve();
        }, 5000);
    })
}

function pourInCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log('4. Poured in cup');
            resolve();
        }, 2000);
    });
}

function serveCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('5. Coffee served');
            resolve();
        }, 500);
    })
}

// //calling the function using .then() chaining:
// startMachine()
//    .then(boilWater)
//    .then(addCoffeePowder)
//    .then(pourInCup)
//    .then(serveCoffee)
//    .then(result => {
//     console.log('enjoy your coffee..');
//    })

async function makeCoffee() {
    //async steps:
    await startMachine();
    await boilWater();
    await addCoffeePowder();
    await pourInCup();
    await serveCoffee();
    console.log('enjoy your coffeee!!');
}

makeCoffee();

//AC: fetch the data from API:
//GET call: url
//response json:
//read the json:

async function fetchData() {
    console.log('fetching the data...');
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log('title: ' + data.title);   
}

fetchData();