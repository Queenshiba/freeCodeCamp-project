function factorialize(num) {
    var number = 1;
    for (let i = 0; i <= num; i++) {
        // if statement number is NOT 0 and i is NOT 0, number * i //
        if (number !== 0 && i !== 0) {
            number = number * i;
        }
    }
    return number;
}

console.log(factorialize(5))
