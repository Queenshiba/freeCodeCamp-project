function palindrome(str) {
    let replacedStr = str.replace(/\W/g, '')
    let removed = replacedStr.replace(/[^0-9a-z]/gi, '')
    let lowercasesRemoved = removed.toLowerCase()
    let splitRemoved = lowercasesRemoved.split('')

    // console.log('splitRemoved', splitRemoved[0])
    console.log(splitRemoved.length)

    let reverse = [...splitRemoved].reverse()
    // let reverseLower = reverse.toLowerCase()
    // console.log('reverse', reverse[0])
    console.log(reverse)

    for (let i = 0; i < splitRemoved.length; i++) {
        if (splitRemoved[i] === reverse[i]) {
            // console.log("yes")
            return true
        } else if(splitRemoved[i] !== reverse[i]) {
            return false
            // console.log("no")
        }
        
    }
}
// palindromse("eye");

// console.log(palindrome("_eye")) // should return true.
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