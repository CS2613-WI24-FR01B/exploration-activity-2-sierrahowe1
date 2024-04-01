import { faker } from '@faker-js/faker';

function createProducts(value) {
    var products = [];
    for(let i = 0; i< value; i++) {
        var product = {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            

        };
        products.push(product);
    }
    return products;
}

function createCustomers(value) {
    const customers = [];
    for(let i = 0; i < value; i++) {
        const customer = {
            uniqueId: i + 100,
            name: faker.person.firstName(),
            email: faker.internet.email(),
            address: {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                country: faker.location.country()
            }
        };
        customers.push(customer);
    }
    return customers;
}

function printProducts(products) {
    console.log(" __________Product Information______________");
    for(let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + "\nPrice: " + products[i].price);
    }
}

function printCustomers(customers) {
    console.log("___________Customer Information_____________");
    for(let i = 0; i < customers.length; i++) {
        console.log("Unique ID: " + customers[i].uniqueId + "\nFirst Name: " + customers[i].name + "\nEmail Address: " + customers[i].email);
        console.log("Address: \n");
        console.log("Street: " + customers[i].address.street + "\n");
        console.log("City: " + customers[i].address.city + "\n");
        console.log("State: " + customers[i].address.state + "\n");
        console.log("Country: " + customers[i].address.country + "\n");
    }
}

const valueProducts = 15;
const valueCustomers = 10;

const products = createProducts(valueProducts);
const customers = createCustomers(valueCustomers);

printProducts(products);
printCustomers(customers);
