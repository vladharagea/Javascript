// TASK 1
// Create a function that takes two numbers as arguments and return their sum. Do it with the 3 different function syntaxes (Function Declaration, Function Expression and Arrow Function)

function functionDeclarationSum(x,y) {
    console.log(x + y);
}

functionDeclarationSum(1, 3);

var functionExpressionSum = function(a,b) {
    console.log(a + b)
};

functionExpressionSum(2, 4);

arrowFunction = (c, d) => {
    console.log(c + d)
  } 

arrowFunction(4, 7);


// TASK 2
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// function isPlural(word) {
//     word = word.toLowerCase();
//     if (word.charAt(word.length - 1) == 's' ) {
//         console.log(`${word} is a plural`)
//     }
//     else console.log(`'${word}' is not a plural`)
// }

function isPlural(word) {
    word.charAt(word.length - 1) == 's' ? console.log(`'${word}' is a plural`) : console.log(`'${word}' is not a plural`)
}

isPlural('cats');
isPlural('bird');
isPlural('hats');
isPlural('brother');


// TASK 3
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

function fairlyPie(slices, recipients, slicesPerRecipients) {
    let x = slices;
    let y = recipients;
    let z= slicesPerRecipients;
        if(x == y && x == z && y == z ) {
            z = x / y;
            console.log(`There are ${x} of slices and ${y} recipients so each gets ${z} slices`)
        } 
        else console.log(`The pie cannot be shared equaly`)
}

fairlyPie(6, 6, 6);


// TASK 4
// Create functions in order to return the following figure:

/*
 		*
 	   ***
 	  *****
 	 *******
 	*********
   ***********
    *********
 	 *******
 	  *****
 	   ***
 		*
*/
function displayPyramide (n) {
    for (i = 0; i < n; i++) {
      let str = ' ';
      for (j = 1; j < n-i; j++) {
        str += ' ';
      }
      for (k = 1; k <= (2*i+1); k++) {
        str += '*';
      }
      console.log(`${str}`);
    }
}

function displayTrenner (n) {
	let str = '';
	for (i = 1; i < (2*n+2); i++) {
		str += '*';
	}
	console.log(str);
}

function displayUpsideDownPyramide (n) {
    for (i = 0; i < n; i++) {
      let str = ' ';
      for (j = n; j > (n-i); j--) {
        str += ' ';
      }
      for (k = n; k >= (2*i - 3); k--) {
        str += '*';
      }
      console.log(`${str}`);
    }
}

console.log(`========== Output:`);


function diamond (n) {
	displayPyramide (n);
	displayTrenner (n);
	displayUpsideDownPyramide (n);
}

diamond (5);