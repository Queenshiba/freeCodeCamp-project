function smallestCommons(arr) {
    // check which of two inputs is bigger or not
    // because need to set a range from the small num to the big
    const min = arr[0] > arr[1] ? arr[1] : arr[0]
    const max = arr[0] > arr[1] ? arr[0] : arr[1]

    console.log(min, max)
let num = max

    // let array = []
    // let sum = min
    // for (let i = min; i <= max; i++) {
    //     array.push(i)
    // }
    // console.log(array)

    // for (let k = 0; k < array.length; k++) {
    //     let sumArr = array.reduce( (a,b) => a * b, 1 )
       
    //     let divide = sumArr / array[k]
    //     console.log(divide)
    // } 
 
for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (num % i) {
        num += max;
      i = max;
    }
  }
  return num;
}






// console.log(range)




// smallestCommons([1, 5]);
// console.log(smallestCommons([1, 5])) // should return 60.
console.log(smallestCommons([5, 1]))  // should return 60.
console.log(smallestCommons([2, 10]))  // should return 2520.
console.log(smallestCommons([1, 13]))  // should return 360360.
console.log(smallestCommons([23, 18]))  // should return 6056820.  