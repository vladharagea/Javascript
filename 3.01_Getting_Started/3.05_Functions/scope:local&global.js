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


// let userFirstName='John';
// function showMessage(){
//     //Case 1
//     let userFirstName = 'Bob';
//     let message = 'Hello, '+ userFirstName;
//     console.log(message);
// }
// console.log(userFirstName); // John
// showMessage(); // Bob
// console.log(userFirstName); // John

console.log('==============================================')

//Task : Make Two Functions
//Create one global variable that contains information from both functions and show it in console log.
//Function 1 : Contains Personal Info (Full name, date of birth, Title, age)
//Function 2 : Contains Address Info (City,State,Zip, Country)
//Hint Take Third function to merge both values and put in global variables.

var completeInfo = personalInfo('Brad', 'Pitt', '1971', 'actor', '51') + " " + addressInfo('Memphis', 'USA'); 

function personalInfo(...args){
    var firstName= args[0];
    var lastName = args[1];
    var dateOfBirth = args[2];
    var title = args[3];
    var age = 51
    let sum = firstName + " " + lastName + " " + dateOfBirth + " " + title + " " + age;
    return sum;
}

// personalInfo('Brad', 'Pitt', '1971', 'actor', '51');

function addressInfo(...args){
    var city = args[0];
    var country = args[1];
    let sum = city + " " + country;
    return sum;
}

// addressInfo('Memphis', 'USA');

console.log(completeInfo);

console.log('================================================');

// function personalInfo(title, fullName, birth, age) {

//     let totalInfo = (`${title} ${fullName} ${birth} ${age} years old` + " ")
//     return totalInfo;
// }

// function addressInfo(city, state, zip, country) {
    
//     let totalInfo = (`${city} ${state} ${zip} ${country}`)
//     return totalInfo;
// }

// var dataInfo = personalInfo("Mr", "Carlos Pérez", "12.10.2000", "19") + addressInfo("Barcelona", "Spain", "12584", "Venezuela");
// console.log(dataInfo);



