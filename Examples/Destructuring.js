// 1. Array Destructuring
const arr = [10, 20, 30, 40, 50];

// Destructuring the array
const [a, b, c] = arr;
console.log(a, b, c);

// 2. Object Destructuring
const person = { name: "Dipak", age: 29 };
const { name, age } = person;
console.log(name, age);

// Renaming variables
const { name: fullName, age: yearsOld } = person;
console.log(fullName)

// Default value for age
const { city = "Bhavnagar" } = person;

const user = { name: "John", age: "30", address: { newcity: "Ahmedabad", zipcode: "380059" } };
const { address: { newcity } } = user;
console.log(name, newcity)