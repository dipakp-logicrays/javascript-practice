// print json object
const person = {"firstname": "dipak", "age":28};
console.log(person);

// print json object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

// get typeof 
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof person);

// array is also an object, return typeof
const cars = ["volvo","bmw","audi"];
console.log(typeof cars, cars)

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car)

// add weight key to car object using =
const car = {type:"Fiat", model:"500", color:"white"};
car.weight = "100kg";
console.log(car)

// add size key to car object using []
const car = {type:"Fiat", model:"500", color:"white"};
car.weight = "100kg";
car["size"] = "8mtr";
console.log(car)

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());
// output: John Doe
