function fearNotLetter(str) {
    // const aToZ = /^[a-z]*$/
    const missing = []
    var startCode = str.charCodeAt(0);
    // console.log(startCode)
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== startCode) {
            return String.fromCharCode(startCode)
        } else {
            startCode++
        }
        // missing.push(str.charCodeAt([i]))
    // const first = missing[0] 
    // console.log(first)
    // const last = missing[i] 
    // console.log(last)
    }

}



console.log(fearNotLetter("abce"));

// fearNotLetter("abce") // should return "d".
// fearNotLetter("abcdefghjklmno") // should return "i".
// fearNotLetter("stvwx") // should return "u".
// fearNotLetter("bcdf") // should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.