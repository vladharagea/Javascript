//Exercise 3: Return Keys and Values
// Write a program that takes an object and returns the keys and values in separate arrays.
// Examples:
// * { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
// * {key: true} ➞ ["key"], [true]
console.log('===============Exercise 1=================');
const obj = {
    a: 1,
    b: 2,
    c: 3
};

function breakItIntoArrs(object) {
    let separateArrays = [];
    const keyArr = Object.keys(object);
    const valueArr = Object.values(object);
    separateArrays.push(keyArr);
    separateArrays.push(valueArr);
    return separateArrays;
}

console.log(breakItIntoArrs(obj));




// Exercise 4. Scrabble
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
console.log('===============Exercise 2=================');


const example = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
];

function maximumScore(arr) {
    sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].score;
    }
    console.log(sum);
}

maximumScore(example);

console.log('------case 2 of exercise 3----------');

function maxScore(arr) {
    sum = 0;
    for (const items of arr) {
        sum += items.score;
    }
    return sum;
};

console.log(maxScore(example));


// Exercise 5 : Is it an empty object?
// Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// * {} ➞ true
// * {a: 1} ➞ false

console.log('===============Exercise 3=================');


const obj1 = {};
const obj2 = {
    a: 1
};

function isEmpty(obj) {
    // return Object.values(obj).length === 0;
    return Object.keys(obj).length === 0;
    //return !Object.values(obj).length;
}

console.log(isEmpty({}));
console.log(isEmpty({
    a: 1
}));

console.log('================Exercise 4==================')
// Exercise 6 : Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".
// Example : const student = {
//    firstName: "John",
//    lastName: "Smith",
//    class: 12 };

const student = {
    firstName: 'John',
    lastName: 'Smith',
    age: '20',
    job: 'Swordmaster Supreme',
    city: 'Oxefurt',
    toBeDeleted: 'a not so interesting value'
};

function personPrint(obj) {
    console.log(`${obj.firstName} ${obj.lastName} is a ${obj.age} year old ${obj.job} living in ${obj.city}.`);
}

personPrint(student);

console.log('=======Exercise 5==================')
// Exercise 7 : Write a JavaScript program to delete the "class" property (or last property) from the previous object.

function deleteLastProp(obj) {
    // objArr = Object.entries(obj).slice(0, -1);
    // console.log(objArr);
    // objArr = new Map(objArr);
    // console.log(objArr)
    // objArr = Object.fromEntries(objArr);  STILL TOO NEW AND IT DOESN'T WORK YET
    // console.log(backToObj);
    var endProp = Object.entries(obj)[Object.entries(obj).length - 1][0];
    delete obj[endProp];
    console.log(obj);
}

// deleteLastProp(student);


console.log('++++++++++++++++++++++++');

const myObject = {
    firstName: 'John',
    lastName: 'Smith',
    age: '20',
    job: 'Swordmaster Supreme',
    city: 'Oxefurt',
    toBeDeleted: 'a not so interesting value'
};
const {
    toBeDeleted,
    ...args
} = myObject;
console.log(args);

// Exercise 8: Write a program to get the length of a JavaScript object.
console.log('===================Exercise 6===============');

function objLength(obj) {
    console.log(Object.keys(obj).length);
}

objLength(student);

// Exercise 9 : Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// const library = [
//   {
//       author: 'J.K. Rowling',
//       title: 'Harry Potter and the Chamber of Secrets',
//       readingStatus: true
//   },
//   {
//       author: 'Homer',
//       title: 'The Odyssey',
//       readingStatus: true
//   },
//   {
//       author: 'Harper Lee',
//       title:  'To Kill a Mockingbird',
//       readingStatus: false
//   }];
// E.g. Output:
// Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
// Already read The Odyssey by Homer
// You still need to read To Kill a Mockingbird by Harper Lee
console.log('==========Exercise 7===============')
const library = [{
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        readingStatus: true
    },
    {
        author: 'Homer',
        title: 'The Odyssey',
        readingStatus: true
    },
    {
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        readingStatus: false
    }
];

function readingStatus(arr) {
    arr.forEach((item) => {
        (item.readingStatus) ? console.log(`Already read ${item.title} by ${item.author}.`): console.log(`You still need to read ${item.title} by ${item.author}.`)
    });
}
readingStatus(library);

// ### Arrays
console.log('==============Exercise 8 Arrays===============');
// 1. Leap Years
// Write a program which finds the leap years in a given range of years.

// let years = [2400, 2500];

// function isItALeapYear(year) {
//     return ((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0);
// }
// function leapYears (start, end) {
//     let res = [];
//     for (i = start; i <= end; i++) {
//         if (isItALeapYear(i)) res.push(i);
//     }
//     return res;
// }
// console.log(leapYears(2400, 2510));




// // function leapYear(x, y) {
// //     for (i = years[0]; i <= years[1]; i++) {
// //         if (i % 4 !== 0 || i % 400 !== 0) {
// //             console.log('common');
// //         };
// //         if (i % 100 !==0){
// //             console.log(i);
// //         }
// //         else console.log(i);
// //     }
// // }







// console.log('========Exercise 9 Arrays=================');
// // 2. First & Last
// // Write a program that takes an array and returns the first and last elements as a new array.
// // Expected Output:
// // [5, 10, 15, 20, 25] ➞ [5, 25]
// // ["javascript", 13, null, false, true] ➞ ["javascript", true]
// // [undefined, 4, "6", "hello", null] ➞ [undefined, null]

// function firstAndLastEl(arr) {
//     let startNEnd = [];
//     startNEnd.push(arr[0]);
//     startNEnd.push(arr[arr.length-1]);
//     console.log(startNEnd);
// }

// firstAndLastEl([5, 10, 15, 20, 25]);
// firstAndLastEl(["javascript", 13, null, false, true]);
// firstAndLastEl([undefined, 4, "6", "hello", null]);

// console.log('=================Exercise 10 Arrays')
// // 3. Find the Smallest Number
// // Write a program that takes an array of numbers and returns the smallest number in the set.
// // E.g
// // [34, 15, 88, 2] ➞ 2
// // [34, -345, -1, 100] ➞ -345
// // [-76, 1.345, 1, 0] ➞ -76
// // [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
// // [7, 7, 7] ➞ 7

// function smallestNum(arr) {
//     arr = arr.sort();
//     console.log(arr);
// }

// smallestNum([34, 15, 88, 2]);
// smallestNum([34, -345, -1, 100]);
// smallestNum([-76, 1.345, 1, 0]);
// smallestNum([0.4356, 0.8795, 0.5435, -0.9999]);
// smallestNum([7, 7, 7]);





// 4. Return Student Names
// Write a program that takes an array of students and returns an array of student names.
// Example:
// [ { name: "Steve"},
//  { name: "Mike"},
//  { name: "John"}
// ]
// ➞ ["Steve", "Mike", "John"]
// 5. Spell it out
// Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g.
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]



// 1. Leap Years
// Write a program which finds the leap years in a given range of years.

function findTheLepYear(arr) {
    theLeapYears = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0 && arr[i])
            theLeapYears.push(arr[i])
    }
    console.log(theLeapYears)
}

findTheLepYear([1897, 1880, 1900, 1920, 1970,2000, 2001, 2008, 2009, 2019, 2020, 2035, 2040, 2043, 2050,2800])

// 2. First & Last
// Write a program that takes an array and returns the first and last elements as a new array.
//[5, 10, 15, 20, 25] ➞ [5, 25]

function turnFirstAndLastOneInArray(arr) {
    turnedArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i == 0 || i === arr.length - 1)
            turnedArr.push(arr[i])
    }
    console.log(turnedArr)
}
turnFirstAndLastOneInArray([5, 10, 15, 20, 25])
turnFirstAndLastOneInArray(["javascript", 13, null, false, true])
turnFirstAndLastOneInArray([undefined, 4, "6", "hello", null])


// 3. Find the Smallest Number
// Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g
// [34, 15, 88, 2] ➞ 2
// [34, -345, -1, 100] ➞ -345
// [-76, 1.345, 1, 0] ➞ -76
// [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
// [7, 7, 7] ➞ 7


function theSmallestOne(num) {
    console.log(Math.min(...num))
}
theSmallestOne([34, 15, 88, 2])

// 4. Return Student Names
// Write a program that takes an array of students and returns an array of student names.
// Example:
// [ { name: "Steve"},
//  { name: "Mike"},
//  { name: "John"}
// ]
// ➞ ["Steve", "Mike", "John"]

var students = {
    a: "Steve",
    b: "Mike",
    c: "John"
};
const studentArr = Object.values(students)
console.log(studentArr)

// 5. Spell it out
// Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g.
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

function spellTheWord(word) {
    let theWord=[];
    word1 = "";
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        word1 += word[i]
        theWord.push(word1)
    }
    console.log(theWord)

}
spellTheWord("bee")
spellTheWord("happy")
spellTheWord("eagerly")