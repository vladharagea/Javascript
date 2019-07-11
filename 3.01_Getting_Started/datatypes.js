/* 1. Data Types
String(represent textual data)
Number (numbers of any kind)
Boolean (logical type)
Undefined
Null
Symbol
*/


// Data Type : String

let str="Hello";
let str1='Single quote are ok too';
console.log(str,str1);
let name="John";

console.log(`Hello, ${name}`);

console.log(`the result is ${1+2}`); 

let myName="Vladimir 1234567890"; // V=0 l=1 a=2 d=3 etc.
console.log(myName [3]); // result would be d 
console.log(myName.length); // result would be 9
console.log(myName[9], myName[20]); 

// Data Type : Number



console.log(1/0);
console.log("this si number"/2);
let currentYear=2019;
console.log(currentYear);
console.log(currentYear[3]);
console.log(currentYear.length);

let n=12.344;
console.log(n);

let myNumber=1234e17;
console.log(myNumber);

let myNumber1=1234e-3;
console.log(myNumber1);

let myNumber2=1234e-5;
console.log(myNumber2);

let newNum=20;
console.log(newNum * Infinity);
console.log(newNum * -Infinity);

let country="Germany";
console.log(country/newNum);


// Concatenation

let concat1="Hello";
let concat2="World";
let concat3=concat1 + concat2;
console.log(concat3);
console.log(concat1 + " " + concat2 + "!");   

// Concatenate numbers and strings

let num1=20;
let num2=20;
let num3="hello";
let num4=num1 + num2 + num3;
console.log(num4); //40hello  because it reads it as numbers

let num5="hello";
let num6=num5 + num1 + num2;
console.log(num6); // hello2020 because it reads it as a string

let num7=num5 + (num1 + num2);
console.log(num7); //hello40    



// Data Type : Boolean

let isGreater=4>1;
console.log(isGreater);

let isDay=true;
console.log(isDay);




// Data Type : Undefined

// Data Type : Null

// Data Type : Symbol

//Data Type : Object

let myObject= {
    key1: "Value",
    key2: 12345,
    key3: {
        newObject: "hello",
    }
};
console.log(myObject);

// personal information object

var infoObject= {
    firstName: "Vlad",
    lastName: "Haragea",
    address: {
        streetName: "septimer str 111",
        plz: 13583,
        city: "Berlin"
    }

};
console.log(infoObject);
console.log(infoObject.address.city);
console.log(infoObject.lastName);

// typeof

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof isDay);
console.log(typeof infoObject.firstName);
console.log(typeof infoObject.address.plz);