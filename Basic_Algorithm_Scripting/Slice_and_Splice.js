function frankenSplice(arr1, arr2, n) {
    // copy arr2 named arr2copy
    var arr2copy = arr2.slice()
    // keep itrating until the length of arr1
    for (let i = 0; i < arr1.length; i++) {
        // insert arr1[i] to arr2copy
        arr2copy.splice(n, 0, arr1[i])
        //  increment n by 1 each time the loop runs
        n++
    }
    // Return the combined arrays.
    return arr2copy;
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//should return [4, 1, 2, 3, 5]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
//should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice([1, 2], ["a", "b"], 1))
//should return ["a", 1, 2, "b"]