function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for (let i = 0; i < collection.length; i++) {
        var collectionKey = Object.keys(collection[i])
        var collectionValue = Object.values(collection[i])
        var sourceValue = Object.values(source)
        var sourceKey = Object.keys(source)
        // console.log(sourceValue[1])
        if ((collectionKey = sourceKey[i]) || (collectionValue === sourceValue[i])) {
            arr.push(collection[i])
        }

        return arr
        
    }
    // console.log(sourceKey)
    // Only change code above this line
}


// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
//should return [{ first: "Tybalt", last: "Capulet" }].
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
// // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
// // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) 
// //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })) 
// //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }))
//should return []