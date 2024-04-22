// About class
    - JavaScript Classes are templates for JavaScript Objects.
    - Use the keyword class to create a class.
    - Always add a method named constructor():

// The Constructor Method
    - It has to have the exact name "constructor"
    - It is executed automatically when a new object is created
    - It is used to initialize object properties

// Example
    class Car {
        constructor (name, year) {
            this.name = name;
            this.year = year;
        }
        age (x) {
            return x - this.year;
        }
    }
    const date = new Date();
    let year = date.getFullYear();
    const myCar = new Car("Audi", 2014);
    console.log ("My car is " + myCar.age(year) + " years old") 
    // output:  My car is 10 years old
