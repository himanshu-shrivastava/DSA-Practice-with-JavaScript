function goToLunch(person) {
  if (person === 5) return true
  console.log(person)
  return goToLunch(person + 1)
}
// console.log("outcome:", goToLunch(1));

// Loops vs Recursion

function multiplyUsingLoop(arr) {
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return product
}
console.time('multiplyUsingLoop')
console.log(multiplyUsingLoop([1, 2, 3, 4]))
console.timeEnd('multiplyUsingLoop')


function multiplyUsingRecursion(arr) {
  if (arr.length <= 0) {
    return 1
  } else return arr[arr.length - 1] * multiplyUsingRecursion(arr.slice(0, arr.length - 1))
}
console.time('multiplyUsingRecursion')
console.log(multiplyUsingRecursion([1, 2, 3, 4]))
console.timeEnd('multiplyUsingRecursion')