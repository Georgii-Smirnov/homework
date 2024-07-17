function returnName(name) {
  return `Hello ${name}`
}
console.log(returnName('Mr.Winston'))



// =====================================================================================================
const numbers = [1, 2, 3, 55, 20, 10, 99]

function selectNumbers(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] >= 10)
      console.log(array[i])
  }
}
selectNumbers(numbers)

// =====================================================================================================

function calculate(firstNumber, secondNumber, operator) {
  if (operator === 'plus') {
    return firstNumber + secondNumber
  } else if (operator === 'minus') {
    return firstNumber - secondNumber
  } else if (operator === 'multiply') {
    return firstNumber * secondNumber
  } else if (operator === 'divide') {
    if (secondNumber, firstNumber === 0) {
      return `Sorry, we can't count it`
    } else return firstNumber / secondNumber
  }
}
console.log(calculate(0, 5, 'minus'))


// =====================================================================================================