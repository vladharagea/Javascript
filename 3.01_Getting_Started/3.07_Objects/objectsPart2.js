console.log();

// let console = {
//     log : function () {

//     },
//     name : 'asfasfasfa'
// };

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

let band = {
    name : 'The National',
    amountOfMembers : 4,
    genre : 'Rock',
    city : 'Cincinnati',
    latestAlbum : 'I Am Easy To Find',
    intruments : ['guitar' , 'base', 'keys', 'drums'],
    kickOutAMember : function() {
        console.log('I kicked out somebody')
    },
    printThis : function() {
        console.log('/////////////////////');
        console.log(this);
        console.log('/////////////////////');
    }
};

console.log(band.latestAlbum);
console.log(band.intruments);
console.log(band['latestAlbum']);
band.active = true;
console.log(band);
band.kickOutAMember();
console.log(band.kickOutAMember());
band.printThis();

console.log('=============================================');
console.log('=============================================');
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

let myLife = {
    name: 'Vladimir',
    nickName: 'Vlad',
    yearOfBirth: 1987,
    myAge: 32,
    anotherYearPassed: function() {
        this.myAge++;
    }
};

console.log(myLife);
myLife.anotherYearPassed();
console.log(myLife);


console.log('=============================================');
console.log('=============================================');
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


// JSON JSON JSON JSON

let response = '{"result" : "true", "count" : 42 }';
let obj = JSON.parse(response);
console.log(response);
console.log(response.result);
console.log(obj);

console.log('=============================================');
console.log('=============================================');
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


// const numbers = [
//     1,
//     [2],
//     [3, [4], 5]
// ];

// let res = JSON.parse(JSON.stringify(numbers));

// console.log(res);

// let array = [1, 2, 3];
// let arrayCopy = array;   // which creates an new array that doesn't have a value of 123 it only adds a pointer towards the original value

// console.log('ARRAY', array);
// console.log('ARRAY COPY', arrayCopy);

// array[0] = 'I have changed, I promise';


// console.log('ARRAY', array);
// console.log('ARRAY COPY', arrayCopy);

///////////////////////////////////////////////

// let origArray = [1, 2, 3];
// let arrayCopy = [...origArray];  // [] + origArray 

// console.log('ARRAY', origArray);
// console.log('ARRAY COPY', arrayCopy);

// origArray[0] = 'I have changed, I promise';


// console.log('ARRAY', origArray);
// console.log('ARRAY COPY', arrayCopy);

/////////////////////////////////////////////////


// let nestedArray = [1, [2], 3];
// let arrayCopy = [...nestedArray];

// console.log('ARRAY', nestedArray);
// console.log('ARRAY COPY', arrayCopy);

// arrayCopy[0] = "Hello";
// arrayCopy[1][0] = 'there';

// console.log('ARRAY', nestedArray);
// console.log('ARRAY COPY', arrayCopy);
                                                //Use this method and the one above if you have flat arrays!!!!!!!!!
/////////////////////////////////////////////////


let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray));

console.log('ARRAY', nestedArray);
console.log('ARRAY COPY', arrayCopy);

arrayCopy[0] = "Hello";
arrayCopy[1][0] = 'there';

console.log('ARRAY', nestedArray);
console.log('ARRAY COPY', arrayCopy);
                                            //Use this method if you have nested arrays!!!!!!!!!!


console.log('============Destructuring=============');
//////////////////////////////////////////////////
///////////////DESTRUCTURING//////////////////////
//////////////////////////////////////////////////

let arr = ['Maurice', 'Sam', 'Firat', 'Flo'];

//let name = arr[0];
let [name, name2, ...whatever] = arr;

console.log(name);
console.log(name2);

arr[0] = 'asdasd';
console.log(name);
console.log(name2);
console.log(whatever);

//////////////////////////////////////////
console.log('=============================');

let chair = {
    color: 'Black',
    size: 'Tiny',
    wheels: 'false',
    model: 'TR2000md',
    changeColor: function (){
        console.log('I am yellow now')
    }
};

let {size, color, changeColor} = chair;

console.log(size);
console.log(color);
changeColor();

///////////////////////////////////


let snow = function() {
    console.log('It\'s snowing');
};

snow();
