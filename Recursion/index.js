// # Recursion in JavaScript

/*  Factorial of a Number */

function factorial(n) {
    if (n === 0)
        return 1
    return n * factorial(n - 1)
}
console.log(factorial(8))

/*  Sum of Array */
function sumOfArrays(arr, n) {
    if (n === 0) {
        return 0
    }

    return arr[n - 1] + sumOfArrays(arr, n - 1)
}
console.log(sumOfArrays([1, 2, 3, 4, 5], 5))

/*  Fibonacci Nuber */
function fibo(n) {
    if (n < 2) {
        return n
    }
    return fibo(n - 1) + fibo(n - 2)
}
console.log(fibo(5))