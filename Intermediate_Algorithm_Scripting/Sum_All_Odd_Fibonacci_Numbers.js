function sumFibs(num) {
    // create empty arrays
    const fibArr = []
    const odd = []
    // set the first, second items in fibArr 0 and 1, because Fibonacci sequence is created by the equation, which is Fn = F{n-1} + F{n-2}  
    fibArr[0] = 0
    fibArr[1] = 1;

    // the loop is making Fibonacci sequence
    // because of setting fibArr[0] and fibArr[1], have to add 2 to the length of num  
    for (let i = 2; i <= num + 2; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
        fibArr.push(fibArr[i])
    }
    // the loop itorates 
    for (let j = 0; j < fibArr.length + 2; j++) {
        // if the numbers in fibArr can be devided 2 and there is no remainder
        // and if the numbers in fibArr is smaller than num 
        // push the numbers to odd
            if (fibArr[j] % 2 === 1 && fibArr[j] <= num) {
                odd.push(fibArr[j])
                // if  the numbers in fibArr is 1 return 1
            } else if(fibArr[j] === 1 ) {
                return 1
            }
    }
// set a + b to sum up all numbers in odd array
    const reducer = (a, b) => a + b;
    const sum = odd.reduce(reducer)
    return sum
}

console.log(sumFibs(4));

console.log(sumFibs(1)) //should return a number.
console.log(sumFibs(10))//should return 10 (1,1,3,5 += 10)
console.log(sumFibs(1000)) //should return 1785.
console.log(sumFibs(4000000)) //should return 4613732.
console.log(sumFibs(4)) //should return 5.
console.log(sumFibs(75024)) //should return 60696.
console.log(sumFibs(75025)) //should return 135721.