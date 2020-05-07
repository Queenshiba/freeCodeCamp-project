function steamrollArray(arr) {
    let arrStr = arr.toString()
    let replacedStr = arrStr.replace(",,", ",");
    let spletReplacedStr = replacedStr.split(",")
    console.log(spletReplacedStr)
    let array = []
    spletReplacedStr.array.forEach(element => {
        // look up how to use map
        array.push
    });

}


// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]])) // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.