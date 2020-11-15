function checkCashRegister(price, cash, cid) {
  // Check how much the change is
  // Check how much is in the register

  // Check if it's possible to make the amount of the change from the register
  // if the amount is smaller or not exact the change, return "INSUFFICIENT_FUNDS"
  // if you can return the change, return it with sorted high to low

  let change = cash - price
  let adjustedChange = change.toFixed(2)
  let numAdjustedChange = parseFloat(adjustedChange)
  console.log(numAdjustedChange)
  console.log(typeof numAdjustedChange)
  // keep numbers of cid values in order to sum them up later
  let cidValues = []
  cid.forEach(item => {
    cidValues.push(item[1])
  })
  // Sum up the numbers in Cid 
  for (i = 0; i < cidValues.length; i++) {
    let sumOfCidValues = cidValues.reduce((a, b) => a + b)
    adjustedSum = sumOfCidValues.toFixed(2)

  }
  console.log("how much left in Cid", adjustedSum)

  // the change and which coin 
  let listOfCoin = {
    "ONE HUNDRED": 100.00,
    "TWENTY": 20.00,
    "TEN": 10.00,
    "FIVE": 5.00,
    "ONE": 1.00,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01,
  }

// Add some function for calculate for change

let change = 113.50
let values = Object.values(listOfCoin)
let arr =[]
for (let i =0; i < values.length; i++){
  gap = change - values[i]
 
  if (gap >  values[i]){
    let loopgap = gap - values[i]
  } if (gap = 0) {
    break
  }
  // console.log(gap)
  // if (change > values[i]){
  //   arr.push(change - values[i])
  // }
}
console.log(gap)
  console.log(arr)





  // compare change to coins BUT NEED TO CALCULATE THE DITAIL OF CHANGE!!!!
  let changeFromCid = {};
  let objKeys = Object.keys(listOfCoin)
  let objValues = Object.values(listOfCoin)
  for (let i = 0; i < objKeys.length; i++) {
    if (objValues[i] === numAdjustedChange) {

      let theObjKey = objKeys[i]
      let theObjValue = objValues[i]
      changeFromCid[theObjKey] = theObjValue
    }
  }
  console.log('changeFromCid', changeFromCid)

  // Prepere for showing the results
  let NewResult = {}
  if (adjustedSum === numAdjustedChange) {
    NewResult.status = 'ClOSED'
    NewResult.change = cid
  } else if (adjustedSum < numAdjustedChange) {
    NewResult.status = 'INSUFFICIENT_FUNDS'
    NewResult.change = []
  } else if (adjustedSum > numAdjustedChange) {
    NewResult.status = 'OPEN'
    NewResult.change = changeFromCid
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
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.