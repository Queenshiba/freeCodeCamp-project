function repeatStringNumTimes(str, num) {
  // repeat after me
  if ( num <= 0) {
    return ""
  } 
  if ( num === 1){
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }

  
}

console.log(repeatStringNumTimes("abc", 3));