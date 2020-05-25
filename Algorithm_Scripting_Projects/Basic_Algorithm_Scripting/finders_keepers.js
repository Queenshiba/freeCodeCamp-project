function findElement(arr, func) {
    // declere num is 0
    let num = 0;
    // find the func "num => num % 2 === 0" ,which means in a function that when num from the array is divided 2 and the answer become 0, return the num
    return arr.find(func) 
  }
  console.log(findElement([1, 3, 5, 9, 12], num => num % 2 === 0));