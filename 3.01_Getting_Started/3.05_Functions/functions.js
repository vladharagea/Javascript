// Start Define Function

// function showMessage()
// {
//     console.log('Hello Everyone');
// }

// showMessage();

// //convert palindrom example with function.
// //you can pass ant string and function will print result.

// function isPalindrom()
// {
//     var originalStr='leveL';
//     originalStr=originalStr.toLowerCase()
//     var reverseWord=originalStr.split('').reverse().join('');
//     console.log(reverseWord);
//     if(originalStr==reverseWord){
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }
// isPalindrom();

// Define a Function : Function Expressions
 //1.....................................................
// const showMessage = function() {
//     console.log('I am function expression');
// };

// showMessage();

// let a=10;
// let b=a;
// console.log(b);

// //const copyFunc=shoMessage(); will not work 
// // below will work as it is simple variable assignment
// const copyFunc=showMessage;

// copyFunc();

//define with parameters

// const showMessageWithParam = function(message) {
//     console.log(message);
// };

// showMessageWithParam('Hello DCI');


// Define a arrow function expression.

const showMessageWithArrow = () => {
    console.log('I am arrow function');
};

showMessageWithArrow('I am arrow function'); 

const showMessageWithArrowWithParam = (message) => {
    console.log(message);
};

showMessageWithArrowWithParam('I am arrow function with param');
//shorthand for arrow function expressions
// let sum= (a,b) => { console.log(a+b)};
// sum(4,5);

let sum = (a,b) => a+b;
console.log(sum(4,5));

// ........................................................

const param1 = true;
const param2 = false;

function twoParams(p1, p2) {
    console.log(param1, param2);
}

twoParams(param1, param2);


function showMessage(from, text) {
    console.log(from+ ':' + text);
}
showMessage('Ann', 'Hello');
showMessage('Ann');

function showMessageDefaultValue(from, text='no text given') {
    console.log(from+ ':' + text);
}

showMessageDefaultValue('Ann');

//define 3 parameters function

function aboutMe(firstName, lastName, work)
{
    console.log(`My name is ${firstName} ${lastName} and I am an ${work}`);
    // console.log('My name is '+firstName+' '+ lastName + ' '+ 'and I am an '+ work);
}

aboutMe('Vlad', 'Haragea', 'IT engineer');

//function with two default values of the parameters

function personInfo(firstName, yearOfBirth, lastName='Smith', nationality='German'){
    //Part 1
    // console.log(`${firstName} ${lastName} ${yearOfBirth} ${nationality}`);
    //Part2
    this.firstName1=firstName;
    this.lastName1=lastName;
    this.yearOfBirth1=yearOfBirth;
    this.nationality1=nationality;
    console.log(`${this.firstName1} ${this.lastName1} ${this.yearOfBirth1} ${this.nationality1}`);
}

personInfo('John', 1990);
personInfo('John', 1990, 'Klass');
personInfo('John', 1990, 'Klass', 'USA');


//Function Return

function test() {}
console.log(test());

function test1(){
    return true;
} console.log(test1());

function sumWithReturn(a,b) {
    return a+b;
}
let result=sumWithReturn(1,2);
console.log(result);



function doNothing()
{
    /* empty */
}
console.log(doNothing()===undefined);

function doNothing1()
{
    return false;
}
console.log(doNothing1()===undefined);