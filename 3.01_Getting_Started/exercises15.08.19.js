// 7. Pig Latin Translation
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

// **Rules**
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

// //Examples:
// pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay"
// pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay"
// pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay"

//**Notes**
//Be sure to preserve proper capitalization, ignore punctuation.

// function pigLatin (str) { 
//     str = str.replace( /[^a-zA-Z _]/ , "").toLowerCase().split(' ');
//     piggish = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i][0].match(/[aeiou]/)){
//             piggish += str[i] + 'way '
//         }  
//         else piggish += str[i].substring(1) + str[i][0] + 'ay ';
//     }
//     piggish = piggish[0].toUpperCase() + mix.substring(1);
//     console.log(mix);
// }


// function pigLatin (str) { 
//     str = str.replace( /[^a-zA-Z _]/g , "").toLowerCase().split(' ');
//     mix = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i][0] == 'a' || str[i][0] == 'e' || str[i][0] == 'i' || str[i][0] == 'o' || str[i][0] == 'u'){
//             mix += str[i] + 'way '
//         }  
//         else mix += str[i].substring(1) + str[i][0] + 'ay ';
//     }
//     mix = mix[0].toUpperCase() + mix.substring(1);
//     console.log(mix);
// }



// function pigLatin(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (str.includes('.')) 
//         str = str.slice(0, str.length - 1);
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i].split('');
//         if (!vowels.includes(str[i][0])) {
//             str[i].push(str[i][0]);
//             str[i].shift();
//             str[i].push('ay');
//             if (i == 0)
//                 str[i][0] = str[i][0].toUpperCase();
//         } else 
//             str[i].push('way');
//         if (i == str.length - 1) 
//             str[i].push('.');
//         str[i] = str[i].join('');
//     }
//     str = str.join(' ');
//     return str;
// }


function pigLatin(str) {
    let arr = str.toLowerCase().split('.').join('').split(' ');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let firstLetter = word[0];
        if(firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
            arr[i] = word + 'way';
        } else {
            arr[i] = word.substring(1) + firstLetter + 'ay' 
        }
    }
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
    console.log(arr.join(' '));
}


pigLatin("Cats are great pets.");// ➞ "Atscay areway reatgay etspay"
pigLatin("Tom got a small piece of pie.");// ➞ "Omtay otgay away allsmay iecepay ofway iepay"
pigLatin("He told us a very exciting tale.");// ➞ "Ehay oldtay usway away eryvay excitingway aletay"