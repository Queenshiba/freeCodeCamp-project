function pairElement(str) {
    const arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "G") {
            arr.push(["G", "C"])
        } else if (str[i] === "C") {
            arr.push(["C", "G"])
        } else if (str[i] === "A") {
            arr.push(["A", "T"])
        } else if (str[i] === "T") {
            arr.push(["T", "A"])
        }
    }
    return arr
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

// a pair of AT and CG

// if A and + T
// if T and + A
// if C and + G
// if G and + C
