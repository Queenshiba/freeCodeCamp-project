function checkCashRegister(price, cash, cid) {
  // Check how much the change is
  // Check how much is in the register

  // Check if it's possible to make the amount of the change from the register
  // if the amount is smaller or not exact the change, return "INSUFFICIENT_FUNDS"
  // if you can return the change, return it with sorted high to low

  let change = cash - price
  let adjustedChange = change.toFixed(2)
  console.log(adjustedChange)
console.log('change is', adjustedChange)
  // keep numbers of cid values in order to sum them up later
  let cidValues = []
  cid.forEach(item => {
    cidValues.push(item[1])
  })
// Sum up the numbers in Cid 
  for (i = 0; i < cidValues.length; i++) {
    let sumOfCidValues = cidValues.reduce((a, b) => a + b)
    adjustedSum= sumOfCidValues.toFixed(2)
  
  }
  console.log("how much left in Cid", adjustedSum)

  // the change and which coin 
  let listOfCoin = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }


  for (let k in listOfCoin) {
    if (!listOfCoin.hasOwnProperty(k)) continue;
    if (listOfCoin[k] === adjustedSum) {
      /* yaay! an orange! */
    }
  }


  // Prepere for showing the results
  let NewResult = {}
if (adjustedSum === adjustedChange) {
  NewResult.status = 'ClOSED'
  NewResult.change = cid
} else if (adjustedSum < adjustedChange){
  NewResult.status = 'INSUFFICIENT_FUNDS'
  NewResult.change = []
} else if (adjustedSum > adjustedChange){
  NewResult.status = 'OPEN'
  NewResult.change = 'change'
}
  
console.log(NewResult)



    // {status: "INSUFFICIENT_FUNDS", change: []}
    // {status: "CLOSED", change: [...]}
    // {status: "OPEN", change: [...]}
    // console.log()

    // console.log(Math.round(sums))

  }




// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 
// // should return an object.
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 
//  should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) ) 
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.