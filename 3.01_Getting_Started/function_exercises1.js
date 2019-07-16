// Write a function that takes as an input a first name and a last name and returns a full name. Then call the function with three different names and last names.

// Write a function that will let you know if a number is divided by 5 and 3. Then call the function for the following number 66,75,123,554,225,455635. After that call the function for all the odd numbers from 0 till 100.

// Write a function that will take as input the lengths of two sides of a triangle and it will return the length of the third side (Pythagorean).

// Write a function that will capitalize each word we give it.

// Break into functions the pyramid example from yesterday.

 //1. 
console.log('1.==================================');

 function fullName (firstName, lastName)
    {
        // return firstName + ' ' + lastName

        console.log (`${firstName} ${lastName}`);
    };

 fullName("Vlad", "Haragea");
 fullName('Alexandr', 'Melnic');
 fullName('Florian', 'Bux');

 //2.
 console.log('2 a)===================================');

 function isDividedByFiveAndThree (num) {
    if (num%5==0 && num%3==0)
    console.log(`${num} is dividable by 3 and 5`);
    else 
    console.log(`${num} is NOT dividable by 3 and 5`); 
 };
 
 isDividedByFiveAndThree(66);
 isDividedByFiveAndThree(75);
 isDividedByFiveAndThree(123);
 isDividedByFiveAndThree(554);
 isDividedByFiveAndThree(225);
 isDividedByFiveAndThree(455635);

 console.log('2 b)====================================');

 
function onlyOddsDividableByFifteen(num=100){
for (let i=0;i<=num; i++){
    if (i%2 !==0 && i%15 == 0)
       console.log(i);    
}
};

onlyOddsDividableByFifteen();


//3. 
console.log('3.====================================');

function thirdTriangleSide(a,b) {
    let c = Math.pow(a,2)+Math.pow(b,2)
    let d = Math.sqrt(c);
    let x = d.toFixed(2);
    let y = parseFloat(x)
    console.log(y);
}

thirdTriangleSide(2,3);

//4.

