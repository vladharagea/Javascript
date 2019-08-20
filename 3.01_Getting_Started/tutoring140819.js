// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
// Months
// January
// February
// March
// April
// May
// June
// July
// August
// September
// October
// November
// December
// Examples
// month_name(3) ➞ "March"
// month_name(12) ➞ "December"
// month_name(6) ➞ "June"

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dec'];

function month_name(num) {
    return months[num - 1];
}

console.log(month_name(3));
console.log(month_name(12));
console.log(month_name(6));


console.log('---------------------------------------------------')

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

// function changeEnough(arr, price) {
//     let sum = arr[0]* 0.25 + arr[1] * 0.10 + arr[2] * 0.05 + arr[3] * 0.01;
//     return sum >= price; 
// }

// console.log(changeEnough([2, 100, 0, 0], 14.11))// ➞ false
// console.log(changeEnough([0, 0, 20, 5], 0.75))// ➞ true
// console.log(changeEnough([30, 40, 20, 5], 12.55))// ➞ true
// console.log(changeEnough([10, 0, 0, 50], 3.85))// ➞ false
// console.log(changeEnough([1, 0, 5, 219], 19.99))// ➞ false


function changeEnough(arr, num) {
    let sum = 0;
    let change = [0.25, 0.10, 0.05, 0.01];
    for(let i = 0; i < arr.length; i++ ){
        sum += arr[i] * change[i];
    }
    return sum >= num
}


console.log(changeEnough([2, 100, 0, 0], 14.11))// ➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75))// ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55))// ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85))// ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99))// ➞ false


console.log('---------------------------------------------------------');
