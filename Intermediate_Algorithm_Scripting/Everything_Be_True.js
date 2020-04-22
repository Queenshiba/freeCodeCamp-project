function truthCheck(collection, pre) {
    // set an empty array
    let checkedPre = []
    // itorating the length of collection
    for (let i = 0; i < collection.length; i++) {
        // if the collection does NOT have pre, push the object to the set array'checkedPre'
        if (!collection[i][pre]) {
            checkedPre.push(collection[i])
        }
    }
    // and check the items in the array
    // if the item in the array is 0 (none), which means there is no UNMATCHED item that missing any keys or values from the object of pre
    // then return ture
    if (checkedPre.length === 0) {
        return true
    } else {
        return false
    }


}


console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"))
// should return true.
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"))
// // should return false.
// console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"))  
// // should return false.
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastForward", "onBoat": null }], "onBoat"))
// // should return false
// console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastForward", "onBoat": true }], "onBoat"))  
// // should return true
// console.log(truthCheck([{ "single": "yes" }], "single"))  // should return true
// console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single"))  // should return false
// console.log(truthCheck([{ "single": "double" }, { "single": undefined }], "single"))  // should return false
// console.log(truthCheck([{ "single": "double" }, { "single": NaN }], "single"))  // should return false