// Function Instantiation / Initialisation

// function Animal(name, energy) {
//     let animal = {}; //let create animal object
//     animal.name = name;
//     animal.energy = energy;

//     animal.eat = function(amount) {
//         console.log(`${this.name} is eating`);
//         this.energy += amount;
//     };

//     animal.sleep = function(length){
//         console.log(`${this.name} is sleeping`);
//         this.energy += length;
//     };

//     animal.play = function(length){
//         console.log(`${this.name} is playing`);
//         this.energy -= length;
//     };
//     return animal;
// };

// const leo = Animal('Leo', 7);
// const snoop = Animal('Snoop', 10);
// leo.eat(10); // same like console.log
// snoop.eat(7);//same like console.log
console.log('===================================================');
// Function Instantiation / Initialisation with shared method

// const animalMethods = {
//     eat(amount) {
//         console.log((`${this.name} is eating`));
//         this.energy += amount;
//     },

//     sleep(length) {
//         console.log(`${this.name} is sleeping`);
//         this.energy += length;
//     },

//     play(length) {
//         console.log(`${this.name} is playing`);
//         this.energy -= length;
//     }
// };

// function Animal(name, energy) {
//     let animal = {};
//     animal.name = name;
//     animal.energy = energy;
//     animal.eat = animalMethods.eat;
//     animal.sleep = animalMethods.sleep;
//     animal.play = animalMethods.play;
//     return animal;
// };

// const leo = Animal('leo', 7);
// const snoop = Animal('Snoop', 10);

// leo.eat(10);
// snoop.sleep(7);

console.log('========================================');
//Object.create

// const parent = {
//     name : 'Herman',
//     age : 30,
//     nationality : 'German'
// };

// const child = Object.create(parent);
// child.name = 'Michael';
// child.age = '10';

// console.log(child);
// console.log(child.name);
// console.log(child.age);
// console.log(child.nationality);
// console.log(parent.name);

console.log('=================================');

//Functional Instantiation with shared methods and Object.create
// //function Animal(name, energy) {
//     let animal = Onject.create(animalMethods);
//     animal.name = name;
//     animal.energy = energy;
//     animal.eat = animalMethods.eat;
//     animal.sleep = animalMethods.sleep;
//     animal.play = animalMethods.play;
//     return  animal;
// };
// const let = Animal('Leo', 7);
// const snoop = Animal('Snoop', 10);
// leo.eat(10);

//So far, so good. There are still some improvements we can make though. It seems that we still have to manage a separate object(animaMethods) in order to share methods across instances.
//that we can implement through prototype.
//Prototype - every function in Javascript has a prototype property that references an object.
function doThings(name, energy) { }
    console.log(doThings.prototype); //doThings {}
//function doThings() {} = doThings.prototype

//Prototype Instantiation

function Animal(name, energy) {
    let animal = Object.create(Animal.prototype); //Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
}
const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);
leo.eat(10);

//let arr = [9, 29, 3];
// arr.forEach() // Array.prototype.forEach

console.log('====================================');

//Object Prototype

let obj = {};
console.log(obj);

//Built in prototypes : Array, Date, Function

let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);

console.log(arr); // the result of Array.prototype.toString

console.log('=========Another Example===========');
// Another Example

function f() {};
console.log(f.__proto__ == Function.prototype);
console.log(f.__proto__.__proto__ == Object.prototype);

console.log('========Javascript array prototype constructor===========');

Array.prototype.myTest = function () {
    console.log('Array prototype ...');
    for(let i = 0; i< this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

var fruits = ['Orange', 'Apple', 'Mango', 'Banana'];
console.log(fruits);
fruits.myTest();
console.log(fruits);

var testArr = ['a', 'b', 'c'];
testArr.myTest();
console.log(testArr);

console.log('================= MAP =================');

// Map

var arr1 = [2, 3 , 9, 16]; //index 0 ... 3

//old way

var temp = [];
for(let i = 0; i < arr.length; i++) {
    temp.push(arr[i] * 2);
};
console.log(temp);

//using array method
 
const result = arr1.map( x => x * 2);
console.log(result);

//with function defination
var counter = 0;
var newArr = arr1.map(myFunction); // arr1 : 2,3,9,16
console.log(newArr);
function myFunction(num) {
    // console.log(counter);
    // counter++;
    return num * 10;
};

//Example 3 
var persons = [
    {firstName : 'John', lastName : 'Doe'},
    {firstName : 'Jayne', lastName : 'Frye'},
    {firstName : 'Sabine', lastName : 'Ebert'}
];

console.log(persons.map(getFullName));

function getFullName (item) {
    return [item.firstName, item.lastName].join(" ");
};

//Example 4 
//Using var arr1 = =[2, 3, 9, 16];
var x = arr1.map(Math.sqrt);
console.log(x);

console.log('============REDUCE============================');

//Reduce Method
//The reduce() method reduced the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left to right)
//The return value of the function is stored in an accumulator(result/total).
//Note : reduce() does not execute the function for array elements without values
//Note : this method does not change the original array.

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

var numbers = [50, 60, 70, 10];
var resultOut = numbers.reduce(myReduceFunc);
function myReduceFunc(total, num) {
    console.log(`Total : ${total} and Num : ${num}`);
    return total + num; // total = 50 +60  total = 110 +70  total = 180 + 10 = 190;
};

console.log(resultOut);

//Example 2
const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
    console.log(`Total : ${total} and amount : ${amount}`);

    total += amount;

    console.log(`Total : ${total}`);

    if(index == array.length - 1)
        return total/array.length - 1;
    else return total;
});

console.log(average);

//Example 3

console.log('With adding Initial value...');

const averageAddInitial = euros.reduce((total, amount, index, array) => {
    console.log(`Total : ${total} and Amount : ${amount}`);

    total += amount;

    console.log(`Total : ${total}`);

    if(index == array.length - 1)
        return total/array.length;
    else 
        return total;
}, 0);

console.log(averageAddInitial);