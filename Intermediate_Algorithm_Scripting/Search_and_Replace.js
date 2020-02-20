function myReplace(str, before, after) {
    //find the second argument in the first
    //check the first letter of the second arg is uppercase or not
    //if the uppercase change the third arg
    //replace the third arg to where the second one was

    const upperCase = /[A-Z]/g;
    // const search = str.match(before)


    if (before[0].match(upperCase)) {
        const upperCasedAfter = after[0].toUpperCase()
        const restOfAfter = after.slice(1)
        const newAfter = upperCasedAfter + restOfAfter
        const replace = str.replace(before, newAfter)
        return replace
    } else {
        return str.replace(before, after)
    }
}



console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// myReplace("Let us go to the store", "store", "mall")
// //should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
// //should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling")
// //should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john"))
// //should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms")
//should return "Let us get back to more Algorithms".