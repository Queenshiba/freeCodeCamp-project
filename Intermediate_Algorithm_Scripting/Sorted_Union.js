function uniteUnique(arr) {
    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // should return [1, 2, 3, 5, 4, 6, 7, 8].