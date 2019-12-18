function findLongestWordLength(str) {

    var splitarray = str.split(" ");
    var longestWord = splitarray[0];

    for (var i = 0; i < splitarray.length; i++) {
        if (splitarray[i].length > longestWord.length) {

            longestWord = splitarray[i];
        }
    }
    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
