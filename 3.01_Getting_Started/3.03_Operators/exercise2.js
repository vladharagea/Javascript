// #Math Problems  
// ##These tasks are aimed at making you comfortable with solving math problems using JS. 

// **Percent**
// Calculate the percentage of 17/30. Expected output: number%.

var div = 17/30;
var percent = div*100;
console.log(`${percent}%`);


// **Average** 
// The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hour?

// let noemy = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4)/10;
// console.log (`Noemy worked an average of ${noemy} per day`);



let values = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
console.log(avg);


// A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let firstFiveTests = 75 + 70 + 85 + 90 + 100;
let testAvg = 85;
let sixthTest = (testAvg * 6) - firstFiveTests;
console.log(`Score in the sixth text : ${sixthTest}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.

let lastAssess = (80 * 9) - (78 * 8);
console.log(`James need a minimum of ${lastAssess} to get an 80% average`);


// **Consumer Formula**
// Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip

var a = 22.35;
var b = 26.67;
var c = 35.92;

console.log(((a*10)/100)+a);
console.log(((b*15)/100)+b);
console.log(((c*20)/100)+c);


// **Geometry Formulas** 
// Calculate the perimeter of a square. Assume each side is 4.75cm.

var l = 4.75;
var perimeter = l * 4;
console.log(perimeter);

// Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

var AB = 5;
var BC = 6;
var AC = 7;
var perimeterTriangle = AB + BC + AC;
console.log(perimeterTriangle);

// Calculate the area of a square. Each side is 5cm.

var squareSide = 5;
var area = squareSide ** 2;
console.log(area); 



// Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.



// Calculate the volume of a cube. Length of each side is 9cm.

lev v = 9 **3; // 9* 9 *9  
console.log(`The volume of the cube is ${v}`);
// console.log(`The volume of the cube is ${Math.pow(9,3)}`);

// **Basic Word Problems**



// In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many people purchased a ticket? 

let person = 6450/15;
console.log(`${person} people went to the cinema`);



// // Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

let week = 52;
let income = 500*week;
console.log(`Silvia makes ${income} dollars per year`);
