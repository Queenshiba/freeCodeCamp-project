function sumPrimes(num) {
    function isPrime(num) {
        if (num === 1) {
            return false
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    let primeNums = []
    for (let j = 0; j < arr.length; j++) {
        if (isPrime(arr[j])) {
            primeNums.push(arr[j])
        }

    }
    let sum = primeNums.reduce((a, b) => a + b, 0)
return sum

}


// console.log(isPrime(10));
// console.log(isPrime(13));
console.log(sumPrimes(10));
console.log(sumPrimes(13));
// should return 17.
// sumPrimes(977)
// should return 73156.