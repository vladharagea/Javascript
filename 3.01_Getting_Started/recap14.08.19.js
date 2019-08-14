//Functions
// Return from function
//////////////////////////////////////////////////
//////////////////////////////////////////////////
function addTwoNumbers(a, b){
    return a + b;
}

addTwoNumbers(20, 20);
console.log(addTwoNumbers(20, 20));
let res = addTwoNumbers(20, 20);

console.log(res)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
console.log('-------------------------------------')

function subTwoNumbers(a, b){
    console.log(a - b);
}

subTwoNumbers(20, 30);

console.log('-------------------------------------');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Loop function with console.log and return

let nums = [12, 15, 99, 871, 1029]

function printAll(arr) {
    console.log('I am about to start a loop');
    for (let i = 0; i < arr.length; i++) {
        if(i == 3)
            break;
        console.log(arr[i]);        
    }
    console.log('I am about to finish the loop');
}

printAll(nums);

console.log('-------------------------------------');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Function's arguments

function babylonize(a, b, c) {
    // arguments = [a, b. c]
    arguments[0] = '120';
    arguments[1] = arguments[1].toUpperCase();
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

babylonize(12, 'Babylon', 'lol');

console.log('-------------------------------------');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//Mean grades of classroom

// function calculateMeans(...grades){
//     // let gr = arguments[2];
//     // let mean = (a + b + c + d) / 4;
//     console.log(arguments);
//     console.log(grades);
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i]
//     }
//     let res = sum / grades.length;
//     console.log(res);
    
// }
// calculateMeans();
// calculateMeans(44);
// calculateMeans(44, 33, 87, 99);
// calculateMeans(44, 33);
// calculateMeans(44, 33, 87, 78, 99, 50, 04, 55);

console.log('----------------------------------------');



function calculateMeans(a, b,...grades){
    // let gr = arguments[2];
    // let mean = (a + b + c + d) / 4;
    // console.log(arguments);
    // console.log(grades);
    if(arguments.length < 2){
        console.log(`Please give at least two arguments`);
        return;
    }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    let res = sum / arguments.length;
    console.log(res);
    
}
calculateMeans();
calculateMeans(44);
calculateMeans(44, 33, 87, 99);
calculateMeans(44, 33);
calculateMeans(44, 33, 87, 78, 99, 50, 04, 55);

console.log('----------------------------------------');


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//String Methods
//Math Methods
//String Methods

