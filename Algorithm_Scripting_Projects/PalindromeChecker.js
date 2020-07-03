function palindrome(str) {
    let replacedStr = str.replace(/\W/g, '')
    let removed = replacedStr.replace(/[^0-9a-z]/gi, '')
    const splitRemoved = removed.split('')
    console.log('splitRemoved', splitRemoved[0])
    console.log(splitRemoved)
    const reverse = splitRemoved.reverse()
    console.log('reverse', reverse[0])
    console.log(reverse)
console.log(splitRemoved[0])
console.log(reverse[0])
    // for (let i = 0; i < splitRemoved.length; i++) {
    //     // if (splitRemoved[1] === reverse[0]) {
    //     //     console.log('Both arrays are equal!');
    //     // } else {
    //     //     console.log('Arrays are not equal.');
    //     // }
        
    // }

}
// palindromse("eye");

// console.log(palindrome("_eye")) // should return true.
// console.log(palindrome("race car")) // should return true.
console.log(palindrome("not a palindrome")) // should return false.
//   console.log(palindrome("A man, a plan, a canal. Panama")) // should return true.
//   console.log(palindrome("never odd or even")) // should return true.
// console.log(palindrome("nope")) // should return false.
//   console.log(palindrome("almostomla")) // should return false.
//   console.log(palindrome("My age is 0, 0 si ega ym.")) // should return true.
//   console.log(palindrome("1 eye for of 1 eye.")) // should return false.
//   console.log(palindrome("0_0 (: /-\ :) 0-0")) // should return true.
// console.log(palindrome("five|\_/|four")) // should return false.