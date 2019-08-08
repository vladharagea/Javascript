//Passing Functions as arguments
//Age, Full Age, Heart Rate
name = 'John';

function detailsCalculate(name, birthYear, calcAge) // calcAge is a placeholder you can write whatever you want , as a name
{
    console.log(`Hi, ${name} your age is ${calcAge(birthYear)}`)
}

function calculateAge(ageParam) {
    return 2019 - ageParam;
}

function isFullAge(ageParam) {
    return ageParam >= 18
}

function maxHeartRate(ageParam) {
    age = calculateAge(ageParam)
    if (age >= 18 && age <= 81) {
        return 220 - age;
    } else return -1;
}

console.log('Age...');
detailsCalculate(name, 1985, calculateAge);
console.log('Full Age ..');
detailsCalculate(name, 1985, isFullAge);
console.log('Heart Rate ...')
detailsCalculate(name, 198, maxHeartRate);

console.log('=======================================================')


function letterCount(str, letter, placeHolder) {
    console.log(`The letter '${letter}' appears in the string '${str}' ${placeHolder(str, letter)} times`)
}

function countLetter(str, letter) {
    letter = letter.toLowerCase();
    str = str.toLowerCase();
    // console.log(typeof((str.split(letter).length - 1)))
    return (str.split(letter).length - 1);
}

letterCount('I am student at DCI', 't', countLetter);

console.log('==========================================================')

//Task : Write Javascript function that accepts two arguments, a string and function (you can give function: findNotRepeated).
//Passed Function as argument will check the string and find the not repeated character from string and return that not repeated all characters.
//Sample arguments, "axbyazcddbexcyz", findNotRepeated
//Expected output: e

//bonus task:
// check if there are other elements that do not repeat in the string 
// expected output : el

function letterCheck(str, spotHolder) {
    str = str.toLowerCase();
    console.log(`The element '${spotHolder(str)}' is a non repeating element in the string '${str}'`)
}

// function firstNonRepeated(str) {
//     var result = '';
//     for (var i = 0; i < str.length; i++) {
//       var c = str.charAt(i);
//       if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
//         // return c;
//         result += c;
//       }
//     } return result;

// }

console.log('==========================================')

// function firstNonRepeated(str){
//     for (i = 0; i < str.length; i++){
//         if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
//             return str.charAt(i)        
//         }
//     }
// }

console.log('=============================================')

function firstNonRepeated(str) {
    var counter = 0;
    var result = '';
    for (i = 0; i < str.length; i++) {
        counter = 0;
        for (j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                counter++;
            }
        }

        if (counter < 2) {
            //Main task
            // result = str[i];
            // break;

            //Bonus Task
            result += str[i];
        }
    }
    return result
}

letterCheck("axbyazcddbexcyzl", firstNonRepeated);