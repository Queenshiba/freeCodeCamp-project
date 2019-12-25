function diffArray(arr1, arr2) {
    var firstArr = []; 
    var newArr = [];
for ( var i = 0; i < arr1.length; i++){
    firstArr[arr1[i]] = true;
}
for ( var i = 0; i < arr2.length; i++){
    if (firstArr[arr2[i]]) {
        delete firstArr[arr2[i]];
    } else {
        firstArr[arr2[i]] = true;
    }
}
    for ( var k in firstArr) {
        newArr.push(k)
    }
    // Same, same; but different.
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return [4]

  console.log(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return ["pink wool"].
//["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
//should return ["diorite", "pink wool"].
//["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] 
//should return [].
console.log([1, "calf", 3, "piglet"], [1, "calf", 3, 4] )
//should return ["piglet", 4].
//[], ["snuffleupagus", "cookie monster", "elmo"] //should return ["snuffleupagus", "cookie monster", "elmo"].
//[1, "calf", 3, "piglet"], [7, "filly"] 
//should return [1, "calf", 3, "piglet", 7, "filly"].