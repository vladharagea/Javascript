// # Changing variables:

// ## `=`, `+=`, `-=`, string accumulation

// **Exercises to become familiar with variable reassignment, assignment operators and accumulation.**

// 1. Declare a variable called name. Assign a string value. Print to screen. 

// 2. Print to screen that name with a "Schm" in front of it. 

// 3. What value does name have now? Comment your answer and then print name to screen to test. 

// 4. Assign another string value to name. Print to screen. Comment why name has now had two different values.

// 5. Declare a variable called coffee. Assign it a numeric value. 

// 6. Print to screen a string that tells us x regularly drinks y cups of coffee per day. 

// 7. Declare a variable called daysBeforeExam. Assign it a numeric value. 

// 8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.

// 9. Making use of `+=` and `-=`, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam. 
 
// 10. What value do coffee and daysBeforeExam currently have? Comment your answer, then print to screen the variables to test. 

// 11. Review variable values throughout code. 

// ## concat()

// **Another way to accumulate or "concatenate" strings.**

// 12. Declare a variable called schmozzler. Assign it a string value of "Schm". 

// 13. Using the concat() function, print to screen the name variable linked to schmozzler. 

// 14. What value does name have now? Comment your answer and then print name to screen to test. 


// Changing Variable

var name = 'Vladimir';
console.log(name);

console.log(`Schm${name}`);
console.log("Schm"+name);

// Schm gets added to the 'name' string;

var name = 'McVladimir';
console.log(name);

// adding a new variable to the 'name' var, will change the original string value;

var coffee = 10;
console.log(name+" regularly drinks "+coffee+" of coffee per day");
console.log(`${name} regularly drinks ${coffee} of coffee per day`);
 
//

// 7.
coffee+=1;
var daysBeforeExam = 5;
console.log( name+" is drinking one more cup of coffee, with "+ daysBeforeExam +" days before exam.");
console.log(`${name} is drinking one more cup of coffee, with ${daysBeforeExam} days before exam.`);

//8.

console.log(`${name} is drinking one more cup of coffee, with ${daysBeforeExam} days before exam.`);


// 9.
// daysBeforeExam-=1;
console.log(name+" is drinking one more cup of coffee, with "+ (daysBeforeExam -= 1) +" less days before exam.");

// 10.
// var coffee has now a value of 11; var daysBeforeExam has now a value of 4;

console.log(coffee , daysBeforeExam);

// Another way to accumulate or "concatenate" strings;

// 12. 
let schmozzler = "Schm";

// 13.
console.log(name.concat(schmozzler));

// 14. 

console.log(name);













