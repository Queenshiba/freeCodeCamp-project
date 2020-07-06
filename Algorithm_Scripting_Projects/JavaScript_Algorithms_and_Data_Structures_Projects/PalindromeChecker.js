function palindrome(str) {
    let replacedStr = str.replace(/\W/g, '')
    let removed = replacedStr.replace(/[^0-9a-z]/gi, '')
    let lowercasesRemoved = removed.toLowerCase()
    let splitRemoved = lowercasesRemoved.split('')

    let reverse = [...splitRemoved].reverse()

    let booleanChecker;
    for (let i = 0; i < splitRemoved.length; i++) {
        if (booleanChecker === false) {
            break
        }
        if (splitRemoved[i] === reverse[i]) {
            // console.log("yes")
            booleanChecker = true
        } else {
            boolenChecker = false
            // console.log("no")
        }
    }
    return booleanChecker
}
console.log(palindrome("eye"));

console.log(palindrome("_eye")) // should return true.
// console.log(palindrome("race car")) // should return true.
// console.log(palindrome("not a palindrome")) // should return false.
//   console.log(palindrome("A man, a plan, a canal. Panama")) // should return true.
//   console.log(palindrome("never odd or even")) // should return true.
// console.log(palindrome("nope")) // should return false.
console.log(palindrome("almostomla")) // should return false.
//   console.log(palindrome("My age is 0, 0 si ega ym.")) // should return true.
//   console.log(palindrome("1 eye for of 1 eye.")) // should return false.
//   console.log(palindrome("0_0 (: /-\ :) 0-0")) // should return true.
// console.log(palindrome("five|\_/|four")) // should return false.