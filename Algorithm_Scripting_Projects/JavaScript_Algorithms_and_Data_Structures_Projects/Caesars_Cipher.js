function rot13(str) {
    // Convert letters to integers between 0 and 65535 representing the UTF-16 code unit
    let original = []
    for (let i = 0; i < str.length; i++) {
        original.push(str[i].charCodeAt())
    }
    // Sort the integers 3 patterns if A(65) - M(77), add 13
    // if N(78) - Z(90), minus 13 
    // if something else like !(33), ?(63), .(46) or space(32), return the integers as it is.
    let added = []
    original.forEach((e) => {
        if (e >= 78) {
            added.push(e - 13)
        } else if (e >= 65) {
            added.push(e + 13)
        } else if (e < 64){
            added.push(e)
        }
    })

    // Lastly convert the converted integers into strings created from the specified sequence of UTF-16 code units
    let result = []
    for (let j = 0; j < added.length; j++) {
        result.push(String.fromCharCode(added[j]))
    }
    // join all letters with no commas
    return result.join('')
}


console.log(rot13("SERR PBQR PNZC"))
// should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))
// // should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?"))
// // should decode to FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
 // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.