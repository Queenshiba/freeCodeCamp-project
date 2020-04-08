function uniteUnique(...arr) {
  let test = []
for (let i = 0; i < arr.length; i++) {
arr[i].forEach(element => {
  if (!test.includes(element))
  test.push(element)
});
  
}


    return test;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // should return [1, 3, 2, 5, 4].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // should return [1, 2, 3, 5, 4, 6, 7, 8].