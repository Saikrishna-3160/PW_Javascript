let browser = "  CHROME ";

switch (browser.toLowerCase().trim()) {
    case "chrome":
        console.log("Chrome is launched");
        break;
    case "edge":
        console.log("Edge is launched");
        break;    
    case "safari":
        console.log("Safari is launched");
        break;
    case "firefox":
        console.log("Firefox is launched");
        break;    
    default:
        console.log("plz pass the right browser " + browser);
        break;
    case "opera":
        console.log("Opera is launched");
        break;    
}

console.log("================================");

let marks = 100;

switch (80) {
    case 90:
        console.log("hi");
        break;
    case 80:
        console.log("hello");
        break;
    case 100:
        console.log("how r u");
        break;
    default:
        console.log("bye");
        break;
}

console.log("========================");

let isActive = true;

switch (isActive) {
    case true:
        console.log("Pass");
        break;
    case false:
        console.log("Fail");
        break;
    default:
        console.log("no result");
        break;
}