/**
 * @param {Array} unsortedArray
 */
function myQuickSort(unsortedArray) {

    if (unsortedArray.length <= 1) return unsortedArray

    const pivotValue = unsortedArray[Math.floor(Math.random() * unsortedArray.length)]
    const left = []
    const right = []

    for (let i = 0; i < unsortedArray.length; i++) {

        if (unsortedArray[i] === pivotValue) {
            continue
        }
        if (unsortedArray[i] < pivotValue) {
            left.push(unsortedArray[i])
        } else {
            right.push(unsortedArray[i])
        }
    }

    return [...myQuickSort(left), pivotValue, ...myQuickSort(right)]
}

const result2 = myQuickSort([14, 2, 16, 33, 23, 15, 11, 32])
console.log(result2)