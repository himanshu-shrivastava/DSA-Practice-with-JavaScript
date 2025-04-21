// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output: [1,2,3,4,5]

/**
 * @param {number} startNum
 * @param {number} endNum
 */
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return []
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum)
    return numbers
  }
}

// rangeOfNumbers(1,5) => [1,2,3,4,5]
// rangeOfNumbers(1,4) => [1,2,3,4]
// rangeOfNumbers(1,3) => [1,2,3]
// rangeOfNumbers(1,2) => [1,2]
// rangeOfNumbers(1,1) => [1]
// rangeOfNumbers(1,0) => []
console.time('rangeOfNumbers')
console.log(rangeOfNumbers(1, 5))
console.timeEnd('rangeOfNumbers')
