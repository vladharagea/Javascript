// Escaping special characters
//=====================================================


console.log(`Hi there my name is D\`Angelo`);
console.log(`Hi there my name is D\"Angelo"`);

// The ternary operator
//======================================================


let sunny = true;
let happy = sunny ? true : false;
console.log(`Is it sunny? : ${sunny}`);
console.log(`Am I happy? : ${happy}`);


// let sunny = false;
// let happy = sunny ? true : false;
// console.log(`Is it sunny? : ${sunny}`);
// console.log(`Am I happy? : ${happy}`);

// let sunny = false;
// let temp = sunny ? 35 : 12;
// console.log(`Is it sunny? : ${sunny}`);
// console.log(`What is the temp? : ${temp}`);

// Mathematical Operators
//=======================================================


let myAge = 30;
let vladAge = 32;

console.log(`Am I younger than Vlad?:${myAge < vladAge}`);
console.log(`Am I younger or the same age Vlad?:${myAge <= vladAge}`); // <= smaller or equal
console.log(`Am I the same age Vlad?:${myAge === vladAge}`); // === is equal
console.log(`Am I the same age Vlad?:${myAge !== vladAge}`); //  the '!' is the opposite , the not

let cloudy = false;
console.log(cloudy);
console.log(!cloudy); // the '!' gives the opposite

// Logical Operators
//========================================================

// AND is &&
// OR is ||

let password = false;
let username = true;
let login = (password && username);
console.log(`Can I log in? : ${login}`);

let age = 30;
let validId = true;
let blackLeather = true;

let enterDaKlab = (age >= 18) && (validId) && blackLeather;
console.log(`Can I enter mr bouncer? : ${enterDaKlab}`);

let wig = true;
let id = true;
let enterTheClub = wig|| validId

console.log(`Can I enter the wig club mr bounca? : ${enterTheClub}`);

let enterTheNewClub = ((age >= 18) && validId) || wig;

let enterTheNeeeWClub = (validId && blackLeather) ? true : false;















