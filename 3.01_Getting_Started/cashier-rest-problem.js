// cashier(3.75, 50)


// "Price: 3.75€, Paid amount: 50€, Change: 46.25€
// 2 x 20€
// 1 x 5€
// 1 x 1€
// 1 x 0.2€
// 1 x 0.05€
// "
// 46.25 - 40 = 6.25
// function fixedTheIssue (num) {
//     parseFloat(num.toFixed(2));
// }

// function cashBack(price, amountPaid) {
//     let twenties = 20;
//     let tens = 10;
//     let fives = 5;
//     let twos = 2;
//     let ones = 1;
//     let twentyCents = 0.2;
//     let fiveCents = 0.05;
//     let oneCent = 0.01;
//     let initialchange = amountPaid - price;
//     initialchange = parseFloat(initialchange.toFixed(2));
//     console.log(`Amount given ${amountPaid}`)
//     console.log(`Price is ${price}`)
//         if (amountPaid < price) {
//             console.log(`Gimme more money bruh!!!`)
//         }
//     console.log(`Change ${initialchange}`)
//     console.log(`--------------`)
//     var change = amountPaid - price;
//     change = parseFloat(change.toFixed(2));
//     var rest = change % twenties;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/twenties;
//         if (change >= twenties){
//             console.log(`${numbills} X 20 Euros`);
//     }

//     var change = change - twenties * numbills
//     change = parseFloat(change.toFixed(2));
//     var rest = change % tens;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/tens;
//         if (change >= tens){
//             console.log(`${numbills} X 10 Euros`);
//     }


//     var change = change - tens * numbills;
//     change = parseFloat(change.toFixed(2));
//     var rest = change % fives;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/fives;
//         if (change >= fives){
//             console.log(`${numbills} X 5 Euros`);
//         }

//     var change = change - fives * numbills;
//     change = parseFloat(change.toFixed(2));
//     var rest = change % twos;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/twos;
//         if (change >= twos){
//             console.log(`${numbills} X 2 Euros`);
//         }    

//     var change = change - twos * numbills;
//     var rest = change % ones;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/ones;
//         if (change >= ones) {
//             console.log(`${numbills} X 1 Euros`);
//         }

//     var change = (change - (ones * numbills));
//     change = parseFloat(change.toFixed(2));
//     var rest = (change % twentyCents);
//     var dividablesum = change - rest;
//     var numbills = dividablesum/twentyCents;
//         if(change >= twentyCents) {
//             console.log(`${numbills} X 20cents`)
//         }

//     var change = (change - twentyCents * numbills);
//     change = parseFloat(change.toFixed(2));
//     var rest = change % fiveCents;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/fiveCents;
//             if(change >= fiveCents) {
//                 console.log(`${numbills} X 5cents`)
//             }
    
    
//     var change = change - fiveCents * numbills
//     change = parseFloat(change.toFixed(2));
//     var rest = change % oneCent;
//     var dividablesum = change - rest;
//     var numbills = dividablesum/oneCent;
//             if(change >= oneCent) {
//                 console.log(`${numbills} X 1cents`)
//             }
//     console.log(`==============`)
// }
// cashBack(3.79, 50);
// cashBack(13.75, 40);
// cashBack(1.74, 5);
// cashBack(10.75, 5);
// cashBack(33, 50);
// cashBack(33.12, 44);
// cashBack(22.13, 44);


// function cashBack(amountGiven, price) {
//     var rest = (amountGiven - price).toFixed(2)
//     console.log(`Price: ${price}€ \nPaid amount: ${amountGiven}€ \nChange: ${rest}€`)
//     var change = calcRest(rest, 20)
//     var change1 = calcRest(change, 10)
//     var change2 = calcRest(change1, 5)
//     var change3 = calcRest(change2, 2)
//     var change4 = calcRest(change3, 1)
//     var change5 = calcRest(change4, 0.5)
//     var change6 = calcRest(change5, 0.2)
//     var change7 = calcRest(change6, 0.1)
//     var change8 = calcRest(change7, 0.05)
//     var change9 = calcRest(change8, 0.02)
//     var change9 = calcRest(change9, 0.01)
//     console.log(`==========================`)}
// function calcRest(rest, billSize) {
//     var bill = Math.floor(rest / billSize)
//     if (bill > 0) {
//         console.log(`${bill} x ${billSize}€`)}
//     return rest1 = (rest - bill * billSize).toFixed(2);}

// cashBack(50, 3.79);
// cashBack(40, 13.75);
// cashBack(5, 1.74);
// cashBack(5, 10.75);
// cashBack(50, 33);
// cashBack(44, 33.12);
// cashBack(44, 22.13);



// 'Teacher's Solution'

//Step one
// I need to give back 10.88
// I check my twenties.
//     No twenties cause 10.88 < 20

// //Step 2
//     I check my tens
//     I can fit a tens
//     newAmount = oldAmount - numberOfTens*ten
//                 = 10.88 - 1*10 = 0.88

// //Step 3
// I check my fives
//     No fives
// //Step 4
// I check my twos
//     No twos
// //Step 5
// I check my ones
//     No ones
// //Step 6
// I check my 50cents
//     I can fit one
//     newAmount = .88 - 1*.50 = .38
// //Step 7
// I check my 20c
//     I can fit one
//     newAmount = .............


    cashier(2.12 , 50);

        function cashier(price, paid) {
            //Print out the transaction details
            let amountOfNotes;
            let change = parseFloat((paid - price).toFixed(2));
            console.log(change)
            console.log(`Price: ${price} \nPaid: ${paid} \nChange: ${change}`)

            //Check twenties
            let curr1 = 20
            if (change >= curr1) {
                amountOfNotes = Math.floor(change / curr1);
                change = parseFloat((change - curr1).toFixed(2));
                change = change % curr1;
                console.log(`${amountOfNotes} x ${curr1}`)
            }

            //Check the tens

            let curr2 = 10
            if (change >= curr2) {
                amountOfNotes = Math.floor(change / curr2);
                change = parseFloat((change - curr2).toFixed(2));
                change = change % curr2;
                console.log(`${amountOfNotes} x ${curr2}`)
            }

            //Check the fives

            let curr3 = 5
            if (change >= curr3) {
                amountOfNotes = Math.floor(change / curr3);
                change = parseFloat((change - curr3).toFixed(2));
                change = change % curr3;
                console.log(`${amountOfNotes} x ${curr3}`)
            }

            //Check for twos

            let curr4 = 2
            if (change >= curr4) {
                amountOfNotes = Math.floor(change / curr4);
                change = parseFloat((change - curr4).toFixed(2));
                change = change % curr4;
                console.log(`${amountOfNotes} x ${curr4}`)
            }

            //Check for ones

            let curr5 = 1
            if (change >= curr5) {
                amountOfNotes = Math.floor(change / curr5);
                change = parseFloat((change - curr5).toFixed(2));
                change = change % curr5;
                console.log(`${amountOfNotes} x ${curr5}`)
            }

            //Check for 50cents

            let curr6 = 0.50
            if (change >= curr6) {
                amountOfNotes = Math.floor(change / curr6);
                change = parseFloat((change - curr1).toFixed(2));
                change = change % curr6;
                console.log(`${amountOfNotes} x ${curr6}`)
            }

            //Check for 20cents

            let curr7 = 0.20
            if (change >= curr7) {
                amountOfNotes = Math.floor(change / curr7);
                change = change % curr7;
                console.log(`${amountOfNotes} x ${curr7}`)
            }

            //Check for 5 cents

            let curr8 = 0.05
            if (change >= curr8) {
                amountOfNotes = Math.floor(change / curr8);
                change = change % curr8;
                console.log(`${amountOfNotes} x ${curr8}`)
            }

            //Check for 2 cents

            let curr9 = 0.02
            if (change >= curr9) {
                amountOfNotes = Math.floor(change / curr9);
                change = change % curr9;
                console.log(`${amountOfNotes} x ${curr9}`)
            }

            //Check for 1 cents

            let curr10 = 0.01
            if (change >= curr10) {
                amountOfNotes = Math.floor(change / curr10);
                change = change % curr10;
                console.log(`${amountOfNotes} x ${curr10}`)
            }
        }

