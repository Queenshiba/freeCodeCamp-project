function findLongestWordLength(str) {
    let splitarray = str.split(' ');
    let longestWord = splitarray[0];

    splitarray.forEach((word, index) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    // for (let i = 0; i < splitarray.length; i++) {


    //     // console.log(splitarray[i])
    //     if (splitarray[i].length > longestWord.length) {
    //         longestWord = splitarray[i];

    //     }
    // }
    // console.log(longestWord.length);


    return longestWord.length;


}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
