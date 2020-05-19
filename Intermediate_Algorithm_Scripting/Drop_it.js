function dropElements(arr, func) {
    let test = []
    arr.forEach((item) =>{
            if (func(item)) {
                
            } else {
                test.push(item)
            }
    })
    return test
}
// return stop for loop, andrew ganna check
// // console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })) // should return [3, 4].
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })) // should return [1, 0, 1].
console.log(dropElements([1, 2, 3], function (n) { return n > 0; })) // should return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; })) // should return [].
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })) // should return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })) // should return [3, 9, 2].

// function dropElements(arr, func) {
//     let index = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
            
//             index = i;
//             break
            
//         }
//     }

//     return index === null ? [] : arr.slice(index);
// }

// function dropElements(arr, func) {
//     let index;
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
            
//             index = i;
//             break
            
//         }
//     }

//     return index === null ? [] : arr.slice(index);
// }