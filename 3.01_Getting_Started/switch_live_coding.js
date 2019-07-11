// var age = 11;


// if (age < 10) {
//     console.log('I am a kiddo!')
// } else if (age > 10 && age < 40) {
//     console.log('I am not a kiddo for sure!')
// } else if (age > 50) {
//     console.log('I have life figured out!')
// } else console.log('You are something else!');

// switch (true) {
//     case (age > 0 && age < 10):
//         console.log('I am a kiddo!');
//         break;
//     case (age > 10 && age < 40):
//         console.log('I am not a kiddo');
//         break;
//     case (age < 50):
//         console.log('I have life figured out!');
//         break;
//     default:
//         console.log('You are something else');
// }   

// switch(age) {
//     case 10:
//         console.log('You are 10 years old');
//         break;
//     case 20:
//         console.log('You are 20 years old');
//         break;
//     case 50:
//         console.log('You are 50 years old');
//         break;
//     default:
//         console.log('You are somewhere between!')
// }

let age = 11;

// do {
//     age++;
//     console.log(`You are ${age} age old`)
// } while (age < 50); // it goes up to 50 because you first increment it and in redoes the formula

do {
    if (age % 5 == 0) {
        console.log(`Your age is ${age}`)
    }
    age++;
} while (age < 50);


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

let enterDaKlub = (myName == firstN ||
    myName == secondN ||
    myName == thirdN ||
    myName == fourthN ||
    myName == fifthN) ? 'You are in' : "Nope"
console.log(enterDaKlub);


// 2. Assume you have an algorithm that takes as input the name of a band and it returns the genre of music they play. Make an if else if interpretation of that algorithm with 5 music bands. If the music band is not recognized return a statement that says 'Who are ${bandName}. Never heard of them...'

// var bandName = 'Justin Bieber';
// if (bandName == 'Metallica') {
//     console.log(`Rock`)
// } else if (bandName == 'Disturbed') {
//     console.log('Alternative Rock')
// } else if (bandName == 'Linkin Park') {
//     console.log('Alternative Rock')
// } else if (bandName == 'GunsNRoses') {
//     console.log('Rock')
// } else if (bandName == 'Ed Sheeran') {
//     console.log('Pop')
// } else {
//     console.log(`Who is ${bandName}? Never heard of him...`)
// };


// var firstB = 'Metallica';
// var secondB = 'Disturbed';
// var thirdB = 'Linkin Park';
// var fourthB = 'GunsNRoses';
// var fifthB = 'Ed Sheeran';
// if ( bandName === firstB || 
//         bandName === secondB || 
//         bandName === thirdB|| 
//         bandName === fourthB || 
//         bandName === fifthB) {
//     console.log('You can go in')
// } else (console.log(`Who is ${bandName}? Never heard of him...`));

// switch(bandName) {
//         case 'Metallica':
//             console.log('Rock');
//             break;
//         case 'Disturbed':
//             console.log('Alternative Rock');
//             break;
//         case 'Linkin Park':
//             console.log('Alternative Rock');
//             break;
//         case 'GunsNRoses':
//             console.log('Rock');
//             break;
//         case 'Ed Sheeran':
//             console.log('Pop');
//             break;
//         default:
//             console.log(`Who is ${bandName}? Never heard of him...`);
//     }

// switch(bandName) {
//     case 'Metallica':    
//     case 'GunsNRoses':
//         console.log(`Rock`);
//         break;
//     case 'Linkin Park':
//     case 'Disturbed':
//         console.log(`Alternative Rock`);
//         break;
//     case 'Ed Sheeran':
//         console.log('Pop');
//         break;
//     default:
//         console.log(`Who is ${bandName}? Never heard of him...`);
// }
// var bandName = 'Justin Bieber';
// var firstB = 'Metallica';
// var secondB = 'Disturbed';
// var thirdB = 'Linkin Park';
// var fourthB = 'GunsNRoses';
// var fifthB = 'Ed Sheeran';

// let musicGenreRock = (
//     bandName == firstB ||
//     bandName == fourthB) ? 'Rock' : `Who is ${bandName}? Never heard of him...`
// console.log(musicGenreRock);

// let musicGenreAltRock = (
//     bandName == secondB ||
//     bandName == thirdB) ? 'Alternative Rock' : `Who is ${bandName}? Never heard of him...`
// console.log(musicGenreAltRock);

// let musicGenrePop = (bandName == fifthB) ? 'Pop' : `Who is ${bandName}? Never heard of him...`
// console.log(musicGenreRock);