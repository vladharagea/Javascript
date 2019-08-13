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
    for (i = 1 ; i < str.length ; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1); 
    }
    console.log(str.join(""))  
}
    
toCamelCase("hello_world") //➞ "helloWorld"
toCamelCase("javascript_is_fun")// ➞ "javaScriptIsFun"

var bla = 'hello_world'
bla = bla.split('_')
console.log(bla)
bla = bla[0].split('')
console.log(bla[0].toUpperCase())

