function fearNotLetter(str) {
    // const aToZ = /^[a-z]*$/
    const missing = []
    for (let i = 0; i < str.length; i++) {
        missing.push(str.charCodeAt([i]))
        const first = missing[0]
        console.log(first)
        const last = missing[i]
        console.log(last)
    }

    return missing
}




console.log(fearNotLetter("abce"));

// fearNotLetter("abce") // should return "d".
// fearNotLetter("abcdefghjklmno") // should return "i".
// fearNotLetter("stvwx") // should return "u".
// fearNotLetter("bcdf") // should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.