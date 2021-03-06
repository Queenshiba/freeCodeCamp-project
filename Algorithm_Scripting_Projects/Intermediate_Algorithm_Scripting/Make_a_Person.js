var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast;
    };
    this.getFirstName = function () {
        let split = firstAndLast.split(' ')
        return split[0];
    };
    this.getLastName = function () {
        let split = firstAndLast.split(' ')
        return split[1];
    };
    this.setFirstName = function (name) {
        firstAndLast = name + ' ' + firstAndLast.split(' ')[1]
    };
    this.setLastName = function (name) {
        firstAndLast = firstAndLast.split(' ')[0] + ' ' + name
    };
    this.setFullName = function (name) {
        firstAndLast = name
// decleare
    }
};

var bob = new Person('Bob Ross');
bob.getFullName()


console.log(Object.keys(bob).length) // should return 6.
console.log(bob instanceof Person) // should return true.
console.log(bob.firstName) // should return undefined.
console.log(bob.lastName) // should return undefined.
console.log(bob.getFirstName()) // should return "Bob".
console.log(bob.getLastName()) // should return "Ross".
console.log(bob.getFullName()) // should return "Bob Ross".
console.log(bob.getFullName()) // should return "Haskell Ross" after bob.setFirstName("Haskell").
console.log(bob.getFullName()) // should return "Haskell Curry" after bob.setLastName("Curry").
console.log(bob.getFullName()) // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()) // should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()) // should return "Curry" after bob.setFullName("Haskell Curry").