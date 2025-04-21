// Question 1: Sum of all natural numbers from 1 to n
function sumOfNaturalNumber(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum
}
// console.log(sumOfNaturalNumber(5)) // 15
// console.log(sumOfNaturalNumber(10)) // 55
// console.log(sumOfNaturalNumber(8)) // 36


// Question 2: Sum of digits of a number
function sumOfDigits(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}
// console.log(sumOfDigits(1287)) // 18

// Question 3: Count the number of digits of a number
function countDigits(num) {
    num = Math.abs(num)
    let count = 0
    do {
        count++
        num = Math.floor(num / 10)
    } while (num > 0)
    return count
}
// console.log(countDigits(121)) // 3
// console.log(countDigits(-979666677)) //9

// Question 4: Check if a number is palindrome
let isPalindrome = function (x) {
    let copyNum = x, reverseNum = 0

    while (copyNum > 0) {
        const lastDigit = copyNum % 10
        reverseNum = reverseNum * 10 + lastDigit
        copyNum = Math.floor(copyNum / 10)
    }

    return x === reverseNum
}
// console.log(isPalindrome(121)) // true
// console.log(isPalindrome(1234)) // false

// Question 5: Find nth Fibonacci number
let fib = function (n) {
    if (n < 2) {
        return n
    }

    let prev = 0, curr = 1, next
    for (let i = 2; i <= n; i++) {
        next = prev + curr
        prev = curr
        curr = next
    }
    return next
}
// Fibonacci Sequence: 0 1 1 2 3 5 8...
// console.log(fib(5)); // 5
// console.log(fib(10)); // 55

// Question 6: Missing Number in an Array
let missingNumber1 = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return nums.length * (nums.length + 1) / 2 - sum
}

// One Line Solution: 
let missingNumber2 = (nums) => nums.length * (nums.length + 1) / 2 - nums.reduce((acc, num) => num + acc)

// console.log(missingNumber1([3, 0, 1])) // 2
// console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8

// Question 7: Find Floor and Ceil value of given number in Array
let floorCeil = (arr, target) => {
    let start = 0
    let end = arr.length
    let floor = -1
    let ceil = -1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            floor = mid
            ceil = mid
            return [floor, ceil, arr[floor], arr[ceil]]
        }
        else if (arr[mid] > target) {
            ceil = mid
            end = mid - 1
        }
        else {
            floor = mid
            start = mid + 1
        }
    }

    return [floor, ceil, arr[floor], arr[ceil]]
}
console.log(floorCeil([1, 2, 4, 6, 10, 12], 3))
console.log("Hello")