function titleCase(str) {
    // declare that making str to all lowercase as lowercase
    var lowercase = str.toLowerCase();
    // declare that making lowercase splited by space as strSplit
    var strSplit = lowercase.split(' ')
    // while i becomes the length of strSprit, keep itorating
    for (var i = 0; i < strSplit.length; i++) {
        // make the first letter of the string UpperCase and add the rest of the string together to strSplit
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1)
    }
    // the itorated strings are combined with spaces and become a sentence
    return strSplit.join(' ');
}

console.log(titleCase("I'm a little tea pot"));