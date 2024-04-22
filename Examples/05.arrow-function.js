

================================
        22-04-2024 Monday       
================================

// <<<<< Arrow function start >>>>>:
    
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