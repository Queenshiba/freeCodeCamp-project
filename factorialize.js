function factorialize(num) {
    var number = 1;
    for (let i = 0; i <= num; i++) {
        if (number !== 0 && i !== 0) {
            number = number * i;
        }
    }
    return number;
}

console.log(factorialize(5))
