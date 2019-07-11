// **Data Types Exercises P1**
// **Strings, Numbers, Booleans**

// Exercises to become familiar with data types.

// 1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.

var myGame="World-of-Tanks";
console.log(myGame);

// 2. Access the 2nd and 6th elements of the string. Print the elements to the console. **Make sure you have selected the right index numbers**

console.log(myGame[1],myGame[5]);

// 3. Declare a variable called name and assign a string as a value.

var name="T26E5Patriot"

// 4. Declare a variable called age and assign a number as a value.

var age=60;

// 5. Declare a variable called year and assign a number as a value.

var year=1942;

// 6. With your declared variables, print the following: "/name/ is /age/ in /year/".

console.log(name,"is",age,"in",year);

console.log(`${name} is ${age} in ${year}`);

// 7. Declare a variable called isMarried and assign a boolean value.

let itsReallyold=true;
console.log(itsReallyold);

// 8. With your declared variables, print the following "/name/ is married: true/false".

console.log(name,"is really old:",itsReallyold);

// 9. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true.  Print "JavaScript is fun: true" to the console.

let programmingLanguage="Javascript";
let isFun=true;

console.log(programmingLanguage,"is fun:",isFun);

console.log(`${programmingLanguage} is fun: ${isFun}`); // Should remember this because it is widely used!!!!!!

console.log(programmingLanguage + " is fun: " + isFun);


// 10. Print the J and S of JavaScript from the variable programmingLanguage to the console.

console.log(`${programmingLanguage[0]} ${programmingLanguage[4]}`);

// 11. Print the length of the string "JavaScript" to the console.

console.log(`${programmingLanguage.length}`);