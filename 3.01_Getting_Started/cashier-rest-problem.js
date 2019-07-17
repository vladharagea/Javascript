// cashier(3.75, 50)


// "Price: 3.75€, Paid amount: 50€, Change: 46.25€
// 2 x 20€
// 1 x 5€
// 1 x 1€
// 1 x 0.2€
// 1 x 0.05€
// "
// 46.25 - 40 = 6.25


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


function cashBack(amountGiven, price) {
    var rest = (amountGiven - price).toFixed(2)
    console.log(`Price: ${price}€ \nPaid amount: ${amountGiven}€ \nChange: ${rest}€`)
    var change = calcRest(rest, 20)
    var change1 = calcRest(change, 10)
    var change2 = calcRest(change1, 5)
    var change3 = calcRest(change2, 2)
    var change4 = calcRest(change3, 1)
    var change5 = calcRest(change4, 0.5)
    var change6 = calcRest(change5, 0.2)
    var change7 = calcRest(change6, 0.1)
    var change8 = calcRest(change7, 0.05)
    var change9 = calcRest(change8, 0.02)
    var change9 = calcRest(change9, 0.01)
    console.log(`==========================`)}
function calcRest(rest, billSize) {
    var bill = Math.floor(rest / billSize)
    if (bill > 0) {
        console.log(`${bill} x ${billSize}€`)}
    return rest1 = (rest - bill * billSize).toFixed(2);}
cashBack(50, 3.79);
cashBack(40, 13.75);
cashBack(5, 1.74);
cashBack(5, 10.75);
cashBack(50, 33);
cashBack(44, 33.12);
cashBack(44, 22.13);



