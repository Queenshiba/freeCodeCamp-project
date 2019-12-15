//make a function that return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
//make both arrays lowercase
    let firstArr = arr[0].toLowerCase();
    let secondArr = arr[1].toLowerCase();
//itorate while going through all the letters in the second array 
    for (let i = 0; i < secondArr.length; i++) {
        // if letters in the second array are NOT included in the first array and return -1 ,which means less than 0 and retrun false
        if (firstArr.indexOf(secondArr[i]) < 0) return false;
    }
    // if not (included the letters) retrun true
    return true;
}

console.log(mutation(["hello", "hey"])) //should return false.
console.log(mutation(["hello", "Hello"])) //should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))//should return true.
console.log(mutation(["Mary", "Army"])) //should return true.
console.log(mutation(["Mary", "Aarmy"])) //should return true.
console.log(mutation(["Alien", "line"])) //should return true.
console.log(mutation(["floor", "for"])) //should return true.
console.log(mutation(["hello", "neo"])) //should return false.
console.log(mutation(["voodoo", "no"])) //should return false.
console.log(mutation(["ate", "date"]))//should return false.
console.log(mutation(["Tiger", "Zebra"])) //should return false.
console.log(mutation(["Noel", "Ole"])) //should return true.