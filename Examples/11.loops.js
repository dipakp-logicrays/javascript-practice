// JavaScript supports different kinds of loops:

	// 1. for - loops through a block of code a number of times
	   // Example
		const cars = ["Saab", "Volvo", "BMW"];
		let len = cars.length;
		for (let i = 0; i < len; i++) {
		    console.log(cars[i]); // print car name
		}

	// 2. for/in - loops through the properties of an object
		// Example:
	  	const person = {fname:"John", lname:"Doe", age:25};
		for (let x in person) {
		  console.log(person[x]); // // John Doe25
		}

	// 3. for/of - loops through the values of an iterable object
	 	// Example:
		const cars = ["Saab", "Volvo", "BMW"];
		for (let x of cars) {
		    console.log(x);
		}

	// 4. while - loops through a block of code while a specified condition is true
	   	// Example
		let i = 0
		while (i < 10) {
		  console.log("The number is " + i);
		  i++;
		}

	// 5. do/while - also loops through a block of code while a specified condition is true, always be executed at least once, even if the condition is false
		// Example:
		let i = 0
		do {
		  console.log("The number is " + i);
		  i++;
		} while (i < 10)