// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let res = arr1.concat(arr2);
// console.log(res);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, arr1];

// console.log(arr2);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


// let arr1 = [1, 2, 3, 4, 5];
// // let arr2 = [6, 7, 8, 9, ...arr1];
// // let arr2 = [...arr1, 6, 7, 8, 9, 10];
// let arr2 = [6, 7, 8, 9, 10];

// console.log(arr2);

// let res = [...arr1, ...arr2];

// console.log(res);


/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

// let arr1 = [1, 2, 3, 4, 5];

// console.log(Math.max(...arr1));

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

// function sumNumbers(num1, num2) {
//     console.log(num1 + num2);
// };

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// sumNumbers(arr1, arr2);


// function sumNumbers(num1, num2) {
//     console.log(num1 + num2);
// };

// let arr1 = [1, 2, 3, 4, 5];

// sumNumbers(...arr1);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


function addTwo(a, b) {
    return a + b;
};

function multiplyByFive (x) {
    return x*5;
};

let res = addTwo(5, 20);
let w = multiplyByFive(res);
// multiplyByFive(addtwo(1, 5));
console.log(w);

