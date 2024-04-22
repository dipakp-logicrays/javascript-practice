================================
        22-04-2024 Monday       
================================
// <<<<< JS dates start >>>>>
    // There are 9 ways to create a new date object:
        1. new Date()
            // Example:
            const d = new Date();
            console.log(d)
            // output: Mon Apr 22 2024 15:27:29 GMT+0530 (India Standard Time)

        2. new Date(date string)
            // Example:
            const d = new Date("2024-12-25");
            console.log(d)
            // output: Wed Dec 25 2024 05:30:00 GMT+0530 (India Standard Time)

        // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):       
        3. new Date(year,month)
        4. new Date(year,month,day)
        5. new Date(year,month,day,hours)
        6. new Date(year,month,day,hours,minutes)
        7. new Date(year,month,day,hours,minutes,seconds)
        8. new Date(year,month,day,hours,minutes,seconds,ms)
            // Example: 
            const d = new Date(2018, 11, 24, 10, 33, 30, 0);
            console.log(d)
            //output: Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)
        9. new Date(milliseconds)
            // JavaScript Stores Dates as Milliseconds
            // JavaScript stores dates as number of milliseconds since January 01, 1970.
            // Zero time is January 01, 1970 00:00:00 UTC.
            // One day (24 hours) is 86 400 000 milliseconds.
            // Now the time is: 1713779732888 milliseconds past January 01, 1970
            // Example
            const d = new Date(100000000000);
            console.log(d);
            //output: Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)


    // months start with 0
        0 = Jan
        1 = Feb
        ...
        ...
        11 = Dec

    // One and two digit years will be interpreted as 19xx: (previous century)
        const d = new Date(96, 02, 27);
        console.log(d)

        const d = new Date(1996, 02, 27);
        console.log(d)
        // same output for above 2 console: Wed Mar 27 1996 00:00:00 GMT+0530 (India Standard Time)

        const d = new Date(9, 11, 24);
        console.log(d);
        //output: Fri Dec 24 1909 00:00:00 GMT+0530 (India Standard Time)
   
    // When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
        const d = new Date();
        console.log(d.toString());
        //output: Mon Apr 22 2024 15:45:31 GMT+0530 (India Standard Time)

    //The toDateString() method converts a date to a more readable format:
        const d = new Date();
        console.log(d.toDateString());
        //output: Mon Apr 22 2024

    // The toUTCString() method converts a date to a string using the UTC standard:
        const d = new Date();
        console.log(d.toUTCString());
        //output: Mon, 22 Apr 2024 10:18:23 GMT

    // The toISOString() method converts a date to a string using the ISO standard:
        const d = new Date();
        console.log(d.toISOString());
        //output: 2024-04-22T10:19:07.415Z

    // Date Get Methods
        getFullYear()       Get year as a four digit number (yyyy)
        getMonth()          Get month as a number (0-11)
        getDate()           Get day as a number (1-31)
        getDay()            Get weekday as a number (0-6)
        getHours()          Get hour (0-23)
        getMinutes()        Get minute (0-59)
        getSeconds()        Get second (0-59)
        getMilliseconds()   Get millisecond (0-999)
        getTime()           Get time (milliseconds since January 1, 1970)

// <<<<< JS dates end >>>>>

// const example 

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

// ---------------

// The ... operator expands an iterable (like an array) into more elements:
const q1 = ['Jan', 'Feb', 'Mar', 'Apr'];
const q2 = ['May', 'Jun', 'Jul', 'Aug'];
const q3 = ['Sep', 'Oct', 'Nov', 'Dec'];
const year = [... q1, ...q2, ...q3];
console.log(year);
//output: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


// Update array value using with function 
const months = ['January', 'february', 'mar'];
const updateMonths = months.with(2,'March');
console.log(updateMonths);

// Array keys
const fruits = ['Banana', 'Mango', 'Apple'];
const keys = fruits.keys();

for (let x of keys) {
    text +=  x + '<br>';
}

// from function: string to array
const str = "Hello World!";
const arr = Array.from(str);
console.log(arr);

// sum from array using Reduce
const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = numbers.reduce((total, value, index, array) => total + value);
console.log(result);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = numbers.reduce((total, value) => total + value);
console.log(result);
// VM1384:3 55

// The filter() method creates a new array with array elements that pass a test.
// This example creates a new array from elements with a value larger than 18:
const numbers = [45,5,66,9,16,25];
const over18 = numbers.filter((value, index, array) => value > 18);
console.log(over18)

//Arrow function:
    
    // How to Convert a Regular Function to an Arrow Function Easily
    // simple function
    function greetings(name) {
      return `Hello, ${name}!`;
    }
    // 1. Replace the function keyword with the variable keyword const
    const greetings(name) {
      return `Hello, ${name}!`;
    }
    // 2. Add the = symbol after the function name and before the parentheses
    const greetings = (name) {
      return `Hello, ${name}!`;
    }
    // 3. Add the => symbol after the parentheses
    const greetings = (name) => {
      return `Hello, ${name}!`;
    }
    //4. When you have a single line function, there’s a fourth optional step to remove the curly brackets and the return keyword as follows:
    const greetings = (name) => `Hello, ${name}!`;
    
    //5. When you have exactly one parameter, you can also remove the parentheses:
    // from this
    const greetings = (name) => `Hello, ${name}!`;
    // to this
    const greetings = name => `Hello, ${name}!`;

    // 6. If your function has no parameter, then you need to pass empty parentheses between the assignment and the arrow syntax as shown below:
    const greetings = () => console.log(`Hello, World!`);


    // an arrow function to add two numbers
    const addNumbers = (a, b) => a + b;
    // call the function with two numbers
    const result = addNumbers(5, 3);
    console.log(result);
    // Output: 8


    // Arrow Function With One Argument
    const square = x => x * x;
    // use the arrow function to square a number
    console.log(square(5));  
    // Output: 25


    // use arrow functions as expressions in ternary operator 
    let age = 5;
    // to dynamically assign functionality
    let welcome = (age < 18) ?
        () => console.log("Child") :
        () => console.log("Adult");
    welcome(); 
    // Output: Child


    // Arrow Function With No Argument
    const sayHello = () => "Hello, World!";
    // call the arrow function and print its return value
    console.log(sayHello());  
    // Output: Hello, World!


    //syntax
    let myFunction = (arg1, arg2, ...argN) => {
        statement(s)
    }
    // If the body has single statement or expression, you can write the arrow function as:
    let myFunction = (arg1, arg2, ...argN) => expression


// map function
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((value, index, array) => value * 2);
console.log(numbers2)
// output
VM924:3 (5)[90, 8, 18, 32, 50]


// foreach example
const numbers = [45,25,36,99,87,56,46];
let txt = '';
numbers.forEach((value, index, array) => {
  txt += value + "<br>";
});
console.log(txt);
// output
VM707:6 45<br>25<br>36<br>99<br>87<br>56<br>46<br>


================================
		19-04-2024 Friday		
================================

// Arrow function complex example
const processData = (data) => {
    const totals = data.map(item => ({
        name: item.name,
        total: item.quantity * item.price
    }));
    const grandTotal = totals.reduce((acc, item) => acc + item.total, 0);
    return {
        details: totals,
        grandTotal: grandTotal
    };
};

const salesData = [
    { name: "Apples", quantity: 30, price: 0.5 },
    { name: "Oranges", quantity: 20, price: 0.7 }
];
console.log(processData(salesData));
// Output
{
    "details": [
        {
            "name": "Apples",
            "total": 15
        },
        {
            "name": "Oranges",
            "total": 14
        }
    ],
    "grandTotal": 29
}


// sum of array value using reduce method
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((total, value) => total + value, 100);
console.log(sum)

// or
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);
function myFunction(total, value) {
  return total + value;
}
console.log(sum)


// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr)


// array map function example
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value) {
  return value * 2;
}
console.log(numbers2);
// or
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.map((x) => x * 2);
console.log(newArr)


// find max value from array fastest way
const arr = [40, 100, 1, 5, 25, 10, 66,87];
const maxVal = myArrayMax(arr);

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(maxVal);


// find min value from array fastest way
const arr = [40, 100, 1, 5, 25, 10, 66,87,0,-9];
const minVal = myArrayMin(arr);
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
console.log(minVal);


// sort numeric array desc
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)

// sort numeric array asc
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

// Slice out a part of an array starting from array element 1 ("Orange"):
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);

// get array value star with 1 index, 2 and 3 index
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 4);
console.log(citrus);
VM2320:4 (3) ['Orange', 'Lemon', 'Apple']


//Example (Merging Two Arrays)
//The concat() method does not change the existing arrays. It always returns a new array.
//The concat() method can take any number of array arguments.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

// Add new element to an array at the first position
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); 
console.log(fruits);

// remove first element from array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); 
console.log(fruits)

// add new element to an array At the end
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); 
console.log(fruits)

// remove last elememnt
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 
console.log(fruits)

// join each element with * from array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); // join with * 

// count the size of array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

// append the string using string template
let headers = "Template strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${headers}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);

// calculat total with sting template
let price = 10;
let VAT = 0.25;
let total = `Total ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// String template example
let firstName = "Dipak";
let lastName = "Prajapati";
let welcomeText = `Welcome ${firstName} ${lastName}`;
console.log(welcomeText);


let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index)

// find the string index number
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index)

// replace all string
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replaceAll("Microsoft", "W3Schools");
console.log(newText)

// string replace using regular explression
let text = "Please visit Microsoft and MicrosoFt!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText)

// String replace
let text = 'Please visit Microsoft!';
let newText = text.replace("Microsoft","Logicrays");
console.log(text, newText);


let text = "5";
let padded = text.padStart(4,"0");
console.log(padded)

// count string length after and before trim
let text = '   This Is simple text   ';
console.log(text.length, text.trim(), text.trim().length)


// convert string to uppercase and lowercase
let text = 'This Is simple text';
console.log(text.toUpperCase(), text.toLowerCase())

// convert string to uppercase
let text = 'this is simple text';
console.log(text.toUpperCase())

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);
//output: Banana

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

// add size key to car object using []
const car = {type:"Fiat", model:"500", color:"white"};
car.weight = "100kg";
car["size"] = "8mtr";
console.log(car)

// add weight key to car object using =
const car = {type:"Fiat", model:"500", color:"white"};
car.weight = "100kg";
console.log(car)


const car = {type:"Fiat", model:"500", color:"white"};
console.log(car)


// array is also an object, return typeof
const cars = ["volvo","bmw","audi"];
console.log(typeof cars, cars)

// get typeof 
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof person);

// print json object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

// print json object
const person = {"firstname": "dipak", "age":28};
console.log(person);

