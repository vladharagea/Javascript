// #1 Palindrome
// A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.
// Understanding the challenge
// The problem can be stated along the following lines: given a string, return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome. For example:
// palindrome('racecar')  ===  true
// palindrome('table')  ===  false
// Reasoning about the challenge
// This challenge revolves around the idea of reversing a string. If the reversed string is the same as the original input string, then you have a palindrome and your function should return true. Conversely, if the reversed string isn’t the same as the original input string, the latter is not a palindrome and your function is expected to return false.

function isPalindrome (str) {
    let reverse = '';
    str = str.toLowerCase();
    for (i=str.length-1; i >= 0; i--){
     reverse += str[i];
    };
    return (str == reverse)? true : false
}


console.log(isPalindrome('racecar'));
console.log(isPalindrome('table'));
console.log(isPalindrome('Anna'));
console.log(isPalindrome('Table'));
console.log(isPalindrome('John'));

console.log('==============================================')

//2# This is a super popular coding challenge — the one question I couldn’t possibly leave out. Here’s how you can state the problem.
// Understanding the challenge
// The FizzBuzz challenge goes something like this. Write a function that does the following:
// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5
// Example:
// fizzBuzz(5) returns:
// 1
// 2
// fizz
// 4
// buzz

function fizzBuzz(n){
    for (i=1; i <= n; i++){
        if(i%3==0 && i%5==0)
        console.log('FizzBuzz')
        else if (i%5==0)
        console.log('Buzz')
        else if(i%3==0)
        console.log('Fizz')
        else console.log(i)
    }
}

fizzBuzz(5);
fizzBuzz(15);

console.log('==========================================')

//3# A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.
// Understanding the challenge
// You can state this challenge in the following terms: write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example:
// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false
// Reasoning about the challenge
// The first thing to notice is that you’ll need to compare each letter in the two input strings, not only in terms of which letters they are but also how many of each letter there are in both strings. A way of mapping this information would look something like this:
// finder --> f: 1        friend --> f: 1
//            i: 1                   r: 1
//            n: 1                   i: 1
//            d: 1                   e: 1
//            e: 1                   n: 1
//            r: 1                   d: 1
// A suitable data structure to hold the anagram data would be a JavaScript object literal: the key is the letter character and the value is the number of times that letter is contained in the given string.
// Next, pay attention to these edge cases:
// make sure letter casing isn’t factored into the comparison; just transform both strings into either lower case or upper case
// leave everything that isn’t a character out of the comparison; a good option would be to use a regular expression.



console.log(anagram('finder', 'Friend'))//  --> true
console.log(anagram('hello', 'bye'))// --> false

function anagram(str1, str2) {
   
    return (readyUp(str1) == readyUp(str2))? true : false

};

function readyUp(str) {
    str = str.toLowerCase().replace(/[\W_]/g).split('').sort().join('');
    return str
};



