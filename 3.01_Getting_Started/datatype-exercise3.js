
// **Data Types Exercises P2**
// **Strings, Numbers, Booleans, Null, undefined data types & typeof operator**
// Exercises to become familiar with data types and typeof operator.

// 1. Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.

let length = 16.78; // Numbers
let lastName = "Johnson"; // String
let car = ""; // Undefined
let isOpen = true; // Boolean

// 2. Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.

let ageMark ="30";
let ageJohn = 50;


// 3. Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"

let JohnolderthanMark = true;
console.log(`John is older than Mark: ${JohnolderthanMark}`);

// 4. Declare a variable called x. Do not assign a value. Print x's data type to the console.
// 5. Assign a string to x. Print x's data type again.

let x = "Best-tank-in-game-is-IS-3";
console.log(x);


// 6. Print the last character of x's string to the console.

console.log(x.length);
console.log(x[24]);
console.log(x[x.length-1]);

// 7. Print the length of x to the console, as well as the data type of x's length.

console.log(x.length, typeof x);

// 8. Declare three variables: a, b, c. Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(a == b);). Do this for each possibility (a, b) (a, c), (b, c). Then, print the data type of this check to the console.

let a = 100;
let b = 200;
let c = 100;

console.log(a == b);
console.log(b == c);
console.log(a == c);

console.log(typeof(a == b));
console.log(typeof(b == c));
console.log(typeof(a == c));


// 9. What is the type of Infinity? Comment your answer. Print the type of infinity to the console.

// Infinity and -Infinity are special values of the Number type. ... (Note that these two infinite Number values are produced by the program expressions +Infinity (or simply Infinity ) and -Infinity .) Also note that NaN is a value of the Number type too, despite it being an acronym for "not a number".


// 10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".

let myVari= 1000;
isNaN(myVari);
console.log(`myVari is NOT a number: ${isNaN(myVari)}`);


// 11. Print the data type of isNaN(variable) to the console.

console.log(typeof(isNaN(myVari)));
