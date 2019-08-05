//Rest Operators 

// function countArguments(param1, param2, param3)
// {
//     console.log(param1 + " " + param2 + "" + param3);
// }


function countArguments(...args)
{   
    var param1 = args[0];
    var param2 = args[1];
    var param3 = args[2];

    console.log(param1 + " " + param2 + " " + param3);
}

countArguments('welcome', 'to', 'Earth');

// Task : Pass all your personal info via function


function personalInfo(firstName, lastName, birthDate, ...args){
    var title = args[0];
    var city = args[1];
    var zip = args[2];
    var country = args[3];

    console.log(`${firstName} ${lastName}, birth date is ${birthDate}, he is a ${title},born in ${city}, ${zip}, in the ${country}`);
}

personalInfo('Geralt', 'of Rivia', 'unknown', 'witcher', 'Kaer-Morhen', '12486', 'Northern-Kingdoms')