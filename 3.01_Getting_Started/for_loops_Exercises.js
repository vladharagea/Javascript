// 12345678910
// let str = "";
// for (let i=1; i<=10; i++){
//     str = str + i;
// } console.log(str);

// // ---------------
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// for (let i=0; i<=10; i++){
//     console.log(i)
// };


// ----------------
// *
// **
// ***
// ****
// *****

// let string = '';
// for (let i=0; i<5; i++){
//     string = string + '*';
//     console.log(string)
// };

// let resStar = '';
// for(i=0 ; i<=4; i++){
//     resStar = resStar + '*';
//     console.log(resStar);
// }


// ----------------
// This is iteration number 1
// This is iteration number 2
// This is iteration number 3
// This is iteration number 4
// This is iteration number 5
// This is iteration number 6
// …….
// This is iteration number 20

// for (let i=0; i<=20; i++){
//         console.log(`This is iteration number ${i}`)
//     };

// // ----------------
// // Print all the odd numbers between 0 and 33

// for(var n = 1; n < 34; n+=2) {
//     console.log(n)};

// // ----------------
// Print all the even numbers between 0 and 33

// for(var n = 1; n < 34; n++) {
//     if(n%2 == 0){
//     console.log(n)};
// }

// ----------------
// Print all the numbers that are perfectly divided by 6 from 0 till 100

// for(var n = 0; n < 101; n++) {
//         if(n%6 == 0){
//         console.log(n)};
//     }


// ----------------
// BA-BA-BA-BA-BA-BY-LON (5 BAs)

// let str1 = 'BA-';
// let str2 = 'BY-';
// let str3 = 'LON';
// let result = '';
// for(let i=0; i<=6; i++)
// {
//     if(i<5)
//         result=result + str1;
//     else if(i==5)
//         result = result + str2;
//     else 
//         result= result + str3;
// }
// console.log(result);

// let stutter = 'BA-'
// for ( i = 0; i<4; i++){
//     stutter = stutter + 'BA-';
//     }
//     console.log(`${stutter}BY-LON`);

// ----------------
// I am a normal for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a normal for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a normal for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a nested a for loop

// for(let i=0; i<3; i++){
//         console.log(`I am a NORMAL loop.`)
//         for(let j=0; j<=2; j++){
//             console.log(`I am the NESTED loop.`)
//         }
//     }

// -----------------

// *
// *!
// *!!
// *!!!
// *!!!*
// *!!!*!
// *!!!*!!
// *!!!*!!!
// *!!!*!!!*
// *!!!*!!!*!
// *!!!*!!!*!!
// *!!!*!!!*!!!

// let strung = '';
// for(let i=0; i<=3; i++){
//     strung = strung + '*';
//     console.log(strung);
//     for(let j=0; j<=2; j++){
//         strung = strung + '!';
//         console.log(strung)
//     }
// }


// -------------------

// 2
// 901
// 902
// 903
// 3
// 904
// 905
// 906
// 4
// 907
// 908
// 909

// for(let i=2; i<=4; i++){
//             console.log(i)
//             for(let j=901; j<=903; j++){
//                 console.log(j);
//             };
//             for(let n=904; n<=906; n++){
//                 console.log(n);
//             };
//         }

// var num1 = 1;
// var num2 = 900;

// for(i=0 ; i <= 2; i++){
//     num1 = num1 + 1; //num1++
//     console.log(num1);
//     for(j = 0; j <= 2; j++){
//         num2 = num2 + 1;//num2++
//     console.log(num2);}
// }
// ----------------
// *****
// ****
// ***
// **
// *

// var str = '*****';
// var x = str.length;

// for (i = 0; i < x; i++) {
//     console.log(str.substr(i));
// }



// let resultStar = '';
// //for (i=4 ; i >= 0; i--)
// for(let i=0; i<=5; i++) 
// {
//     //for(let j = 0; j <= i; j++)
//     for(let j=5-i; j>0; j--)
//     {
//         resultStar=resultStar + '*';
//     }
//     console.log(resultStar);
//     resultStar = '';
// }