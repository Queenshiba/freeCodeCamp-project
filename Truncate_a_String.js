function truncateString(str, num) {
    // if num is same or bigger than the length of str, return str
    if (str.length <= num) {
        return str;
        // if not, keep a sentence from 0 to a number of num and remove the rest of sentence and add "..."
    } else {
        return str.slice(0, num) + "...";
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
