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
    for (let i = 1; i < num; i++) {
        arr.push(i)
    }
    return arr


}


console.log(isPrime(10));
console.log(isPrime(13));
// console.log(sumPrimes(10));
// should return 17.
// sumPrimes(977)
// should return 73156.