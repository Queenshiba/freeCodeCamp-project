function sumAll(start, end) {
    // declear that the sum of start and end in parametor as reducer
    const reducer = (start, end) => start + end;

    // if the number of start is greater than end,
    // example : start = 5, end = 1
    if (start > end) {

        // declear that "new Array" calc (start - end +1) as arr1
        // example : arr1 = 5 - 1 +1 => 5 
        var arr1 = new Array(start - end + 1)

        // while i is the length of arr1, increment i by 1 and decrement start by 1
        // while i is less than 5, keep adding 1 until i becomes 5 and substracing 1 from start, which is "5" 
        for (var i = 0; i < arr1.length; i++ , start--) {

            //push i into arr1[] ?????
            arr1[i] = start
        }
        //return arr1 with calclating with 
        return arr1.reduce(reducer)
    } else {
        var arr2 = new Array(end - start + 1)
        for (var j = 0; j < arr2.length; j++ , start++) {
            arr2[j] = start
        }
        return arr2.reduce(reducer)
    }

}
console.log(sumAll(5, 1))
console.log(sumAll(1, 5))
console.log(sumAll([1, 4])) //should return 10.
console.log(sumAll([4, 1])) //should return 10.
console.log(sumAll([5, 10])) //should return 45.
console.log(sumAll([10, 5])) //should return 45.
