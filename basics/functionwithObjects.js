function getProductDetails(ProductData){
    console.log(ProductData);
    ProductData.price = 2000;
}

let product = {
    name: 'macbook pro',
    brand: 'apple',
    stock: 'in-stock',
    price: 1000
}

getProductDetails(product); //call by ref

console.log(product.price);
