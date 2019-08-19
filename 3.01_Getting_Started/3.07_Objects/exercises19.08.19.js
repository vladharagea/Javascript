// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let properties = Object.keys(student).toString();
console.log(properties);


// #### 1. Check if a number is within a given range
// Write a program that checks if a number is within the range of an object's min and max properties.
// Examples:
// * 4, { min: 0, max: 5 }) ➞ true
// * 4, { min: 4, max: 5 }) ➞ true
// * 4, { min: 6, max: 10 }) ➞ false
// * 5, { min: 5, max: 5 }) ➞ true
// * Notes: Assume min <= max is always true.


function isInInterval(num, obj) {
    return (num >= obj.min && num <= obj.max) ? true : false
};

console.log(isInInterval(4, { min: 0, max: 5 }));
console.log(isInInterval(4, { min: 4, max: 5 }));
console.log(isInInterval(4, { min: 6, max: 10 }));
console.log(isInInterval(5, { min: 5, max: 5 }));