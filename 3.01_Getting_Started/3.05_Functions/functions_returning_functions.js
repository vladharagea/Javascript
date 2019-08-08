//Functions Returning Functions

function interviewQuestion(job) {
    console.log('interviewQuestion....')

    if (job == 'designer') {
        //return function(name)
        return function designerJob(name) {
            console.log(`${name} cau you please explain what UX Design is?`);
        }
    }

    if (job == 'teacher') {
        // return funtion (name) 
        return function teacherJob(name) {
            console.log(`What subject du you teach, ${name}`);
        }
    } else {
        return function (name) {
            console.log(`Hello, ${name} what do you do?`);
        }
    }
}

//var funCallBack = interviewQuestion('designer1');
//var funCallBack = function(name){
//     console.log((`Hello, ${name} what do you do?`))
// }

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Alex');

// Another Example

let add = function (a, b) {
    return a + b
}

let multiply = function (a, b) {
    return a * b
}

let calc = function (num1, num2, callBack) {
    return callBack(num1, num2); // 1. add(2, 3);  2. multiply(2, 3);
}

console.log(calc(2, 3, add)); // 1. 5
console.log(calc(2, 3, multiply)) // 2. 6

//Exercise 
//Task: Write function that returns string with capitalized first character of the each word is the string. Put main logic inside getCapitalize function.
//Usage : letterCapitalize('hello world, getCapitalize);
//Output : Hello World
//Usage: letterCapitalize('i am a student of the dci', getCapitalize);
//Output : I Am A Student Of The Dci;


function letterCapitalize(str, getCapitalize) {
    console.log(`${getCapitalize(str)}`)
}

function getCapitalize(str) {
    var words = str.split(' ')
    for (i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words.join(' ');
}

letterCapitalize('hello world', getCapitalize);
letterCapitalize('i am a student of the dci', getCapitalize);