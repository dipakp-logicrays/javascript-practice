// In JavaScript there are 5 different data types that can contain values:

	- string
	- number
	- boolean
	- object
	- function

// There are 6 types of objects:

	- Object
	- Date
	- Array
	- String
	- Number
	- Boolean

// And 2 data types that cannot contain values:
	- null
	- undefined

// Please observe:
	- The data type of NaN is number
	- The data type of an array is object
	- The data type of a date is object
	- The data type of null is object
	- The data type of an undefined variable is undefined *
	- The data type of a variable that has not been assigned a value is also undefined *

// The instanceof operator returns true if an object is an instance of the specified object:
	const cars = ["Saab", "Volvo", "BMW"];
	(cars instanceof Array); // true
	(cars instanceof Object); // true
	(cars instanceof String); // false
	(cars instanceof Number); // false

	