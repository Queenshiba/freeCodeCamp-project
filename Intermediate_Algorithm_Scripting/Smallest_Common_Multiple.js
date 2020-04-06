function smallestCommons(arr) {
    if (arr[0] < arr[1]) {
        start = arr[0]
        end = arr[1]
    } else {
        start = arr[1]
        end = arr[0]
    }

    let range = []
    for (let i = start; i <= end; i++) {
        range.push(i)
    }

    let multi = []
    for (let j = 0; j < range.length; j++) {
        multi.push(range[j]*range[j])
    }
    return multi;
}


smallestCommons([1, 5]);
// console.log(smallestCommons([1, 5])) // should return 60.
console.log(smallestCommons([5, 1]))  // should return 60.
    // console.log(smallestCommons([2, 10]))  // should return 2520.
    // console.log(smallestCommons([1, 13]))  // should return 360360.
    // console.log(smallestCommons([23, 18]))  // should return 6056820.  