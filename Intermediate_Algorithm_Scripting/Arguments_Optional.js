function addTogether(...num) {
let numArr = []
for (let i = 0; i < num.length; i++) {
    let numStr = num.toString()
  if (typeof numStr[i] === 'number'){
    numArr.push(numStr[i])
    // console.log(numArr)
} 

}
return numArr
    }
  
console.log(addTogether(2, 3)) // should return 5.
console.log(addTogether(2)(3)) // should return 5.
// console.log(addTogether("http://bit.ly/IqT6zt")) // should return undefined.
// console.log(addTogether(2, "3")) // should return undefined.
// console.log(addTogether(2)([3])) // should return undefined.