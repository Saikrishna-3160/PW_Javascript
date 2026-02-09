function print(name = 'sai krishna'){
    console.log('hi ' + name);
}

print();
print('Shahrukh Khan');

function multiply(a = 0, b = 0){
    console.log(a*b);
}

multiply();
multiply(2, 3);
multiply(5);

console.log("=================");

/**
 * 
 * @param {String} browserName 
 */
function openBrowser(browserName = 'chrome'){
    switch (browserName) {
        case 'edge':
            console.log('open edge')
            break;
        case 'firefox':
            console.log('open firefox')
            break;
        case 'chrome':
            console.log('open chrome');
            break;    
        default:
            console.log('invalid browser provided, the default browser chrome will be launched');
            break;
    }
}

openBrowser();
openBrowser('edge');
openBrowser('ie');

console.log("================");
//env: QA, Dev, Stage, UAT, PROD

/**
 * 
 * @param {String} envName 
 */
function runTest(envName = 'qa'){
    switch (envName.trim().toLowerCase()) {
        case 'qa':
            console.log('run tests on QA env');
            break;
        case 'dev':
            console.log('run tests on dev env');
            break;
        case 'stage':
            console.log('run tests on Stage env');
            break;
        case 'prod':
            console.log('run tests on Prod env');
            break;        
        default:
            console.log("===INVALID ENV " + envName);
            console.log('hence running tests on default: QA env');
            break;
    }
}

runTest();
runTest('DEV');
runTest('UAT');