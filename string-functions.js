// use single or double quote for string declare
let text = "This is single quote string';
let text = "This is double quote string";

// slice function for string
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);
//output: Banana

// convert string to uppercase
let text = 'this is simple text';
console.log(text.toUpperCase())

// convert string to uppercase and lowercase
let text = 'This Is simple text';
console.log(text.toUpperCase(), text.toLowerCase())

// count string length after and before trim
let text = '   This Is simple text   ';
console.log(text.length, text.trim(), text.trim().length)

// String replace
let text = 'Please visit Microsoft!';
let newText = text.replace("Microsoft","Logicrays");
console.log(text, newText);

// string replace using regular explression
let text = "Please visit Microsoft and MicrosoFt!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText)

// replace all string
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replaceAll("Microsoft", "W3Schools");
console.log(newText)

// find the string index number
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index)

let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index)

// String template example
let firstName = "Dipak";
let lastName = "Prajapati";
let welcomeText = `Welcome ${firstName} ${lastName}`;
console.log(welcomeText);

// calculate total with sting template
let price = 10;
let VAT = 0.25;
let total = `Total ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// append the string using string template
let headers = "Template strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${headers}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);