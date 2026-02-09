let product = ['macbook', 'samsung', 'iphone', 'sim', 'keyboard'];

//forEach method

// product.forEach(element => {
//     console.log(element);
//     if(element === 'sim'){
//         console.log(`i'm using airtel sim`);
//     }
// });

let flag = product.some(ele => {
    console.log(ele);
    if (ele === 'sim') {
        console.log(`i'm using airtel sim`);
        return true;
    }
});

console.log(flag);

