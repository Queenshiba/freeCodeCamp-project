  // Check if it's possible to make the amount of the change from the register
  // if the amount is smaller or not exact the change, return "INSUFFICIENT_FUNDS"
  // if you can return the change, return it with sorted high to low
  function checkCashRegister(price, cash, cid) {
    let list = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00,
    }


    // Get the total of cid
    let totalCid = 0
    for (let values of cid) {
      totalCid += values[1]
    }
    totalCid = totalCid.toFixed(2)

    // Change to retun  
    let changeToReturn = cash - price
    console.log("changeToReturn", changeToReturn)


    // Compare the total of cid and the change to return
    // if the total of cid is LESS THAN the change to return
    const detailOfChange = []
    if (totalCid < changeToReturn) {
      return { status: "INSUFFICIENT_FUNDS", change: detailOfChange }
      // if the change is exact same
    } else if (totalCid === changeToReturn.toFixed(2)) {
      return { status: "CLOSED", change: cid }
    } else {
      for (let elem of cid) {
        let temp = [elem[0], 0];
        let tempToFixed ;
        while (changeToReturn >= list[elem[0]] && elem[1] > 0) {
          temp[1] += list[elem[0]]
          elem[1] -= list[elem[0]]
          changeToReturn -= list[elem[0]];
          changeToReturn = changeToReturn.toFixed(2);

        }

        if (temp[1] > 0) {
          tempToFixed = temp[1].toFixed(2)
          detailOfChange.push(tempToFixed)

        }
console.log("temp", tempToFixed)
      }
      
    }

    if (changeToReturn > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
    }

    return { status: "OPEN", change: detailOfChange }
  }


  // Prepere for showing the results
  // let NewResult = {}
  // if (adjustedSum === numAdjustedChange) {
  //   NewResult.status = 'ClOSED'
  //   NewResult.change = cid
  // } else if (adjustedSum < numAdjustedChange) {
  //   NewResult.status = 'INSUFFICIENT_FUNDS'
  //   NewResult.change = []
  // } else if (adjustedSum > numAdjustedChange) {
  //   NewResult.status = 'OPEN'
  //   NewResult.change = changeFromCid
  // }

  // console.log("NewResult", NewResult)







// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 
// // should return an object.
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
//  should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.