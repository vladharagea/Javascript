//Let's make a function that concats "bla" 5 times to a string

// function concat(str) {
//     for(i=0; i<5; i++){
//         str+='bla';
//     }
//     console.log(str)
// }
// concat('babylon');


function concat(str) {
    //if (we added 5 blas)
    //console.log(str)
    //return
    //else
    //keep of doing it
    str = str + 'bla'
    console.log(str)
    if (str.length > 22) {
        console.log(str)
        return;
    }
    concat(str);
}

concat('babylon')

//Make a recursive function that take a number and prints all the numbers from 0 till n

// function printNumbers(n) {
    // //body

    // console.log(n)
    // //termination
    // if(n==0) return;
    // //recursion
    // printNumbers(n-1)
    // //body
    // =============================    // 
//     var cnt = 20;
//     console.log(cnt - n);
//     if (n == 0) return;

//     printNumbers(n - 1)

// }

// printNumbers(20)


// function printNumbersBa(n, cnt) {
//     console.log(cnt - n);
//     if (n == 0) return;

//     printNumbersBa(n - 1, cnt)
// }

// printNumbersBa(20, 20)

console.log('======================================================================')

//Exercises 

// Write a recursive function that prints all numbers from 0 till 100

// function printNumbToHundred(n, cnt) {
    
//     console.log(cnt - n);
//     if (n == 0) return;


//     printNumbToHundred(n - 1, cnt);
// }

// printNumbToHundred(100, 100)
console.log('====================================================================')
// Write a recursive function that prints all odd numbers 100 till 0

function printOdds(n) { 
    if(n%2 != 0)
    console.log(n)
    if(n == 0) return;

    printOdds(n-1)
}

printOdds(100)

console.log('========================================================================')
// Write a recursive function that takes a number and returns the sum of all numbers from 1 up to the number passed in.

function printSumOfNum(n, num) {
    num += n;
    if( n == 1){console.log(num)}
    if(n == 0 ) return;
    
    printSumOfNum(n-1, num)
}

printSumOfNum(3, 0)

function sumOfNumbersFromOneToN(n) {
    if (n == 1) return 1;
    return n + sumOfNumbersFromOneToN(n-1)
}

console.log('====================================================================')
// Write a recursive function that calculates the factorial of a number. Factorial of 5 is 5*4*3*2*1 = 120
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); // 120
console.log('===============================================')
// Write a recursive function that raises a number x to the power of y

function power(base, exponent) {
    return exponent == 0? 1 : base * power(base, --exponent);
  }

  console.log(power(3,3))

console.log('====================================================')

// Write a recursive function that reverses a string

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substring(1)) + str.charAt(0);
    }
}

console.log(reverse('dalv'))







