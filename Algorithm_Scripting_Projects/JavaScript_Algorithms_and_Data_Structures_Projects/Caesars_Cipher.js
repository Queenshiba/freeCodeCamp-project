function rot13(str) {
    console.log(str)
    let original = []
    for (let i = 0; i < str.length; i++) {
        original.push(str[i].charCodeAt())
    }
    let added = []
    original.forEach((e) => {
        if (e < 78 && e > 90 ) {
            added.push(e + 13)
        } else if (e < 65 && e > 77 ) {
            added.push(e - 13)
        }

    })
    console.log(added)
    let result = []
    for (let j = 0; j < added.length; j++) {
        result.push(String.fromCharCode(added[j]))
    }
    return result

}


console.log(rot13("SERR PBQR PNZC"))
// should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))
// // should decode to FREE PIZZA!
// console.log(rot13("SERR YBIR?"))
// // should decode to FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
 // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.