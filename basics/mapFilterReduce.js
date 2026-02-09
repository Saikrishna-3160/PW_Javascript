let score = [85, 92, 67, 78, 95, 43, 88, 76, 91, 82];
//get the passing score (score>=70), add 5 numbers as bonus, then calculate the average

let result = score.filter(ele => ele >= 70)
        .map(ele => ele + 5)
        .reduce((avg, ele) => avg + ele, 0)/score.filter(ele => ele >= 70).length;
//let finalScore = score.filter(ele => ele>=70).map(ele => ele + 5);
//let result = finalScore.reduce((avg, ele) => avg + ele, 0)/finalScore.length;
console.log(result);

let prices = [25, 60, 15, 80, 35, 120, 45, 90];
//get the lower price(price<50), apply 10% discount, calculate total
let lowPrice = prices.filter(ele => ele < 50)
        .map(ele => ele - (ele/10)) //ele * 0.9
        .reduce((total, ele) => total + ele, 0); 
console.log(lowPrice); 

let words = ['git', 'js', 'playwright', 'selenium', 'cypress'];
//get the long words (length>4)-> convert to uppercase -> join -
let finalwords = words.filter(ele => ele.length > 4)
        .map(ele => ele.toUpperCase())
        .reduce((joined, ele) => joined + ' ' + ele);
console.log(finalwords);    

