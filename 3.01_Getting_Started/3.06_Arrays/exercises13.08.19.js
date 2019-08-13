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
function finduniq2 (listes) {
    let all_the_uniq = [];
    for (let i = 0; i < listes.length; i++) {
        let boll = 1;
        for (let j = 0; j < listes.length; j++) {
            if (j===i) continue
            else {
                if (listes[i]!==listes[j]) boll *= 1
                else boll *=0
            }      
        }
        if (boll===0) continue
        else all_the_uniq.push(listes[i])
    }
    return all_the_uniq
}
console.log(finduniq2([33,2,5,4,4,8,3,13,2,33,4,5,6,11,12,7,546,3,-45,7,2,6,13,8,4,11]))


console.log('---------------------')


// Create a function toCamelCase() that takes a single string and convert it into camelCase from snake_case.
//Examples:

function toCamelCase(str) {
    str = str.split('_');
    console.log(str)
    for (i = 1 ; i < str.length ; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
        console.log(str[i]) 
    }
    console.log(str.join(""))  
}
    
toCamelCase("hello_world") //➞ "helloWorld"
toCamelCase("javascript_is_fun")// ➞ "javascriptIsFun"
console.log('-------------------------------------------------------------')

function toCamelCaseErwan (str) {
    let arrform = str.split("");
    for (let i = 0; i < arrform.length; i++) {
        if(arrform[i] === '_'){
            let capit = arrform[i+1].toUpperCase();
            arrform.splice(i, 2, capit);
        }
    }
    console.log(arrform.join(''));
}

toCamelCaseErwan("hello_world") //➞ "helloWorld"
toCamelCaseErwan("javascript_is_fun")// ➞ "javascriptIsFun"


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
//     return str.split('x').length == str.split('o').length ? true : false
     
// }

// console.log(XO("ooxx")) //➞ true
// console.log(XO("xooxx")) //➞ false
// console.log(XO("ooxXm")) //➞ true (case insensitive)
// console.log(XO("zpzpzpp")) //➞ true (returns true if no x and o)
// console.log(XO("zzoo")) //➞ false


function XO(str) {
    var countX = 0;
    var countO = 0;
    str = str.toLowerCase();
    for(let i = 0; i<str.length; i++){
        if(str[i] === 'o') countO++;
        if(str[i] === 'x') countX++;
    }
    return countO === countX;
}


console.log(XO("ooxx")) //➞ true
console.log(XO("xooxx")) //➞ false
console.log(XO("ooxXm")) //➞ true (case insensitive)
console.log(XO("zpzpzpp")) //➞ true (returns true if no x and o)
console.log(XO("zzoo")) //➞ false
