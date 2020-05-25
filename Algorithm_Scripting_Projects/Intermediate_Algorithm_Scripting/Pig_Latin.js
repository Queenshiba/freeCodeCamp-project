// THE RULE OF PIG LATIN
// --- If a word begins with a vowel you just add "way" to the end.
// --- If a word does not contain a vowel, just add "ay" to the end.
// --- Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const vowels = /[aeiuo]/g;
    if (str[0].match(vowels)) { // if the first letter is a vowel
        return str + "way"
    } else if (str.match(vowels) === null) { // if str doesn't have any vowels
        return str + "ay"
    } else {
        const firstVowel = str.match(vowels)[0]; // first vowel
        // Or you can use this instead
        //const [firstVowel] = str.match(vowels);
        const indexOftheFirstVowel = str.indexOf(firstVowel) // index of first vowel
        const removeCosonants = str.substr(indexOftheFirstVowel) //remove consonats in the word
        const restStr = str.substr(0, indexOftheFirstVowel);// the rest of the word with removed consonants

        return removeCosonants + restStr + "ay" // all together
    }
}


console.log(translatePigLatin("consonant"));
// should return "onsonantcay"
console.log(translatePigLatin("california"))
// //should return "aliforniacay".
console.log(translatePigLatin("paragraphs"))
// //should return "aragraphspay".
console.log(translatePigLatin("glove"))
// //should return "oveglay".
console.log(translatePigLatin("algorithm"))
// //should return "algorithmway".
console.log(translatePigLatin("eight"))
// //should return "eightway".
console.log(translatePigLatin("schwartz"))
// //should return "artzschway".
console.log(translatePigLatin("rhythm"))
// //should return "rhythmay".