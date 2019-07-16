// task:
//
// define a function that has one parameter: yearBorn
// and it returns the age based on the current year 2019
console.log('----------Task 1:');

function printResult(res) {
    console.log(res);
}

function yourAge(yearBorn) {
    var age,
        currentYear = 2019;
    age = currentYear - yearBorn;
    return printResult(age);
}

yourAge(1983);

// task:
//
// write a function greaterTen that returns true
// if the parameter n is greater than 10. return
// false if it less than 10.
console.log('----------Task 2:');

function greaterTen(num) {
    // return printResult (num > 20 ? `${num} is GREATER than 10!` : `${num} is LESS than 10!`);
    return printResult(num > 20 ? true : false);
}

greaterTen(11);

console.log('----------Task 3:');

// Task:
//
// write a function weather with one parameter "quality".
// return 'great' -> quality between 8 and 10
// return 'good' -> quality between 6 and 8
// return 'okay' -> quality between 3 and 6
// return 'not so okay' -> quality between 0 and 3

function howIsWeather(quality) {
    if (typeof quality != 'number' || quality > 10 || quality < 0)
        return printResult('Input should be a number between 0 and 10!');
    else if (quality >= 0 && quality < 3)
        return printResult('not so okay');
    else if (quality >= 4 && quality < 6)
        return printResult('okay');
    else if (quality >= 6 && quality < 8)
        return printResult('good');
    else if (quality >= 8 && quality <= 10)
        return printResult('great');
}

howIsWeather('good');
howIsWeather(12);
howIsWeather(-1);
howIsWeather(5);
howIsWeather(10);

console.log('----------Task 4:');

// Task:
// invent one function with two parameters
// that returns a string using the two parameters.

function returnString(a, b) {
    // if (typeof a != 'string') {
    //     return printResult((a.toString()).concat(b));
    // } else return printResult(a.concat(b));
    return (typeof a != 'string') ? printResult((a.toString()).concat(b)) : printResult(a.concat(b));
}

returnString(1, 'ABBA');

returnString('ABBA', 1)

returnString(1, 1)

console.log('----------Task 5:');

//Task. Add up
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//Examples of output:
//addUp(4) ➞ 10
//addUp(13) ➞ 91
//addUp(600) ➞ 180300

function addUp(num) {
    let res = 0;
    // for (i = 1; i <= num; i++) {
    //     res += i;
    // }
    for (i = num; i >= 0; i--) {
        res += i;
    }
    return printResult(res);
}

addUp(4);
addUp(13);
addUp(600);
addUp();

console.log('----------Task 6:');

//Task: Less than or Equal to Zero?
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//Examples:
//lessThanOrEqualToZero(3) ➞ false
//lessThanOrEqualToZero(0) ➞ true
//lessThanOrEqualToZero(-4) ➞ true
//lessThanOrEqualToZero(10) ➞ false

function lessThanOrEqualToZero(num) {
    // if num <= 0 return printResult(true)
    // else return printResult(false);
    (num <= 0) ? printResult(true): printResult(false);
}



lessThanOrEqualToZero(3) //➞ false
lessThanOrEqualToZero(0) //➞ true
lessThanOrEqualToZero(-4) //➞ true
lessThanOrEqualToZero(10) //➞ false

console.log('----------Task 7:');

//Task:  Where's Waldo?
//Create a function that takes a string and returns true if Waldo is found and false if he's not.

function isWaldoHere(str) {
    // str.toLowerCase().includes('waldo') ? printResult (true) : printResult (false);
    typeof str != 'string' ? printResult('Not a STRING!') : str.toLowerCase().includes('waldo') ? printResult(true) : printResult(false);
}

//Examples:
isWaldoHere("is there wal here ?") //➞ false
isWaldoHere("I found you Waldo!") //➞ true
isWaldoHere("is wally here?") //➞ false
isWaldoHere("waldo is here") //➞ true

isWaldoHere(12345);
isWaldoHere(true);

console.log('----------Task 8:');

//Task :
//Write a JavaScript function that reverse a number.

function reverseNumber(a) {
    // if (typeof a != 'number' || Number.isInteger(a) != true) return printResult ('Not a integer number')
    // else {
    //     return printResult(a.toString().split('').reverse().join(''))
    // }
    (typeof a != 'number' || Number.isInteger(a) != true) ? printResult('Not a integer number'): printResult(a.toString().split('').reverse().join(''));
}

//Sample Data and output:
//Example x = 32243;
//Expected Output: 34223

reverseNumber(32243);


console.log('==================================================================== Task 9')
//Task 

//Task : Write a JavaScript function that accepts a string as a parameter and
//counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Sample Data and output:
// Vowels : aeiou - AEIOU
// Example string: vowelCount('The quick brown fox')
// Expected Output: 5

// function vowelCount(paramStr)
// {
//     console.log('vowelCount...')
//     paramStr=paramStr.toLowerCase();
//     var vowels = 'aeiou'
//     var vowelCount=0;
//     for(var index=0; index < paramStr.length; index++)
//     {   
//         // console.log(paramStr.indexOf('t'))
//         // console.log('string char=>'+paramStr[index]);
//     }
//     if(vowels.indexOf(paramStr[index]) != -1)
//     {
//         vowelCount = vowelCount + 1;
//     }
//     return vowelCount;
// }

// console.log(vowelCount('The quick brown fox'))    //??????? why still 0 ...it should be 5



// function vowelCount(paramStr)
// {
//   console.log("vowelCount...");
//   paramStr=paramStr.toLowerCase();
//   var vowels="aeiou";
//   var vowelCount=0;
//   //console.log(paramStr);
//   for(var index=0; index < paramStr.length; index++)
//   {
//     //console.log(paramStr.indexOf("t"));
//     //console.log("string char=>"+paramStr[index]);
//    if(vowels.indexOf(paramStr[index]) != -1)
//    {
//       vowelCount = vowelCount +1;
//    }
//   }
//  return vowelCount;
// }
// console.log(vowelCount('The quick brown fox'));

// console.log('=======================================================')
// function getVowels(str) {
//     var vowelsCount = 0;

//     //turn the input into a string
//     str = str.toLowerCase();
//   console.log(str.length)
//     //loop through the str
//     for (var i = 0; i < str.length; i++) {

//     //if a vowel, add to vowel count
//       if  (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     console.log(vowelsCount);
//   }

//   getVowels('ThE quick brown fOx');

// console.log('=======================================================')
//   function getVowels(str) {
//     var m = str.match(/[aeiou]/gi);
//     console.log(m)
//     console.log(m === null ? 0 : m.length);
//   }

//   getVowels('The quIck brown fOx');
// console.log('=========================================================')

//   function countVowels(str) {
//     console.log(str.match(/[aeiou]/gi).length);
// }

// countVowels('The quick brown fox')

// console.log('=========================================================')


// Task: Validate
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
//
// **Notes**
// * The string must contain an @ character.
// * The string must contain a . character.
// * The @ must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The . and the @ must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

// function validEmail(email) {
//       let monkeytail = '@';
//       let dot= '.';

//       for(i=0; i<email.length; i++){
//                 if(email.includes(monkeytail) && 
//                     email.includes(dot) && 
//                     email.indexOf(monkeytail) != 0 && 
//                     email.indexOf(monkeytail) < email.lastIndexOf(dot) + 1)
//                     return `${email} is valid`;
//                 else 
//                     return `${email} is invalid`; 
//       }
// }

// console.log(validEmail('john@example.com'))  //TRUE
// console.log(validEmail('@example.com'))      //FALSE
// console.log(validEmail('john.smith@com'))    //FALSE
// console.log(validEmail('john.smith@email.com')) //TRUE

// console.log('===================================================')

// function isItAnEmail(email) {
//     let counter = 0,
//         l = email.length;

//     if (typeof email != 'string')
//         return printResult('Enter a correct e-mail address!')
//     else {
//         for (i = 0; i < l; i++) {
//             if (email[i] == '@') {
//                 counter++;
//             }
//         }
//         if (counter > 1)
//             return printResult('Enter a correct e-mail address!');
//         else {
//             if (/*email.includes('@') &&*/ email.includes('.')) {
//                 if (email.indexOf('@') > 0 && email.indexOf('.', email.indexOf('@')) > email.indexOf('@') + 1) {
//                     if (email.slice(email.indexOf('@')+1).length >= 4) 
//                         return printResult ('Valid e-mail address!')
//                     else printResult ('Enter a correct e-mail address!')
//                 } else return printResult('Enter a correct e-mail address!')
//             } else return printResult('Enter a correct e-mail address!')
//         }
//     }
// }

// isItAnEmail('florian.buxgooglemail.');
// console.log(isItAnEmail('john@example.com'))  //TRUE
// console.log(isItAnEmail('@example.com'))      //FALSE
// console.log(isItAnEmail('john.smith@com'))    //FALSE
// console.log(isItAnEmail('john.smith@email.com')) //TRUE


console.log('=================================================================== Task 10')

//Task :
//Write a JavaScript function which returns the n rows by n columns identity matrix.

//Sample Output: Sample Output:
//matrix(4);
// 1
// 0
// 0
// 0
// ----------
// 0
// 1
// 0
// 0
// ----------
// 0
// 0
// 1
// 0
// ----------
// 0
// 0
// 0
// 1
// ----------


// function matrix(x) {

//     for (var i = 0; i < x; i++) {
//         for (var j = 0; j < x; j++)
//         //     if (i == j)
//         //         console.log(1);
//         //     else
//         //         console.log(0);
//         // console.log('---------')
//     }
// }

// matrix(4);


function matrix(x) {
    let arr;
    for (var i = 0; i < x; i++) {
        arr = '';
        for (var j = 0; j < x; j++){
         if(i==j) {
             arr += '1';
         } 
         if(i!==j) {
             arr += '0';
         }
    }
    console.log(arr);
}
}

matrix(4);