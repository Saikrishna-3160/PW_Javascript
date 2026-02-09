//object: object reference name
//properties: key-value
//function(behaviour) - action

let user = {
    name: 'subodh',
    age: 30,
    salary: 34.55,

    coding: function code(){
        console.log(`${this.name} is writing the code using js`);
    },

    printing(ctc){
        console.log(`your current ctc is :` + ctc);
        let finalSal = ctc + this.salary;
        return finalSal;
    },

    /**
     * 
     * @param {string} sportsName 
     */
    playing: function(sportsName){
        console.log(`${user.name} is playing ${sportsName}`);
    },

    /**
     * 
     * @param {number} speed 
     */
    walking: (speed) => { //this keyword will not work in arrow function
        console.log(`${user.name} is walking with ${speed} km/hr`);
    }
    
}

console.log(user.name);
console.log(user['age']);
user.coding();
user['coding']();
user.printing(20);
user.playing('cricket');
user.walking(10);

console.log("==============");

let loginPage = {
    emailIdXpath : `//input[@id='username']`,
    passwordXpath : `//input[@id='password']`,
    loginBtnXpath : `//input[@id='login']`,
    
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     */
    loginToApp(username, password){
        console.log(`entering ${username} into the element : ${this.emailIdXpath}`);
        console.log(`entering ${password} into the element : ${this.passwordXpath}`);
        console.log(`click on login button using element : ${this.loginBtnXpath}`);
        console.log(`login is done using : ${username} and ${password}`);
        console.log(user.name + " : " + user.age);

        user.coding();
    }
}

console.log(loginPage.emailIdXpath);
loginPage.loginToApp('Saik', 'sk3160');
