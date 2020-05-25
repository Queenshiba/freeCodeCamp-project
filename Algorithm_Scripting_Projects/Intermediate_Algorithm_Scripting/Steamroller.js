function steamrollArray(arr) {
    // make arr string
    let arrStr = arr.toString()
    // if arr has ",,", make them ","
    let replacedStr = arrStr.replace(",,", ",");
    // then splet them by ","
    let spletReplacedStr = replacedStr.split(",")


    // use map function
    let result = spletReplacedStr.map(item => {
        // if any item is "[object Object]", return {}
        if (item == "[object Object]") {
            return {}
            // else if item is not a number, return item
        } else if (isNaN(item)) {
            return item;
            // else item is a string, convert
        } else {
            return parseInt(item)
        }

    })
    return result
}


console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.