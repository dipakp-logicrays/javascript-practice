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

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr)

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
// output: 55

// The filter() method creates a new array with array elements that pass a test.
// This example creates a new array from elements with a value larger than 18:
const numbers = [45,5,66,9,16,25];
const over18 = numbers.filter((value, index, array) => value > 18);
console.log(over18)


// map function
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((value, index, array) => value * 2);
console.log(numbers2)
// output (5)[90, 8, 18, 32, 50]

// count the size of array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);


// join each element with * from array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); // join with * 

// remove last elememnt
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 
console.log(fruits)

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

// get array value star with 1 index, 2 and 3 index
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 4);
console.log(citrus);
//output: ['Orange', 'Lemon', 'Apple']

// Slice out a part of an array starting from array element 1 ("Orange"):
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);

// sort numeric array asc
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

// sort numeric array desc
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)

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


// Update array value using with function 
const months = ['January', 'february', 'mar'];
const updateMonths = months.with(2,'March');
console.log(updateMonths);

// foreach example
const numbers = [45,25,36,99,87,56,46];
let txt = '';
numbers.forEach((value, index, array) => {
  txt += value + "<br>";
});
console.log(txt);
// output: 45<br>25<br>36<br>99<br>87<br>56<br>46<br>
