// ************GREET ALIENS TASK***************
// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”
// Pass the following array to a global variable named aliens:
// ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]
// greetAliens(aliens);
// // Should print:
// // Oh powerful Blorgous, we humans offer our unconditional surrender! 
// // Oh powerful Glamyx, we humans offer our unconditional surrender! 
// // Oh powerful Wegord, we humans offer our unconditional surrender! 
// // Oh powerful SpaceKing, we humans offer our unconditional surrender! 

function greetAliens (aliens) {
    for(i=0 ; i < aliens.length; i++){
        console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`)
    }
}
greetAliens(["Blorgous", "Glamyx", "Wegord", "SpaceKing"])

// ***********CONVERT TO BABY TASK******************
// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
// const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
// convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
let babyarr =[]; 
function convertToBaby (array) {
    for(i=0; i< array.length; i++){
       babyarr.push('baby ' + array[i])
       // array[i] = 'baby '.concat(array[i]);
    }
    return babyarr;
    // return array
}

console.log(convertToBaby(animals))


// ***********SECRET SOCIETY******************
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.

function societyName (array) {
    array = array.sort();
    // secretSociety = '';
    for(i = 0; i < array.length; i++){
        // secretSociety += array[i].charAt(0);
        array[i] = array[i][0]
    }
    // console.log(secretSociety)
    console.log(array.join(''))
}

societyName(["Adam", "Sarah", "Malcolm"]) //➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) // ➞ "CHLN"

societyName(["Florian", "Vlad", "Maria", "Swantje", "Alexandr"]) //➞ "AFMSV"


