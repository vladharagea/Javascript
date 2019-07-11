//Exercise 1

// ```Write and while block that prints out all the numbers from 0 till you current age.
// In 1988 i was 0 years old.
// In 1989 i was 1 year old.
// Etc etc etc```
// let age = 11;

let age = 0;
let year= 1987;

do {
    console.log(`In ${year} I was ${age} years old`)
    age++;
    year++;
} while(age <= 32);



// do {
//     age++;
//     console.log(`You are ${age} age old`)
// } while (age < 50); // it goes up to 50 because you first increment it and in redoes the formula

// do {
//     if (age % 5 == 0) {
//         console.log(`Your age is ${age}`)
//     }
//     age++;
// } while (age < 50);

//=============================================================================================================
// ```Write a while block that returns the hour of a day (0 till 24). 
// If the hour is 0 till 8 return 'It's still night outside'
// If the hour is 9 till 16 return 'OHMAGORD it's hot outside'
// If the hour is 17 till 22 return 'It's quite better actually now'
// If the hour is 23 till 24 return 'Bye bye i am going to bed'```


let time = 0;
    do {
        if (time <= 8 ){
        console.log(`It's ${time} o'clock and it's still night outside`)
        } else if ((time >= 9) && (time <= 16)) {
            console.log(`OHMAGORD it's ${time} o'clock and it's hot outside`);
        } else if ( (time >= 17) && (time <= 22)) {
            console.log(`It's ${time} o'clock and it's quite better actually now`);
        } else if ((time >= 23) && (time <= 24)) {
            console.log(`Bye bye it's ${time} o'clock and i am going to bed`);
        }
        time++;
    } while (time <= 24);