function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    const answer = arr.map(({ name, avgAlt }) => {
        let insideRoot = Math.pow(earthRadius + avgAlt, 3) / GM;
        let removedRoot = Math.sqrt(insideRoot)
        let sum = 2 * Math.PI * removedRoot;
        let rounded = Math.round(sum)
        console.log(rounded)
    })


    // for (let i = 0; i < arr.length; i++) {
    //     let aveAlt = Object.values(arr[i])[1]
    //     // add earthRadius and aveAlt
    //     let sumOfEarthradiusAndAvealt = earthRadius + aveAlt
    //     // console.log(rounded)
    //     let cubedSum = Math.pow(sumOfEarthradiusAndAvealt, 3)
    //     // cubedSum devides GM
    //     let devidedByGM = cubedSum / GM
    //     let roundDevidedByGM = Math.round(devidedByGM)
    //     let removedRoot = Math.sqrt(roundDevidedByGM)
    //     let leftpart = 2 * Math.PI
    //     let sum = leftpart * removedRoot
    //     let integerSum = Math.ceil(sum)
    //     return integerSum
    // }
    
}


console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
// should return [{ name: "sputnik", orbitalPeriod: 86400 }].
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]))
// should return [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }]