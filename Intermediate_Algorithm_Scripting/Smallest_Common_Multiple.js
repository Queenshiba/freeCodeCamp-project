function smallestCommons(arr) {
    // check which of two inputs is bigger or not
    // because need to set a range from the small num to the big
    if (arr[0] < arr[1]) {
        start = arr[0]
        end = arr[1]
    } else {
        start = arr[1]
        end = arr[0]
    }
    // set an empty arr to put numbers in the range 
    let range = []
    for (let i = start; i <= end; i++) {
        range.push(i)
    }

    // console.log(range)
    // set another arr 
    let multi = []
    for (let j = 0; j < range.length; j++) {

        multi.push([range[j]])
    }
    for (let z = 0; z < multi.length ; z++)  {
        multi[z].push(multi[z]*multi[z])
    }
    return multi;
}


smallestCommons([1, 5]);
// console.log(smallestCommons([1, 5])) // should return 60.
console.log(smallestCommons([5, 1]))  // should return 60.
    // console.log(smallestCommons([2, 10]))  // should return 2520.
    // console.log(smallestCommons([1, 13]))  // should return 360360.
    // console.log(smallestCommons([23, 18]))  // should return 6056820.  