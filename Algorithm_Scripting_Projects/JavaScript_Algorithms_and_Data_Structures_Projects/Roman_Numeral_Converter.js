
function convertToRoman(num) {
    let main = ["1000", "900", "500", "400", "100", "60", "50", "40", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"]

    let stringSplitedNum = num.toString().split('')
    let devidedNum = []
    let zero = '0'
    for (let i = 0; i < stringSplitedNum.length; i++) {
        devidedNum.push(stringSplitedNum[i] + (zero.repeat(stringSplitedNum.length - (i + 1))))
    }
    console.log(devidedNum)
    let ansewer = []
    for (let j = 0; j < main.length; j++) {
        if (devidedNum.includes(main[j])) {
            ansewer.push(roman[j])
            break
        } 
            }
   
    return ansewer
    
    

    //     else {
    // ansewer.unshift(roman[j].repeat(devidedNum[0] / main[j]))
    // }


}
console.log(convertToRoman(20))// should return "II".

// console.log(convertToRoman(2))// should return "II".
// console.log(convertToRoman(3))//  should return "III".
// console.log(convertToRoman(4))//  should return "IV".
// console.log(convertToRoman(5))//  should return "V".
// console.log(convertToRoman(9))//  should return "IX".
// console.log(convertToRoman(12)) //  should return "XII".
// console.log(convertToRoman(16)) //  should return "XVI".
// console.log(convertToRoman(29)) //  should return "XXIX".
// console.log(convertToRoman(44)) //  should return "XLIV".
// console.log(convertToRoman(45)) //  should return "XLV"
// console.log(convertToRoman(68)) //  should return "LXVIII"
// console.log(convertToRoman(83)) //  should return "LXXXIII"
// console.log(convertToRoman(97)) //  should return "XCVII"
// console.log(convertToRoman(99)) //  should return "XCIX"
console.log(convertToRoman(400)) //  should return "CD"
// console.log(convertToRoman(500)) //  should return "D"
// console.log(convertToRoman(501)) //  should return "DI"
// console.log(convertToRoman(649)) //  should return "DCXLIX"
// console.log(convertToRoman(798)) //  should return "DCCXCVIII"
// console.log(convertToRoman(891)) //  should return "DCCCXCI"
// console.log(convertToRoman(1000)) //  should return "M"
// console.log(convertToRoman(1004)) //  should return "MIV"
// console.log(convertToRoman(1006)) //  should return "MVI"
// console.log(convertToRoman(1023)) //  should return "MXXIII"
// console.log(convertToRoman(2014)) //  should return "MMXIV"
// console.log(convertToRoman(3999)) //  should return "MMMCMXCIX"