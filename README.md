[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RPDAFNpj)
# EA2
## Which package/library does the sample program demostrate?
- For this exploration activity I selected the Faker library which is used to generate massive amounts of fake data such as names and addresses for development purposes. My sample program uses various different functionalities involved with Faker which begin importing Faker with the line "var faker = require("faker");.Then we can start creating variables for our fake data using the following sample code: "var randomName = faker.name.findName();". This is responsible for generating a random name and storing it as "randomName". Other than findName(), Faker includes various different built in methods to generate different fake data including, country() which generates a random country, productName() which will generate a random product name under the commerce catagory, price() which generates a random price [2]. For these methods to work we would use their catagories to access them. To access the findName() method as seen previously, the catagory would be "name", for country() the catagory would be "address", productName() would be commerce as well as price(). Using different methods of this library and the basic functions of javascript, you can interesting data like the one shown in the sample program.
  
## How does someone run your program?
- This program first must be installed using the command 'npm install @faker-js/faker --save-dev' in the terminal[1]. You must also import the library using the import statement 'import { faker } from '@faker-js/faker';'.
After the package is installed, the program can be ran as a normal JavaScript program, 'node filename.js'

- ## What purpose does your program serve?
- Faker is used to generate fake/random data. Its main purpose is to be in use by developers in order for them to create sample data for testing, prototyping, or developing their system. My program is definitely for technical purposes and could be used in a testing environment.

## What would be some sample input/output?
- Sample input/output:
<img width="1920" alt="Screenshot 2024-04-01 at 4 14 36 PM" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-sierrahowe1/assets/155486188/7e0b3846-e4d3-4747-a960-ef3287723b30">
<img width="1920" alt="Screenshot 2024-04-01 at 4 14 44 PM" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-sierrahowe1/assets/155486188/dfd136e8-5282-4501-87bf-df0b5c77899d">
<img width="1920" alt="Screenshot 2024-04-01 at 4 18 45 PM" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-sierrahowe1/assets/155486188/de430ea7-fe1d-4710-809c-62a17c4bcb78">
<img width="1920" alt="Screenshot 2024-04-01 at 4 18 55 PM" src="https://github.com/CS2613-WI24-FR01B/exploration-activity-2-sierrahowe1/assets/155486188/e8243389-12ff-4525-8cb0-1bd495bd1acb">
