
function convertToRoman(num) {
    let main = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

    for (let i = 0; i < roman.length; i++) {

        if (num === main[i]) {
            return roman[i]
        } else {

        }

    }

}

// console.log(convertToRoman(36));

console.log(convertToRoman(2))// should return "II".
console.log(convertToRoman(3))//  should return "III".
console.log(convertToRoman(4))//  should return "IV".
console.log(convertToRoman(5))//  should return "V".
console.log(convertToRoman(9))//  should return "IX".
console.log(convertToRoman(12)) //  should return "XII".
// console.log(convertToRoman(16)) //  should return "XVI".
// console.log(convertToRoman(29)) //  should return "XXIX".
// console.log(convertToRoman(44)) //  should return "XLIV".
// console.log(convertToRoman(45)) //  should return "XLV"
// console.log(convertToRoman(68)) //  should return "LXVIII"
// console.log(convertToRoman(83)) //  should return "LXXXIII"
// console.log(convertToRoman(97)) //  should return "XCVII"
// console.log(convertToRoman(99)) //  should return "XCIX"
// console.log(convertToRoman(400)) //  should return "CD"
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