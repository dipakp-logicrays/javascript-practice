- The const keyword was introduced in ES6 (2015)

- Variables defined with const cannot be Redeclared

- Variables defined with const cannot be Reassigned

- Variables defined with const have Block Scope

// <<<<< JS const start >>>>>

// An array declared with const cannot be reassigned:
    try {
        const cars = ["Saab", "Volvo", "BMW"];
    cars = ["Toyota", "Volvo", "Audi"];    // ERROR
    } catch (error) {
        console.log(error);
    }
    //output: TypeError: Assignment to constant variable.

// Elements Can be Reassigned

    // You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];
    // You can change an element:
    cars[0] = "Toyota";
    // You can add an element:
    cars.push("Audi");
    console.log(cars);

// Assigned when Declared
    const cars;
    cars = ["Saab", "Volvo", "BMW"]; // this will not work

// Arrays declared with var can be initialized at any time. You can even use the array before it is declared:
    car = ["Saab", "Volvo", "BMW"];
    var car;
    console.log(car);

// An array declared with const has Block Scope.
    const cars = ["Saab", "Volvo", "BMW"];
    // Here cars[0] is "Saab"
    {
      const cars = ["Toyota", "Volvo", "BMW"];
      // Here cars[0] is "Toyota"
    }
    // Here cars[0] is "Saab"

// var can redeclare but const can not redeclare

// <<<<< JS const end >>>>>