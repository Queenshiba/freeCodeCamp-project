function addTogether(num) {
// let numArr = []
// for (let i = 0; i < num.length; i++) {
    
//   if (typeof num[i] !== 'number'){
//     numArr.push(num[i])
//     console.log(numArr)
// } 

// }
// return numArr
console.log(arguments[0])
console.log(arguments[1])
    }
  
console.log(addTogether(2, 3)) // should return 5.
console.log(addTogether(2)(3)) // should return 5.
// console.log(addTogether("http://bit.ly/IqT6zt")) // should return undefined.
// console.log(addTogether(2, "3")) // should return undefined.
// console.log(addTogether(2)([3])) // should return undefined.