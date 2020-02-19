//If a word begins with a vowel you just add "way" to the end.
//If a word does not contain a vowel, just add "ay" to the end.
//Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const regex = /[aeiuo]/g;
    if (str[0].match(regex) || str.match(regex) === null) {
        return str + "way"
    } else if (str.match(regex) === null) {
        return str + "way"
    } else {
        const test = str.indexOf(str.match(regex)[0]) // index of first vowel
        // console.log(test)
        const removeCosonants = str.substr(test)
        const restStr = str.substr(0, test)
        

        return removeCosonants + restStr + "ay"
    }

    //check first letter
    //if consonant, keep move to end till find vowel
    //and add ay to end
    //if vowel leave it, add way to the end





}

// function translatePigLatin(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const arr = []
//     for (let i = 0; i < vowels.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[0] === vowels[i] || str[0] === "r" && str[1] === "h") {
//                 return str + "way";
//             } else if (str[j] !== vowels[i]) {
//                 // arr.push(str[j])
//                 const restCosnantLength = (str[j].length - str.length);
//                 const removed = str.substr(restCosnantLength);
//                 // const restCosnant = str.substr(restCosnantLength)
//                 // const join = removeCosonant + restCosnant;
//                 arr.push(removed)
//                 // console.log(restCosnantLength)  
//             }
//             return arr
//         }
//     }
//     //check first letter
//     //if consonant, keep move to end till find vowel
//     //and add ay to end
//     //if vowel leave it, add way to the end
// }


console.log(translatePigLatin("consonant"));
// should return "onsonantcay"

// translatePigLatin("california")
// //should return "aliforniacay".
// translatePigLatin("paragraphs")
// //should return "aragraphspay".
console.log(translatePigLatin("glove"))
// //should return "oveglay".
console.log(translatePigLatin("algorithm"))
// //should return "algorithmway".
// translatePigLatin("eight")
// //should return "eightway".
console.log(translatePigLatin("schwartz"))
// //should return "artzschway".
console.log(translatePigLatin("rhythm"))
// //should return "rhythmay".