//Passing Functions as arguments
//Age, Full Age, Heart Rate
name = 'John';
function detailsCalculate(name, birthYear, calcAge)  // calcAge is a placeholder you can write whatever you want , as a name
{
    console.log(`Hi, ${name} your age is ${calcAge(birthYear)}`)
}

function calculateAge(ageParam)
{
    return 2019-ageParam;
}

function isFullAge(ageParam)
{
    return ageParam >=18
}

function maxHeartRate(ageParam)
{   
    age= calculateAge(ageParam)
    if(age >= 18 && age <= 81)
    {
        return 220 - age;
    }
    else return -1;
}

console.log('Age...');
detailsCalculate(name, 1985, calculateAge);
console.log('Full Age ..');
detailsCalculate(name,1985, isFullAge);
console.log('Heart Rate ...')
detailsCalculate(name , 198, maxHeartRate);

console.log('=======================================================')


function letterCount(str, letter, placeHolder){
    console.log(`The letter '${letter}' appears in the string '${str}' ${placeHolder(str, letter)} times`)
}

function countLetter(str, letter){
    letter = letter.toLowerCase();
    str = str.toLowerCase();
    // console.log(typeof((str.split(letter).length - 1)))
    return (str.split(letter).length - 1);
}

letterCount('I am student at DCI', 't', countLetter);

console.log('==========================================================')

