function addTogether(a, b) {
// check the first item is number or not
//  if it's not number, return undefined
    if (typeof a !== 'number') {
        return undefined
    }
// declear a functio as sum with an input 'b'
// if check b is number then true return sum of a + b, false return undefined
    const sum = b => typeof b === 'number' ? a + b : undefined;
    
    
    // and if b is undefined, and then when it's true, go through the 'sum' function.
    // when if it's falsem, use the fanction again
    // need to do this because of types of input'(2)(3)' and '(2)([3])'
    // these 3 is not input 'b'
    return typeof b === 'undefined' ? b => sum(b) : sum(b);


}

console.log(addTogether(2, 3)) // should return 5.
console.log(addTogether(2)(3)) // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")) // should return undefined.
console.log(addTogether(2, "3")) // should return undefined.
console.log(addTogether(2)([3])) // should return undefined.