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