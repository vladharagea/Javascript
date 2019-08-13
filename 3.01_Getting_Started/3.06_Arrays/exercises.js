// #Array Exercises
// ##These exercises are aimed at practicing arrays and array methods. Print each task the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

var euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities)
var secondItem = euroCities[1];
console.log(secondItem)
console.log('===================')
// 2. Change the first item in the array to "Berlin".

euroCities[0] = 'Berlin';
console.log(euroCities)
console.log('===================')

// 3. Print the length of the array "euroCities".

console.log(euroCities.length)
console.log('===================')

// 4. Remove the last item of the array "euroCities".

euroCities.pop()
console.log(euroCities)
console.log('===================')

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push('Budapest')
console.log(euroCities)
console.log('===================')

// 6. Remove the second and third items from the euroCities array.

euroCities.splice(1,2)
console.log(euroCities)
console.log('===================')

// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

var asianCities = ['Beijing', 'Seoul', 'Bangkok', "Tokyo", 'Taipei', 'Hanoi'];
var asianCitiesclone = asianCities.map(x => x)

console.log(asianCitiesclone)

console.log('===================')
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
var itemsThreetoFour = asianCities.slice(2,5);
console.log(itemsThreetoFour);

// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

worldCities = euroCities.concat(asianCities)
console.log(worldCities)

console.log('===================')
// 10. Reverse the order of worldCities.

console.log(worldCities.reverse())

console.log('===================')
// 11. Replace the 3rd item in the array of worldCities with "Toronto".

worldCities[2] = 'Toronto'

console.log(worldCities)
console.log('==================')
// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, 'Washington')
console.log(worldCities)

console.log('====================')
// 13. Write a program to join all elements of the result (worldCities) into a string.
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Output:
// "Berlin,London,Bangkok,Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"

function arrayToString (array, symbol) {
    array = array.join(symbol)
    console.log(array)
}

arrayToString(worldCities, ',')
arrayToString(worldCities, '+')

console.log('==========================')
// 14. Empty the array euroCities while keeping the original intact.

var emptyArray = euroCities.slice(1, 0)

console.log(emptyArray)

console.log('===================')
// #Bonus

// 15. Write a program to reverse the string: "Hello World".
var sayHello = 'Hello World';

function reverseArray(array) {
    console.log(array.split(' ').reverse().join(' '))
}

reverseArray(sayHello)

console.log('==================')
// ##Extra Practice

// **Print the results to the console.**

// 1. Make an array of your siblings' names or your favorite movie characters' names.
var supers = ['Homelander' , 'Maeve', 'Starlight']

// 2. Make an array of your parents' names.

var goodGuys = ['Butcher', 'Mother\'s Milk', 'Frenchie']

// 3. Combine these two arrays.

var theBoys = supers.concat(goodGuys) 
console.log(theBoys)

// 4. Add your pets' names.
theBoys.push('Deep')
console.log(theBoys)

// 5. Reverse the order of the array.

console.log(theBoys.reverse())

// 6. Access one of your goodGuys' names.

console.log(goodGuys[0])

// 7. Update the name of one of your goodGuys.

goodGuys[1] = 'Hughie';
console.log(goodGuys[1]);