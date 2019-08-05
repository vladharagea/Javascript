// Scope : Local & Global


// //Local Scope
// function showMessage()
// {
//     let message = 'Hello, I am Javascript';
//     console.log(message);
// }
// showMessage(); // Hello, I am Javascript

// console.log(message); // Error - message will show as 'is not defined'


console.log('==============================================')

//Global Scope

// let userFirstName='John';
// function showMessage(){
//     userFirstName = 'Pinto';
//     let message = 'Hello, '+ userFirstName;
//     console.log(message);
// }
// console.log(userFirstName);; // John
// showMessage(); // Pinto
// userFirstName = 'Bob';
// showMessage(); // Pinto
// console.log(userFirstName); // Pinto

console.log('==============================================')


let userFirstName='John';
function showMessage(){
    //Case 1
    let userFirstName = 'Bob';
    let message = 'Hello, '+ userFirstName;
    console.log(message);
}
console.log(userFirstName); // John
showMessage(); // Bob
console.log(userFirstName); // John