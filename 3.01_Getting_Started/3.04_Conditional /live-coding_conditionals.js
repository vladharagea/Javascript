// if/else statements

//Example 1

var x = 1;
var y = 2;

// if (x > y){
//     console.log('x is greater than y');
// }
// else {
//     console.log('x is not greater than y');
// }
if (x > y){
    console.log('y is greater than x');
}
else if (y > x) {
    console.log('x is greater than y');
}
else  {
    console.log('x is equal y');
}

//Example 2
var isMarried = false;

// if(isMarried==0) {
//     console.log('Bob is married');
// }
// else {
//     console.log('Bob will hopefully marry soon');
// }
if(undefined) {
    console.log('yes');
}
else {
    console.log('no');
}
if(true) {
    console.log('yes');
}
else {
    console.log('no');
}

if(23=='23') // Javascript is weakly type language, it means auto convert one data type to another type. Hence we do not have to do this way if(23 == parseInt("23")); 
 {
    console.log('23=string 23 is correct or not');
}

// Example 3

var age=20;
if(age < 20) {
    console.log('John is a teenager');
}
else if(age>=20 || age < 30) {
    console.log('John is a young man');
}
else if(!(age > 30)) {
    console.log('Here not equal call ...');
}
else {
    console.log('John is a man');
}

// //Exercise
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Assume you have a club that only people named Flo, Swantje, Sam, Mafe and Irem can enter. Make an if else if algorithm that will check if you can enter that club based on your name. Then do the same with a switch case.If you can not enter the club return 'Sorry ${name}, you should change your name and come back tomorrow.'
 
var myName = 'Vlad';
// if (myName === 'Flo') {
//     console.log(`You can go in`)
// } else if (myName === 'Swantje') {
//     console.log('You can go in')
// } else if (myName === 'Sam') {
//     console.log('You can go in')
// } else if (myName === 'Mafe') {
//     console.log('You can go in')
// } else if (myName === 'Irem') {
//     console.log('You can go in')
// } else {
//     console.log(`Sorry ${myName}, you should change your name and come back tomorrow`)
// };


var firstN = 'Flo';
var secondN = 'Swantje';
var thirdN = 'Sam';
var fourthN = 'Mafe';
var fifthN = 'Irem';
// if ( myName === firstN || 
        // myName === secondN || 
        // myName === thirdN || 
        // myName === fourthN || 
        // myName === fifthN) {
//     console.log('You can go in')
// } else (console.log(`Sorry ${myName}, you should change your name and come back tomorrow`));

// switch(myName) {
//         case 'Flo':
//             console.log('You can go in');
//             break;
//         case 'Swantje':
//             console.log('You can go in');
//             break;
//         case 'Sam':
//             console.log('You can go in');
//             break;
//         case 'Mafe':
//             console.log('You can go in');
//             break;
//         case 'Irem':
//             console.log('You can go in');
//             break;
//         default:
//             console.log(`Sorry ${myName}, you should change your name and come back tomorrow`);
//     }

    // switch(myName) {
    //     case 'Flo':    
    //     case 'Swantje':
    //     case 'Sam':
    //     case 'Mafe':
    //     case 'Irem':
    //         console.log('You can go in');
    //         break;
    //     default:
    //         console.log(`Sorry ${myName}, you should change your name and come back tomorrow`);
    // }

    let enterDaKlub = ( myName == firstN || 
                        myName == secondN || 
                        myName == thirdN || 
                        myName == fourthN || 
                        myName == fifthN)? 'You are in' : "Nope"
    console.log(enterDaKlub);