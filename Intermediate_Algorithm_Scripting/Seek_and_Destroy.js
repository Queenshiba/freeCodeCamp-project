function destroyer(arr) {
    // var newarr = []
    var arg = [...arguments]
    // var spliceArg = arg.splice(0,1);

    var result = arr.filter(function (value) {
        return arg.indexOf(value) === -1;
    }
    )
    return result
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// //should return [1, 1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
// should return ["hamburger"]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
  // should return [12,92,65].