function repeatStringNumTimes(str, num) {
    // if num is 0 or less than 0, return ""
    if (num <= 0) {
        return ""
    }
    // if num is strictly equal to 1, return str
    if (num === 1) {
        return str;
    // if not 1, return str and add repeat the str a number of num -1 
    // already return str first so minus 1 from num    
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}

console.log(repeatStringNumTimes("abc", 3));