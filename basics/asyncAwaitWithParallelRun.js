async function getUser() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve({id: 1, name: 'vikas'});
        }, 1500);
    })
}

async function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {orderId: 101, item: 'laptop'},
                {orderId: 102, item: 'Keyboard'}
            ])
        }, 2000)
    })
}

//case1:
//run these two methods parallel mode:
//2 tasks: parallel execution
// let myUser = getUser();
// let myOrders = getOrders();

//after resolved, fetch the value using Promise.all()
// let [user, orders] = await Promise.all([myUser, myOrders]);
// console.log(user);
// console.log(orders);

// let data = await Promise.all([myUser, myOrders]);
// console.log(data);

//total time taken: max(1.5, 2) --> 2 secs

//case2: if I use await -- Sequential execution
// let myUser = await getUser(); //1.5 --> 1.5
// let myOrders = await getOrders(); //2 --> 2
// let data = await Promise.all([myUser, myOrders]);
//Total time taken: 1.5+2 = 3.5 secs
//console.log(data);

//3. dont wait for anything, just proceed:
function sendEmailNotification(emailId){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(`email has been sent to ${emailId}`);
            resolve(true);
        }, 5000);
    })
};

//calling it:
await sendEmailNotification('Aditya_testing@gmail.com');
//console.log(isEmailSent);
console.log('checkout the order...DONE!!');