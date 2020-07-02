function smallestCommons(arr) {
    // Check which of two inputs is bigger or not
    // Sorted min and max order
    const min = arr[0] > arr[1] ? arr[1] : arr[0]
    const max = arr[0] > arr[1] ? arr[0] : arr[1]

    // Created an array that put the range from min to max
    let rangeArr = []
    for (let i = min; i <= max; i++) {
        rangeArr.push(i)
    }

    // Created loop that stops when answer(scm) is assigned to answer variable
    let answer = null;
    for (let j = 1; answer === null; j++) {
        let maxMultiple = max * j

        // Checked each num in rangeArr with a multiple of max until all mutiples numbers had no remainder
        for (let l = 0; l < rangeArr.length; l++) {
            if ( maxMultiple % rangeArr[l]) {
                break
            }
            if (rangeArr[l] === rangeArr[rangeArr.length - 1]) {
                answer = maxMultiple;
            }
        }

    }
    return answer
    

}

// smallestCommons([1, 5]);
console.log(smallestCommons([1, 5])) // should return 60.
// console.log(smallestCommons([5, 1]))  // should return 60.
// console.log(smallestCommons([2, 10]))  // should return 2520.
// console.log(smallestCommons([1, 13]))  // should return 360360.
// console.log(smallestCommons([23, 18]))  // should return 6056820.  