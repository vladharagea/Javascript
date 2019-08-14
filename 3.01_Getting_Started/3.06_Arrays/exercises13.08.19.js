// /Create a function that takes an array of numbers and return the number that's unique.
// //Examples:
// function unique(arr) {
//     arr = arr.sort();
//     uniqueArr = [];
//     for (i = 0; i < arr.length; i++){
//         if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
//             uniqueArr.push(arr[i]);
//         }
//     }
//     console.log(uniqueArr);
// }


// unique([3, 3, 3, 7, 3, 3]) //➞ 7
// unique([0, 0, 0.77, 0, 0]) //➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) // ➞ 0

//without indexOf and lastIndexOf 
function finduniq2(listes) {
    let all_the_uniq = [];
    for (let i = 0; i < listes.length; i++) {
        let boll = 1;
        for (let j = 0; j < listes.length; j++) {
            if (j === i) continue
            else {
                if (listes[i] !== listes[j]) boll *= 1
                else boll *= 0
            }
        }
        if (boll === 0) continue
        else all_the_uniq.push(listes[i])
    }
    return all_the_uniq
}
console.log(finduniq2([33, 2, 5, 4, 4, 8, 3, 13, 2, 33, 4, 5, 6, 11, 12, 7, 546, 3, -45, 7, 2, 6, 13, 8, 4, 11]))


console.log('---------------------')


// Create a function toCamelCase() that takes a single string and convert it into camelCase from snake_case.
//Examples:

function toCamelCase(str) {
    str = str.split('_');
    console.log(str)
    for (i = 1; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
        console.log(str[i])
    }
    console.log(str.join(""))
}

toCamelCase("hello_world") //➞ "helloWorld"
toCamelCase("javascript_is_fun") // ➞ "javascriptIsFun"
console.log('-------------------------------------------------------------')

function toCamelCaseErwan(str) {
    let arrform = str.split("");
    for (let i = 0; i < arrform.length; i++) {
        if (arrform[i] === '_') {
            let capit = arrform[i + 1].toUpperCase();
            arrform.splice(i, 2, capit);
        }
    }
    console.log(arrform.join(''));
}

toCamelCaseErwan("hello_world") //➞ "helloWorld"
toCamelCaseErwan("javascript_is_fun") // ➞ "javascriptIsFun"


console.log('---------------------------------------------------------------')

// /Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns //either true or false.
//* Return a boolean value (true or false).
//* The string can contain any character.
//* When neither an x nor an o is in the string, return true.
//
//Examples:
//XO("ooxx") ➞ true
//XO("xooxx") ➞ false
//XO("ooxXm") ➞ true (case insensitive)
//XO("zpzpzpp") ➞ true (returns true if no x and o)
//XO("zzoo") ➞ false



// function XO (str) {
//     str = str.toLowerCase();
//     return str.split('x').length == str.split('o').length

// }

// console.log(XO("ooxx")) //➞ true
// console.log(XO("xooxx")) //➞ false
// console.log(XO("ooxXm")) //➞ true (case insensitive)
// console.log(XO("zpzpzpp")) //➞ true (returns true if no x and o)
// console.log(XO("zzoo")) //➞ false


// function XO(str) {
//     var countX = 0;
//     var countO = 0;
//     str = str.toLowerCase();
//     for(let i = 0; i<str.length; i++){
//         if(str[i] === 'o') countO++;
//         if(str[i] === 'x') countX++;
//     }
//     return countO === countX;
// }


// console.log(XO("ooxx")) //➞ true
// console.log(XO("xooxx")) //➞ false
// console.log(XO("ooxXm")) //➞ true (case insensitive)
// console.log(XO("zpzpzpp")) //➞ true (returns true if no x and o)
// console.log(XO("zzoo")) //➞ false


function xO(str) {
    console.log((str.length - str.replace(/x/ig, "").length) == (str.length - str.replace(/o/ig, "").length) ? true : false)
}
xO("ooxx");
xO("xooxx");
xO("ooxXm");
xO("zpzpzpp");
xO("zzoo");


console.log('-----------------------------------------------------------------')

//8. Dictionary
//Create a function that takes in an initial word and filters out an array to contain words that start //with the same letters as the initial word.
//
//Examples
//dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
//dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
//dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
//
//**Notes**
//* If none of the words match, return an empty array.
//* Keep the filtered array in the same relative order as the original array of words.

// function dictionary(str, arr) {
//     var NewArr = [];
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] == str + arr[i].substring(str.length)){
//             NewArr.push(arr[i])    
//         }
//     }   
//   console.log(NewArr)
// }

// dictionary("bu", ["button", "breakfast", "border"])// ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])// ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"])// ➞ []


// function dictionary(str, arr) {
//     var newArr = [];
//     for(let i = 0 ; i < arr.length; i++){
//             let word = arr[i];
//             let subWord = word.slice(0, str.length);
//             if(subWord === str)
//             newArr.push(word);
//     }   
//   console.log(newArr)
// }

// dictionary("bu", ["button", "breakfast", "border"])// ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])// ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"])// ➞ []

function dictionary(str, arr) {

    const result = arr.filter(element => element.includes(str))
    console.log(result);

}


dictionary("bu", ["button", "breakfast", "border"]) // ➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) // ➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"]) // ➞ []


console.log('----------------------------------------------');

// 9. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples: 

function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        cube = Math.pow(arr[i], 3);
        sum += cube;
    }
    console.log(sum);
}

sumOfCubes([1, 5, 9]) //➞ 855   //// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([3, 4, 5]) //➞ 216
sumOfCubes([2]) //➞ 8
sumOfCubes([]) //➞ 0

//**Note**
//If given an empty array, return 0.

console.log('------------------------------------------------------');

// Write a function that recursively returns the number of vowels in a string.
// Examples:
// countVowels("apple") ➞ 2
// countVowels("cheesecake") ➞ 5
// countVowels("bbb") ➞ 0
// countVowels("") ➞ 0
// Notes:
// All letters will be in lower case.
// Vowels are: a, e, i, o, u.

function countVowels(str) {
    if (str.length == 0) return 0;
    return ((['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0))) ? 1 : 0) + countVowels(str.slice(1));
}
console.log(countVowels("apple"));
console.log(countVowels("cheesecake"));
console.log(countVowels("martini"));
console.log(countVowels("rhythm"));
console.log(countVowels(""));
console.log(countVowels("b"));

console.log('----------------------------------------------------------');


//6. Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
//   evenNums(8)// ➞ [2, 4, 6, 8] 
//   evenNums(4)// ➞ [2, 4]
//   evenNums(2)// ➞ [2]

//If there are no even numbers, return an empty array.

function evenNums(num) {
    arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr)
}

evenNums(8) // ➞ [2, 4, 6, 8] 
evenNums(4) // ➞ [2, 4]
evenNums(2) // ➞ [2]