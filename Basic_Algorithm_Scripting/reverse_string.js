function reverseString(str) {
    // Make str into an array
    const array = str.split('');
    // Reverse the array
    const reversedArray = array.reverse();
    // Return string to an array
    const stringfromArray = reversedArray.join('');
    return stringfromArray;
  }
  
 console.log(reverseString("hello"));