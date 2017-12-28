var faker = require('faker');

let fakeProduct = () => {
    for (let i = 0; i < 10; i++) {
        console.log(faker.commerce.productName());
        console.log(faker.commerce.price('symbol: $'));
    }
}

fakeProduct()