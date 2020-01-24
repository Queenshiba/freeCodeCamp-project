function diffArray(arr1, arr2) {
    // var newArr = [];
    // // keep itorating the length of arr1
    // for (var i = 0; i < arr1.length; i++) {
    //     // if arr2 doesn't have(-1) the same item in arr1
    //     if (arr2.indexOf(arr1[i]) === -1) {
    //         // push the diff item to newArr
    //         newArr.push(arr1[i]);
    //     }
    // }
    // // keep itorating the length of arr2
    // for (var j = 0; j < arr2.length; j++) {
    //     // if arr1 doesn't have(-1) the same item in arr2
    //     if (arr1.indexOf(arr2[j]) === -1) {
    //         // push the diff item to newArr
    //         newArr.push(arr2[j]);
    //     }
    // }
    // //
    // return newArr;
    let arrays;
    arr1.length >= arr2.length ? arrays = [arr1,arr2] :  arrays = [arr2,arr1];
    return arrays[0].filter(item => {
        return !arrays[1].includes(item);
    })  
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//should return [4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
// should return ["pink wool"]
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//should return [4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//should return ["pink wool"].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))
//should return ["piglet", 4]
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])) //should return [].