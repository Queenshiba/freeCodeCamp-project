//If a word begins with a vowel you just add "way" to the end.
//If a word does not contain a vowel, just add "ay" to the end.
//Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        if (str[0] == vowels[i]) {
            return str + "way";
        } else if (str[0] !== vowels[i]) {
            const removeFirstCosonant = str.substr(1);
            return removeFirstCosonant + str[0] + "ay";
            if  (str[1] !== vowels[i]) {
            const removeSecondCosonant = str.substr(1, 2);
            return removeSecondCosonant + str[0] + str[1]  + "ay";
        } 
    }
    //check first letter

    //if consonant, keep move to end till find vowel
    //and add ay to end
    //if vowel leave it, add way to the end
    //
    }
}

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
// translatePigLatin("schwartz")
// //should return "artzschway".
// translatePigLatin("rhythm")
// //should return "rhythmay".