// **Comparison Operators Exercises**

// These exercises are aimed at making you familiar with the comparison operators. **Print all your checks to the console.**

// Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.

let x = 20;
let y = 30;

// 1. Check whether x and y are equal.

console.log(x==y);

// 2. Check whether x and y are **not** equal.

console.log(x!==y);
// console.log(x!=y);
// 3. Check whether x is greater than y.

console.log(x > y);

// 4. Check whether x is less than or equal to y.

console.log(x <= y);

// 5. Check whether y is greater than x.

console.log(y>x);

// 6. Declare another variable "z" and give it a value of 5. Multiply z and x and, check whether this result is greater than z added to y.

let z = 5;
let zAndxMultiplied = z*x;
let zAndxAdded = z+x;
console.log(zAndxMultiplied>zAndxAdded);

// 7. Subtract z from x and check whether this result is less than y divided by z.

let zSubstractedFromX = x-z;
let yDividedByz = y/z;
console.log(zSubstractedFromX<yDividedByz);

// 8. Check whether z, x and y are equal.

console.log(z == x == y);
console.log( x==y && y==z);

// 9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.

let restXZ = x % z;
let restYZ = y % z;
console.log(restXZ==restYZ);

// 10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.

let yMinusz = y-z;
console.log(!(zAndxAdded > yMinusz));

// var a = 1;
// console.log(a==a==a);

// var b = 2;
// console.log(b==b==b);