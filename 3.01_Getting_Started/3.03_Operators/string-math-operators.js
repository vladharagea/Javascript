//Math Floor Method

console.log(Math.floor(1.6)); // 1

console.log(Math.floor(3.5)); // 3

console.log(Math.floor(-1.5)); // goes towards negative value -2 
//Math Round Method

console.log(Math.round(2.5)); //3
console.log(Math.round(2.4)); // 3
console.log(Math.round(-2.49)); // -2
console.log(Math.round(-2.70)); // -3  

//Math Ceil Method 

console.log(Math.ceil(0.60)); //1
console.log(Math.ceil(0.40)); //1
console.log(Math.ceil(-1.4)); // goes towards positive value -1

//conversion
console.log(parseFloat("123.456").toFixed(2));
var num = 123.34567;
console.log(typeof num);
console.log(typeof(num.toFixed(2)));

var strNum= num.toFixed(2);
console.log(typeof(strNum));
console.log(typeof(parseInt(strNum)));

// String Methods
/*
toUpperCase
toLowerCase
Slice
Split
length
endsWith
*/
var txt1 = "apple,banana,kiwi";
//Substr Method : string.substr(start, length);

var result1=txt1.substr(7,6);
console.log(`substr method : txt1.substr(7,6) => ${result1}`);


// concat Method : string.concat(string1, string2, ....stringX);

var firstName = "Bob", secondName = "Jones";
var resultName = firstName.concat(secondName);
console.log(`concat Method : firstName.concat(secondName) => ${resultName}`)

console.log(`+ method for joint string: firstName + secondName ==> ${firstName+secondName}`);


// charAt Method : string.charAt(index)

var str1 = "Hello World";
console.log(str1.charAt(0));
console.log(str1.charAt(6));
console.log(str1[6]);


var str2 = ['H', 'a', 'l', 'l', 'o', ' ','W', 'o', 'r', 'l', 'd'];
console.log(str2);

var str3 = 'a,b,c,d,e';
console.log(str3);

// indexOf Method : string.indexOf(searchValue,start);

var str4 = 'hallo sun';
console.log(str4.indexOf("sun"));

//includes() : string.includes(searchValue,start) - Case sensitive

var str5 = 'Hello World, welcome to the Universe';
console.log(str5.includes('World')); // true  is it case sensitive

// trim() method : remove white spaces

var str6 = '       Hello World       ';
console.log(str6.trim());


// replace method : string.replace(searchValue, newValue);

var result2 = txt1.replace('kiwi', 'orange');
console.log(result2);
