// JavaScript Display Possibilities
--------------------------------

//1. Writing into an HTML element, using innerHTML.
	 document.getElementById("demo").innerHTML = 5 + 6;

//2. Writing into the HTML output using document.write().
	 document.write(5 + 6);

//3. Writing into an alert box, using window.alert().
     window.alert(5 + 6);

//4. Writing into the browser console, using console.log().
	 window.log(5 + 6);

------
Syntax
------

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// The JavaScript syntax defines two types of values:
	1. Fixed values :- Fixed values are called Literals. 
	2. Variable values :- Variable values are called Variables.

// All JavaScript identifiers are case sensitive. 

// A JavaScript name must begin with:
	- A letter (A-Z or a-z)
	- A dollar sign ($)
	- Or an underscore (_)

// JavaScript and Camel Case
	- Hyphens are not allowed in JavaScript. They are reserved for subtractions.
	  // Example:  first-name, last-name, master-card, inter-city.

	- Underscore
	  // Example: first_name, last_name, master_card, inter_city.

	- Upper Camel Case (Pascal Case):
	  // Example: FirstName, LastName, MasterCard, InterCity.

	- Lower Camel Case:
	  // Example: firstName, lastName, masterCard, interCity.

// JavaScript uses the Unicode character set.

----------
Variables
----------

// JavaScript Variables can be declared in 4 ways:
	1. Automatically
	2. var
	3. let
	4. const

// When to Use var, let, or const?
	1. Always declare variables

	2. Always use const if the value should not be changed

	3. Always use const if the type should not be changed (Arrays and Objects)

	4. Only use let if you can't use const

	5. Only use var if you MUST support old browsers.

// The general rules for constructing names for variables (unique identifiers) are:
	- Names can contain letters, digits, underscores, and dollar signs.
	- Names must begin with a letter.
	- Names can also begin with $ and _ (but we will not use it in this tutorial).
	- Names are case sensitive (y and Y are different variables).
	- Reserved words (like JavaScript keywords) cannot be used as names.

--------------
JavaScript let
--------------

- The let keyword was introduced in ES6 (2015)

- Variables declared with let have Block Scope

- Variables declared with let must be Declared before use

- Variables declared with let cannot be Redeclared in the same scope
	// Can't do this
	let x = "John Doe";
	let x = 0;

// Difference Between var, let and const

		Scope	Redeclare  Reassign Hoisted   Binds this
var		No	Yes	   Yes 	    Yes	      Yes
let		Yes	No	   Yes	    No	      No
const	        Yes	No	   No	    No	      No

// Example: Redeclaring a JavaScript variable with var is allowed anywhere in a program:
	var x = 2;
	// Now x is 2

	var x = 3;
	// Now x is 3

// Example: With let, redeclaring a variable in the same block is NOT allowed:
	var x = 2;   // Allowed
	let x = 3;   // Not allowed

	{
		let x = 2;   // Allowed
		let x = 3;   // Not allowed
	}

	{
		let x = 2;   // Allowed
		var x = 3;   // Not allowed
	}

//Example: Redeclaring a variable with let, in another block, IS allowed:
	let x = 2;   // Allowed

	{
		let x = 3;   // Allowed
	}

	{
		let x = 4;    // Allowed
	}

// Let Hoisting
	- Variables defined with var are hoisted to the top and can be initialized at any time.
	- Meaning: You can use the variable before it is declared:
	- Example: This is OK:
		carName = "Volvo";
		var carName;

	- Variables defined with let are also hoisted to the top of the block, but not initialized.
	- Meaning: Using a let variable before it is declared will result in a ReferenceError:
	- Example:
		carName = "Saab";
		let carName = "Volvo";

