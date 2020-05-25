function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
// return arr that went through the map method
    return arr.map(({ name, avgAlt }) => {
        // solve inside root, cubed the sum of earthRadius and avgAlt and then divide it by GM
        let insideRoot = Math.pow(earthRadius + avgAlt, 3) / GM;
        // to remove root, use Math.sqrt, basiclly find square root of insideRoot
        let removedRoot = Math.sqrt(insideRoot)
        // 2 multipy the ratio of the circumference of a circle to its diameter and removedRoot
        let sum = 2 * Math.PI * removedRoot;
        // change sum to the value of a number rounded to the nearest integer
        let orbitalPeriod = Math.round(sum)
        // return objects replace avgAlt to orbitalPeriod
        return { name, orbitalPeriod}
    })

}


console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
// should return [{ name: "sputnik", orbitalPeriod: 86400 }].
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]))
// should return [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }]