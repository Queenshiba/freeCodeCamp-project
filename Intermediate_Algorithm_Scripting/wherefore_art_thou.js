function whatIsInAName(collection, source) {
// name keys in source as keySource
    let keySource = Object.keys(source)
// return collection with filtering below
    return collection.filter((obj) => {
        // itorate till the length of keySource
        for (let i = 0; i < keySource.length; i++) {
            // if keys in source does NOT have object or keys in source of object is NOT same as keys in source, return false
            if (!obj.hasOwnProperty(keySource[i]) || obj[keySource[i]] !== source[keySource[i]]) {
                return false
            }

        }
        return true
    });
}



//  { key: "value"}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
// should return [{ first: "Tybalt", last: "Capulet" }].
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) 
//should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })) 
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }))
//should return []