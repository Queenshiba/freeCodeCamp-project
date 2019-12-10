function findElement(arr, func) {
    let num = 0;
    return arr.find(func)
  }
  console.log(findElement([1, 3, 5, 9, 12], num => num % 2 === 0));