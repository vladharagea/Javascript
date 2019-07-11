//For  Loops 

// for (let i= 0; i<100; i++) {
//     // The code block that will run if the above check is true
//     console.log(`This is loop number ${i}`)
// }

//Vasilis
// let name = 'Vasilis';
// for (let i=0; i<3; i++) {
//         console.log(`This is loop number ${i}`);
//         name = name + name;
//         console.log(name);
//         console.log(`This is the end of loop number ${i}`);
// }

// let amount = 2;

// for(let i=0; i>5; i++){
//     console.log(`This is loop number ${i}`);
//     amount = amount * amount;
//     console.log(amount);
//     console.log(`This is the end of loop number ${i}`);
// }

// for(let i=1; i<100; i++){
//     if(i%17 == 0){
//         console.log(`The first number that is being perfectly divided by 17 is  ${i}`);
//     }
//     else {console.log(`${i} is not cool.`)}
// }

// for(let i=0; i<=3; i++){
//     console.log(`I am the PARENT loop ${i}.`)
//     for(let j=0; j<=2; j++){
//         console.log(`I am the nested loop of ${i} and my number is ${j}.`)
//     }
// }

let string = '!';
for(let i=0; i<=3; i++){
    string = string + '*';
    console.log(string);
    for(let j=0; j<=2; j++){
        string = string + '-';
        console.log(string)
    }
}
