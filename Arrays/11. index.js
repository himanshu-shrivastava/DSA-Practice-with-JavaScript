/*  How do you create an empty array in JavaScript? */

const arr = [1, 2, 3, 4, "Hello", { name: "Himanshu" }, [1, 2, 3], 4]
// const arr2 = new Array();
console.log(arr)

/*  How do you access the first and last elements of an array? */
const firstElement = arr[0] // O(1)
const arrLength = arr.length
const lastElement = arr[arrLength - 1]
console.log(firstElement, arrLength, lastElement)

/*  How do you remove the last element from an array? */
const lastElement1 = arr.pop() // O(1)
console.log(arr, lastElement1)

/*  How do you add an element to the end of an array? */
arr.push(5) // O(1)
console.log(arr)

/*  How do you add an element to the start of an array? */
arr.unshift(0) // O(N)
console.log(arr)

/*  How do you remove the first element from an array? */
arr.shift() // O(N)
console.log(arr)

/*  How do you loop through an array in JavaScript? */
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
arr.forEach((x, i) => {
    console.log(x)
})
for (let x of arr) {
    console.log(x)
}

/*  Question 1: How do you check if an element exists in an array? */
const findElement = (arr, target) => {
    for (let x of arr) {
        if (x === target) {
            return true
        }
    }
    return false
}
console.log(findElement(arr, "Hello"))
console.log(findElement(arr, "H"))
console.log(arr.includes("Hello"))

/*  Question 2: How do you find the index of an element in an array? */
const findElementIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
console.log(findElementIndex(arr, "Hello"))
console.log(arr.indexOf("Hello"))

/*  How to delete, add & update elements from a specific index? */
console.log(arr)
arr.splice(1, 3)
console.log(arr)
arr.splice(1, 0, 2, 3, 4, 5, 6)
console.log(arr)
arr.splice(1, 3, 6, 7, 8)
console.log(arr)

/*  `splice()` vs `slice()` */
const subArr = arr.slice(1, 4) // [start, end)
console.log(subArr)

/*  Shallow Copy of Array */
const arrB = arr
arrB.splice(1, 4)
console.log(arrB, arr)

/*  Deep Copy of Array */
const arrC = [...arr]
const arrD = Array.from(arr)
const arrE = arr.concat()
arrC.splice(1, 4)
arrD.splice(1, 4)
arrE.splice(1, 3)
console.log(arrC, arrD, arrE, arr)

/*  How to concatenate two arrays in JavaScript? */
const newArr = [...arr, ...arrE]
const newArr2 = arr.concat(arrE)
console.log(newArr, newArr2)

/*  Question 3: How can you check if two arrays are equal? */
const isArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true

    // One Line solution
    // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
}
console.log(isArrayEqual([1, 2, 3], [1, 2, 3]))

/*  Question 4: How to sort an array in ascending and descending order? */
const x = [1, 4, 6, 0, -9, -5]
x.sort() // O(NlogN)
console.log(x)

x.sort((a, b) => b - a)
console.log(x)

/*  Question 5: How to reverse an array? */
x.reverse()
console.log(x)

/*  Map, Filter & Reduce */
const newMapArr = x.map((ele, i) => ele * ele)
console.log(newMapArr)

const positiveNumbers = x.filter((ele, i) => ele > 0)
console.log(positiveNumbers)

const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele)
console.log(sumOFArr)

/*  Flat: [1, 2, 4, 5, 6, 7, 8, 9] */
const y = [1, 2, [4, 5, [6, 7]], 8, 9]
const flattedArray = y.flat(2)
console.log(flattedArray)

/*  `filter()` vs `find()` */
const positiveNumber = x.find((ele, i) => ele > 0)
console.log(positiveNumber)
