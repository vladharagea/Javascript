// # String Exercises

// ## These exercises are aimed at making you more familiar with strings, namely string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let aWalk = 'I can walk in the park all day!';
// console.log(aWalk.slice(18, 22));
var park = aWalk.split(' ');
console.log(park[5]);

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let aLanguage = 'JavaScript';
var res = aLanguage.slice(3,6);
console.log(res);

// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let programmerGreeting = 'Hello World';
console.log(programmerGreeting.toUpperCase());

// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

let alienProgrammerGreeting = 'Hello Earthling';
console.log(alienProgrammerGreeting.toLowerCase());


// 5. Check if the sentence "nice shoes" contains the letter l or n.

let smallCompliment = 'nice shoes';
console.log(smallCompliment.match("l"));
console.log(smallCompliment.match("n"));

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ

var str = 'Javascript'
var firstCharracter = str.substring(0,1);
console.log(`${firstCharracter}${str}${firstCharracter}`);
// let firstLetter = 'J';
// console.log(firstLetter + aLanguage + firstLetter);


// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt

let lastThree = str.substring(6,9);
console.log(`${lastThree}${programmerGreeting}${lastThree}`);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".

var str = 'Javascript';
var up = str.toUpperCase();
var res = up.includes('Java')
console.log(up);
console.log(`My string includes Java: ${res}`);


// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
console.log('==============================')
var str = 'Javascript';
var firstLetter = str[0];
console.log(firstLetter);
// var lastLetter = str[9]
var lastLetter = str[str.length-1]
console.log(lastLetter);
var midPart = str.slice(1,9)
console.log(midPart)
// var midPart = str.slice(1, str.length - 1)
console.log(`${lastLetter}${midPart}${firstLetter}`);



// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 





// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let quickFoxy = 'the quick brown fox';
var firstT = quickFoxy.charAt(0).toUpperCase();
var rest = quickFoxy.slice(1);
console.log(`${firstT}${rest}`);


