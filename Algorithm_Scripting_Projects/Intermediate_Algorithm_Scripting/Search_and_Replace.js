function myReplace(str, before, after) {
    const upperCase = /[A-Z]/g; // all uppercase letters named as uppercase


    if (before[0].match(upperCase)) { // if the first letter of before has uppercase
        const upperCasedAfter = after[0].toUpperCase(); // also make the first letter of after uppercase
        const restOfAfter = after.slice(1); // remove the first letter of after
        const newAfter = upperCasedAfter + restOfAfter; // combine the uppercased first letter and after without the first letter 
        const replace = str.replace(before, newAfter) // replace before to newAfter 
        return replace
    } else { // if the first letter of before is not uppercase
        return str.replace(before, after) // simply replace it
    }
}



console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


myReplace("Let us go to the store", "store", "mall")
//should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
//should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling")
//should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john"))
//should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms")
// should return "Let us get back to more Algorithms".


// My note
    //find the second argument in the first
    //check the first letter of the second arg is uppercase or not
    //if the uppercase change the third arg
    //replace the third arg to where the second one was