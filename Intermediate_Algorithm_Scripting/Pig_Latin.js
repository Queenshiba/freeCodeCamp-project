//If a word begins with a vowel you just add "way" to the end.
//If a word does not contain a vowel, just add "ay" to the end.
//Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[0] === vowels[i] || str[0] === "r" && str[1] === "h") {
                return str + "way";
            } else if (str[j] !== vowels[i]) {

                const removeCosonant = str.substr(str[j]);
                const restCosnantLength = (str[j].length - str.length);
                const restCosnant = str.substr(restCosnantLength)
                const join = removeCosonant + restCosnant;

                console.log( restCosnant)

                return join + "ay"

            }

        }
        //check first letter
        //if consonant, keep move to end till find vowel
        //and add ay to end
        //if vowel leave it, add way to the end
        //
    }
}

// console.log(translatePigLatin("consonant"));
// should return "onsonantcay"

// translatePigLatin("california")
// //should return "aliforniacay".
// translatePigLatin("paragraphs")
// //should return "aragraphspay".
console.log(translatePigLatin("glove"))
// //should return "oveglay".
// console.log(translatePigLatin("algorithm"))
// //should return "algorithmway".
// translatePigLatin("eight")
// //should return "eightway".
// translatePigLatin("schwartz")
// //should return "artzschway".
// console.log(translatePigLatin("rhythm"))
// //should return "rhythmay".