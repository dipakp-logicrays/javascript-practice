// JavaScript provides 8 mathematical constants that can be accessed as Math properties:
	// returns Euler's number
	console.log(Math.E) // 2.718281828459045
	
	// returns PI
	console.log(Math.PI) // 3.141592653589793
	
	// returns the square root of 2
	console.log(Math.SQRT2) // 1.4142135623730951
	
	// returns the square root of 1/2
	console.log(Math.SQRT1_2) // 0.7071067811865476
	
	// returns the natural logarithm of 2
	console.log(Math.LN2) // 0.6931471805599453
	
	// returns the natural logarithm of 10
	console.log(Math.LN10) // 2.302585092994046
	
	// returns base 2 logarithm of E
	console.log(Math.LOG2E) // 1.4426950408889634
	
	// returns base 10 logarithm of E
	console.log(Math.LOG10E) // 0.4342944819032518



// 1. Math.round(x) returns the nearest integer:
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// 2. Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); // 4

// 3. Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(-4.2)); // 5

// 4. Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(4.7)); // 4
console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(4.2)); // 4
console.log(Math.trunc(-4.2)); // -4

// 5. Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1

// 6. Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(2, 3)); // 2*2*2 = 8 
console.log(Math.pow(8, 2)); // 8*8 = 64

// 7. Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64)); //8

// 8. Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7)); // 4.7

// 9. Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// 10. Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random()); // 0.037282603383268054
