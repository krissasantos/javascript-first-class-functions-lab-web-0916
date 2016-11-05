function countdown(callback) {

  window.setTimeout(function () {  callback() }, 2000)
  // use window.setTimeout() for two second response callback
  // Use anonymous functions instead when calling the function inside the timeout block
  //http://javascript.info/tutorial/settimeout-setinterval
} 


function multiplierValue(given) {
//   returns a function that multiplies a given value by the multiplierValue
    return function createMultiplier(num) {
        return given * num
  }
}

function createMultiplier(num2) { 
  return function multiplier(num1) {
    return num1 * num2
  }
}

doubler = createMultiplier(2)
tripler = createMultiplier(3)


function multiplier(num1, num2) {

  return num1 * num2
}

doublerWithBind = multiplier.bind(2, null)
triplerWithBind = multiplier.bind(3, null)

// function createMultiplier(2) { 
//   return function multiply(num1) {
//     return num1 * 2
//   }
// }
