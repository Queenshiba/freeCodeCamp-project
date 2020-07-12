function palindrome(str) {
    // replace signs 
    let removedStr = str.replace(/[^0-9a-z]/gi, '')

    // make all lowercase and split each letter
    let lowercaseRemovedStr = removedStr.toLowerCase()
    let splitRemoved = lowercaseRemovedStr.split('')

    // create a new a new array and reverse the order of the original array to compare
    let reverse = [...splitRemoved].reverse()

    // set variable 'booleanChecker' for later
    let booleanChecker;
    for (let i = 0; i < splitRemoved.length; i++) {
        // while the length of splitRemoved 
        // if booleanChecker got false, stop the loop
        if (booleanChecker === false) {
            break
        }
        // if the original array's item is same as the reversed array's,
        if (splitRemoved[i] === reverse[i]) {
            // assign booleanChecker true
            booleanChecker = true
        } else {
            // aasign booleanChecker false
            booleanChecker = false
        }
    }
    return booleanChecker
}

console.log(palindrome("eye"));

console.log(palindrome("_eye")) // should return true.
console.log(palindrome("race car")) // should return true.
console.log(palindrome("not a palindrome")) // should return false.
  console.log(palindrome("A man, a plan, a canal. Panama")) // should return true.
  console.log(palindrome("never odd or even")) // should return true.
console.log(palindrome("nope")) // should return false.
console.log(palindrome("almostomla")) // should return false.
  console.log(palindrome("My age is 0, 0 si ega ym.")) // should return true.
  console.log(palindrome("1 eye for of 1 eye.")) // should return false.
  console.log(palindrome("0_0 (: /-\ :) 0-0")) // should return true.
console.log(palindrome("five|\_/|four")) // should return false.