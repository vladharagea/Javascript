let name = `Vladimir`;              // String
let lastName = "Haragea";           // String
var fullName = `Vladimir Haragea`;  // String
var fullName = `Something Else`;    // String Variable
var age = 18;

const myFullName = name + lastName;
const myFullName1 = name + ' ' + lastName;
const myFullName2 = `${name} ${lastName}`;
console.log(myFullName);
console.log(myFullName1);
console.log(myFullName2);

var smt = 'Hello ' + name + '! ' + 'Your age is: ' + age + '.';
var smt2 = 'Hello Vladimir! Your age is: 18.' ;
var smt3 = `Hello ${name}! Your age is: ${age}.`;

console.log(smt);
console.log(smt2);
console.log(smt3);

console.log(typeof smt);
var vr = typeof smt;
console.log(vr);

console.log(smt.length);

var l = smt.length;

console.log(l);

console.log(age); // 18
//one year passes
age = age + 1; //19
age++ //20
age-- //19
age = age + 20 /* 39 */
age = age/20 // 1.95
age = age * 8 // 15.6
age+=5    // 20.6
age-=.6   // 20
age=age % 3 // 2  mod gives the rest of a perfect division
console.log(age);

// name = name + ' P.';
name = `${name} P.`;
console.log(name);


let poem = 'To be or not to be'
console.log(`The originial poem: ${poem}`)
console.log('======================')
// toUpperCase

var steve = poem.toUpperCase()
console.log(`Poem Uppercased in the face: ${steve}`)

// toLowerCase
console.log('========================')
steve = poem.toLowerCase()
console.log(`Poem Lowecased in the face: ${steve}`)

//endsWith

let result = poem.endsWith('?');
console.log(`This poem ends with a rhetorical question mark: ${result}`)

// slice

result = poem.slice(5,10);
console.log(`sliced poem; ${result}`);
