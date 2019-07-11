// # Loops
// ## Practising for loops. Print all your results to the console.
// 1. Addition
// Write a program to add up the numbers 1 to 20.
let sum = 0;
for(let i=1; i<=20; i++){
    sum+=i; // sum = sum +1;
    console.log(sum); 
}


// // 2. There are i bottles of beer on the wall.
// // Write a program that will output, “There is one bottle of beer on the wall.” “There are two bottles of beer on the wall” etc.

for (i=1; i<=4; i++){
    if(i<=1){
    console.log(`There is ${i} bottle of beer on the wall.`)}
    else {
        console.log(`There are ${i} bottles of beer on the wall.`)
    }
}

// // 3. The odd/even reporter
// // Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for(let i=1; i<=20; i++){
    if(i%2 == 0){
    console.log(`${i} is even`)}
    // else if(i%2 !==0)
    else {
        console.log(`${i} is odd`);
    }
}

// // 4. Multiplication Tables
// // Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. “2 * 9 = 18").


// for(let i=0; i<=10; i++){
//     result = i * 9
//     console.log(`${i} * 9 = ${result}`);
// }

for(var i=0; i<=10; i++) {
    var multiplication = i * 9;
    console.log(`${i}*9=${multiplication}`);
}

// // **Bonus**: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(var i=0; i<=10; i++) {
    for(var y=0; y<=10; y ++)
    {
        var multiplier = i * y;
        console.log(`${i}*${y}=${multiplier}`);
    }
}

// // 5. Grades
// // Write a program to calculate the average marks of the following students Then, this average is used to determine the corresponding grade for the class.
// // John    90
// // Tom    60
// // Jane    77
// // Maria    81
// // Carl    65
// // The marks are graded as follows :
// // Range    Grade
// // <60    F
// // <70    D
// // <80    C
// // <90    B
// // <100    A

let average = (90 + 60 + 77 + 81 + 65)/5;
console.log(average);
if(average < 60) {
    console.log(`The class average is F`)
}
    else if(average < 70){
        console.log(`The class average is D`)
    } 
    else if(average<80){
        console.log(`The class average is C`)
    }
    else if(average < 90){
        console.log(`The class average is B`)
    }
    else{
        console.log(`The class average is A`)
    };

// // 6. Fizz Buzz
// // Write a program which iterates the integers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for(let i=1; i<=100; i++){
    if(i%3 == 0 && i%5 == 0){    
    console.log(`FizzBuzz`);
    }
    else if(i%3 == 0){
        console.log(`Fizz`);
    }
    else if(i%5 == 0){
        console.log(`Buzz`);
    }
    else{
        console.log(i);
    }
}

// // 7. Sum of Multiples
// // Write a program to add the multiples of 3 and 5 under 1000.

var totalOfMultiples = 0;
for(var i=0; i<1000; i++)
    {
        if((i%5==0) && (i%3==0)){
            totalOfMultiples = totalOfMultiples + i;
        }
}console.log(totalOfMultiples);

// // 8. Create an array filled with your friends’ and family’s names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
// // **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

let names = ['Alexandr','Florian','Albert','Mahamadi'];
names.forEach(function(item,index){
    console.log(`Hello ${item}!`);
    console.log(`${item} is at index ${index} of my friends 'array'.`)
});

// // 9. Write a program that will output the following using loops:
// // 100 200 300 400 500 600 700 800 900 1000
// // 1 2 4 8 16 32 64 128
// // 0 2 4 6 8 10
// // 3 6 9 12 15
// // 9 8 7 6 5 4 3 2 1 0
// // **Bonus**

// // 100 200 300 400 500 600 700 800 900 1000
let num = 0;
for (let i=1; i<=10; i++){
   num= num + (i*100) + ' ';
}console.log(num);

// // 1 2 4 8 16 32 64 128
num = '';
for(let i=0; i<=7; i++)
{
    num +=Math.pow(2,i)+ ' ';
}console.log(num);

// 0 2 4 6 8 10

num = '';
for(let i=0; i<=5; i++)
{
    num +=(2*i)+ ' ';
}console.log(num);

// // 9 8 7 6 5 4 3 2 1 0

num = '';
for(let i=9; i>=0; i--)
{
    num +=i + ' ';
}console.log(num);

// 10. isPalindrome
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

// var wordToCheck = 'racecar';
// var halfTheLength = wordToCheck.length/2;
// var booleant = true;
// for(let index = 0; index < halfTheLength; index++){
//     if (wordToCheck.slice(index, index+1) !== (wordToCheck.slice(wordToCheck.length-index-1, wordToCheck.length-index))) {
//         booleant = false;
//     }
// }console.log(booleant);

//Solution 2

var originalStr='leveL';
originalStr=originalStr.toLowerCase()
var reverseWord=originalStr.split('').reverse().join('');
console.log(reverseWord);
if(originalStr==reverseWord){
    console.log(true);
}else {
    console.log(false);
}


console.log('-------------------------------------------------------');

// John and a friend invented a simple game where the player with the highest value of his height
// (in centimeters) plus five times his age wins (what a silly game :slightly_smiling_face:

// 1. Create variables for the heights and ages of two friends and assign them some values
// 2. Calculate their scores
// 3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).
// 4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem.

//1.................
let Moe=30, heightMoe = 150;
let Curly=25, heightCurly = 160;

//2.....................
let scoreMoe = heightMoe + Moe*5;
let scoreCurly = heightCurly + Curly*5;
console.log(`Moe's score is ${scoreMoe}!`);
console.log(`Curly's score is ${scoreCurly}!`);

//3........................
if(scoreMoe<scoreCurly) {
    console.log(`The winner is Curly! His score is ${scoreCurly}!`)
} else {
    console.log(`The winner is  Moe! His score is ${scoreMoe}!`)
};

//4.......................
let Harry = 31, heightHarry = 170;
let scoreHarry = heightHarry + Harry*5;
console.log(`Harry's score is ${scoreHarry}!`);
if(scoreHarry>scoreCurly && scoreHarry>scoreMoe) {
    console.log(`The winner is Harry! His score is ${scoreHarry}!`)
} else if(scoreMoe>scoreCurly && scoreMoe>scoreHarry) {
    console.log(`The winner is Moe! His score is ${scoreMoe}!`)
} else if(scoreCurly>scoreMoe && scoreCurly>scoreHarry) {
    console.log(`The winner is Curly! His score is ${scoreCurly}!`)
} else {
    console.log(`The 3 Stooges are at a Draw! Oh no! What will they do??`)
};




