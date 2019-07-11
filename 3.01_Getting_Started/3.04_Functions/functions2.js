// I would like to build an algorithm that gives me the result of following multiplication 13*5, 22*6, 24*24

// let a = 13,
//     b = 5, 
//     c = 22, 
//     d = 6, 
//     e = 25;

// let mult1 = a * b;
// console.log(mult1)


// let mult2 = c * d;
// console.log(mult2);


// let mult3 = e * e;
// console.log(mult3);

console.log('==========================================================')


// function multiplication () {
// let a = 13,
//     b = 5, 
//     c = 22, 
//     d = 6, 
//     e = 25;

// let mult1 = a * b;
// console.log(mult1)


// let mult2 = c * d;
// console.log(mult2);


// let mult3 = e * e;
// console.log(mult3);
// }

// // console.log(mult3); // here it will not work because the var mult3 is defined inside a function. for it to work it has to be defined outside the function

// multiplication();

console.log('==============================================================')


// function multiplication(a,b){
//     console.log(a * b)
// }

// function multiplication(a,b){
//     let mult = a * b;
//     console.log(mult)
// }

// multiplication(13, 5);
// multiplication(22, 6);
// multiplication(24, 24);

// function multiplication(a,b){
//         let mult = a * b;
//         console.log(mult)
//     }
function multiplication(a,b){
            console.log(`My a is ${a}`)
            console.log(`My b is ${b}`)
            if(typeof(a) !== 'number' || typeof(b) !== 'number'){
                console.log(`One of your arguments is not a number`)
                return;
            }
            let mult = a * b
            console.log(mult)
        }
// multiplication(13)
multiplication(13, 15, 25)
multiplication(13, 'babylon')


console.log('====================================================================')

function multByTwentyFive(a, b = 25) {
    console.log(a * b);
}
multByTwentyFive(5)

console.log('========================================================')

//Check if a number is perfectly divided by 7

// function checkIfDividedBySeven (num) {
//     // First we check the input
//     if(isNaN(num)) {
//         console.log(`Feed me a number you fool!`)
//         return
//     }
//     // Then we check if num%7 === 0
//     if(num%7 === 0) {
//         console.log(`${num} is divided by 7`)
//     } else {
//         console.log(`${num} is Not divided by 7`)
//     }
// }

// checkIfDividedBySeven('Steve')
// checkIfDividedBySeven(22)
// checkIfDividedBySeven(49)

console.log('==========================================================')

function checkIfDividedBySeven (num) {
    // First we check the input
    if(isNaN(num)) {
        return false;
    }
    // Then we check if num%7 === 0
    if(num%7 === 0) {
        return true;
    } else {
        return false;
    }
}

// checkIfDividedBySeven('Steve')
// console.log(checkIfDividedBySeven('steve')) This  will print out the boolean of 'steve'
// =========================================
// let res = checkIfDividedBySeven('steve');
// console.log(res);
// ==========================================
// checkIfDividedBySeven(22)
// checkIfDividedBySeven(49)


//Calling a function from within a function
// Input: 5
//1st function: 5*5=25;
//2nd function: 25 * 12 = 300;

function selfMulti (num) {
    console.log(`I am inside selfMulti`)
    let res = num * num;
    console.log(`I have multiplied ${num} by it self`)
    console.log(`I will call multiTwelve for ${res}`)
    multiTwelve(res);
    console.log(`I will print the selfMulti result`)
    console.log(res);
}

function multiTwelve (num) {
    console.log(`I am inside multiTwelve`)
    let res = num * 12;
    console.log(res);
    console.log(`I am leaving multiTwelve`)
}
console.log(`I am about to start calling functions`)
selfMulti(5);
console.log(` I am done calling functions`)
