function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if(success){
                resolve('Naveen');
            }
            else{
                reject('404 not found...');
            }
        }, 3000);
    })
};

async function showUserDetails(){
    try{
    console.log('getting user info...');
    let user = await getUser();
    console.log('User: ' + user);
    }
    catch (error) {
        console.log(error);
    }
}

showUserDetails();