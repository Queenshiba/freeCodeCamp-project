function smallestCommons(arr) {
    // check which of two inputs is bigger or not
    // because need to set a range from the small num to the big
    const min = arr[0] > arr[1] ? arr[1] : arr[0]
    const max = arr[0] > arr[1] ? arr[0] : arr[1]

    // console.log(min, max)
    // let's declear max as num
    
    let rangeArr = []
    for (let i = min; i <= max; i++) {
        rangeArr.push(i)

    }

let answer = null;
    for (let j = 1; answer === null; j++) {
       console.log(max * j)
      
        if (j === 7) {
            answer = true
       }
    }
    // console.log(rangeArr)

}

// smallestCommons([1, 5]);
console.log(smallestCommons([1, 5])) // should return 60.
// console.log(smallestCommons([5, 1]))  // should return 60.
// console.log(smallestCommons([2, 10]))  // should return 2520.
// console.log(smallestCommons([1, 13]))  // should return 360360.
// console.log(smallestCommons([23, 18]))  // should return 6056820.  