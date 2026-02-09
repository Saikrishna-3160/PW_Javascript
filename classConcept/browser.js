class Browser{

    launchBrowser(){
        console.log('launching the chrome browser..');
        this.#checkRAM();
        this.#checkOSCompatible();
        this.#checkVersionUpdate();
        this.#checkNewUpdates();
        console.log('chrome is launched');
    }

    #checkRAM(){
        console.log('checking system RAM');
    }

    #checkVersionUpdate(){
        console.log('checking version of the browser')
    }

    #checkOSCompatible(){
        console.log('OS is compatible..');
    }

    #checkNewUpdates(){
        console.log('checking new updates from market place..');
    }
}

//user is trying to open the browser
let obj = new Browser();
obj.launchBrowser();

