//pending
//fulfilled - resolved -- it will be given to then()
//rejected - error -- it will be given to catch()

let myPromise = new Promise((resolve, reject) => {
    console.log('start the promise...');
    let success = false;
    if (success) {
        resolve('training is done!!');
    }
    else{
        reject('failed to fulfill, Sry!');
    }
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

//error promise:
let errorPromise = new Promise((resolve, reject) => {
    reject('oops...something got failed..');
});

errorPromise.catch(error => {
    console.log(error);
})

//result promise:
let resultPromise = new Promise((resolve, reject)=> {
    resolve(100);
});

resultPromise.then(result => {
    console.log(result);
})

//
let cakePromise = new Promise((resolve, reject) => {
    console.log('start making the cake...');
    let success = false;
    if (success) {
        resolve('cake is ready');
    }
    else{
        reject('sorry, I was sick');
    }
}) 

cakePromise.then(result => {
    console.log(result);
}).catch(reject => {
    console.log(reject);
}).finally(() => {
    console.log('lets have party!!');
})

//chaining promises:this function is returning a promise - resolve
function doubleAmountAfter2Seconds(x){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (x * 2);
        }, 2000);
    })
}
//call the function:
doubleAmountAfter2Seconds(5)
    .then(result =>{
        console.log(result); //10
        return doubleAmountAfter2Seconds(result); //10
    }).then(result => {
        console.log(result);
    })

//Promise.all():
//wait for all promises to resolve or reject
// Promise.all() follows a fail-fast strategy:
// It resolves only if all promises in the iterable resolve.
// It rejects immediately as soon as any one promise rejects.
// When a rejection occurs, the .then() block is skipped, and control jumps directly to .catch().  

let promise1 = new Promise((resolve, reject) => {
    resolve('promise 1 is passed');
})

let promise2 = new Promise((resolve, reject) => {
    resolve('promise 2 is passed');
})

let promise3 = new Promise((resolve, reject) => {
    resolve('promise 3 is passed');
})

Promise.all([promise1, promise2, promise3])
   .then(result => {
    console.log(result);
    console.log('all promises are passed');
   })
   .catch(error => {
    console.log(error);
    console.log('FAILED...');
   });

//Promise.race():
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 is done...');
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 is done...');
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3 is not done...');
    }, 1000);
})

Promise.race([p1, p2, p3])
    .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

// Method	Behavior
// Promise.all()  -->  Fails fast, rejects on first failure
// Promise.allSettled()  -->  Waits for all promises, returns all results
// Promise.race()  -->  Settles on the first promise to settle
// Promise.any()  -->  Resolves on the first fulfilled promise    