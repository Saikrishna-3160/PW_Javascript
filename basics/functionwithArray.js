//WAF:
//name: getEmpDevices(empName)
//empName: string
//return: Array --> collection of all the devices for an employee

/**
 * 
 * @param {String} empName 
 */
function getEmpDevices(empName){
    console.log('emp name : ' + empName);
    let devices = [];
    // switch (empName.trim().toLowerCase()) {
    //     case 'pradeep':
    //         devices.push('macbook pro');
    //         devices.push('ipad');
    //         devices.push('airtel sim');
    //         break;
    //     case 'ashu':
    //         devices.push('HP windows laptop', 'samsung phone xs');
    //         break;
    //     case 'anu':
    //         devices.push('mouse');
    //         break;
    //     default:
    //         console.log('===invalid emp name===')
    //         break;
    // }
    // return devices;
    if (empName === 'pradeep') {
        devices.push('macbook pro', 'ipad', 'airtel sim');
        return devices;
    }else if (empName === 'ashu') {
        devices.push('HP windows laptop', 'samsung phone xs');
        return devices;
    }else if (empName === 'anu') {
        devices.push('mouse');
        return devices;
    } else {
        console.log('===invalid emp name===');
        return devices;
    } 
}

let devicesVal = getEmpDevices('ashu');
console.log(devicesVal);