// The ... operator expands an iterable (like an array) into more elements:
const q1 = ['Jan', 'Feb', 'Mar', 'Apr'];
const q2 = ['May', 'Jun', 'Jul', 'Aug'];
const q3 = ['Sep', 'Oct', 'Nov', 'Dec'];
const year = [... q1, ...q2, ...q3];
console.log(year);
//output: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

