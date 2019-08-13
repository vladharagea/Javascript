// //Write a program to compute the average marks of the following students Then, this average is used to determine the corresponding grade.
// //David    80
// //Vinoth 77
// //Divya    88
// //Ishitha 95
// //Thomas 68
// //
// //The grades are computed as follows :
// //Range    Grade
// //<60    F
// //<70    D
// //<80    C
// //<90    B
// //<100 A
​
// let students = [
//     ["David", 80],
//     ["Vinoth", 77],
//     ["Divya", 88],
//     ["Ishitha", 95],
//     ["Thomas", 68]
// ];
​
// const avgTask = arr => {
//     let avgCounter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         avgCounter += arr[i][1];
//     }
//     let avg = (avgCounter / arr.length);
//     console.log(`Average mark: ${avg}`);
​
//     if (avg < 60) console.log("Grade: F");
//     else if (avg < 70) console.log("Grade: D");
//     else if (avg < 80) console.log("Grade: C");
//     else if (avg < 90) console.log("Grade: B");
//     else console.log("Grade: A");
// }
// avgTask(students);
​
// console.log("-------------------");
​
// //2. Write a program to compute the sum and product of an array of integers.
// let sumAndProduct = [1, 2, 3, 4],
//     sum = 0,
//     product = 1,
//     i;
​
// const calc = arr => {
// for (i=0; i<arr.length; i++) {
//     sum += arr[i];
//     product *= arr[i];
// }
// console.log(`Sum: ${sum} \nProduct: ${product}`);
// }
// calc(sumAndProduct);
​
// console.log("-------------------");
​
​
// //3. Write a program which prints the elements of the following array:
// //let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// //Sample Output:
// //"row 0"
// //" 1"
// //" 2"
// //" 1"
// //" 24"
// //"row 1"
// //" 8"
// //" 11"
// //" 9"
// //" 4"
// // let rowArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// // const printArrayElements = arr => {
// //     for(let i=0; i<arr.length; i++){
// //         console.log(`row ${i}`);
// //         for(let j=0; j<arr[j].length; j++){
// //             console.log(arr[i][j]);
// //         }
// //     }
// // }
// // printArrayElements(rowArr);
​
// //Missing Number
// //Create a function that takes an array of numbers between 0 and 10 (excluding one number) and returns the missing number.
// //Examples:
// //missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// //missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// //missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
​
// // CASE 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 55;
const missing = arr => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    return total - sum;
}
​
// // CASE 2
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const missing = arr => {
//     arr = arr.sort(function(a, b){
//         return a-b;
//     });
​
//     console.log (arr);
​
//     for(let i=0; i<numbers.length; i++){  
//             if(arr[i] != numbers[i]) return numbers[i];            
//     }
// }
​
//     //CASE 3
// const missing = arr => {
//     arr.push(0);
//     let sortedArray = arr.sort();
//     // console.log(sortedArray);
//     if(sortedArray[2]==10)
//     {
//         sortedArray.splice(2,1);
//         // console.log(sortedArray);
//     }
//     else
//     {
//         return 10;
//         console.log(sortedArray);
//     }
​
//     for(let i=0; i<sortedArray.length; i++){  
//             if(i != sortedArray[i]) return i;            
//     }
// }
​
// //CASE 4
// // function missing(arr, numbers) {
// //     for (i = 0; i < numbers.length; i++) {
// //         if (arr.indexOf(numbers[i]) == -1) return numbers[i];
// //     }
// //     return `No missing Item!`;
// // }
​
// //CASE 5
// function missing(arr) {
//     arr = arr.sort(function (a, b) {
//         return a - b;
//     });
//     for (i = 0; i <= arr.length; i++) {
//         if (arr[i] !== (i + 1)) {
//             return i + 1;
//         }
//     }
// }
​
console.log(missing([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missing([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missing([10, 5, 1, 2, 4, 6, 8, 3, 9]));
​
​
// Remove duplicate items from an array (ignore case sensitivity).
// Input : var nums = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
//Output nums= [1, 2, 3, 4, 5, 6,7,8]
​
​
//     let nums = [1, 2, 2, "e", "e", 4, 4, 4, 4, 5, 4, 7, 8, 7, 3, 6];
//     let x = (nums) => nums.filter((i,j) => nums.indexOf(i) === j)
//     x(nums);
​
// console.log(x(nums));