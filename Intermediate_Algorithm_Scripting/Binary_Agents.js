function binaryAgent(str) {
    // set an array for after parsed integers of the specified radix, which is 2 this time
    let parsed = []
    // set an array for convered the intergers to alphabets
    let result = []

    // split input binaries by spaces
    let splitStr = str.split(' ')
    // itorating the length of binaries in the paramater
    for (let i = 0; i < splitStr.length; i++) {
        // convert binary to Decimal
        parsed.push(parseInt(splitStr[i], 2))
        // convert Decimal to alphabets
        result.push(String.fromCharCode(parsed[i]))
    }
    // put all strings together
    return result.join('')

}



console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")) // should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")) // should return "I love FreeCodeCamp!"