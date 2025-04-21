function partition(arr, lb = 0, ub = arr.length - 1) {
    let pivotValue = arr[lb]
    let leftIndex = lb
    let rightIndex = ub

    while (leftIndex < rightIndex) {
        while (arr[leftIndex] < pivotValue) {
            leftIndex++
        }
        while (arr[rightIndex] > pivotValue) {
            rightIndex--
        }

        if (leftIndex < rightIndex) {
            [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]
        }
    }
    [pivotValue, arr[rightIndex]] = [arr[rightIndex], pivotValue]

    return rightIndex
}

function myQuickSort(unsortedArray, start = 0, end = unsortedArray.length - 1) {
    if (unsortedArray.length <= 1) return unsortedArray

    if (start < end) {
        const pivotIndex = partition(unsortedArray, start, end)
        myQuickSort(unsortedArray, start, pivotIndex - 1)
        myQuickSort(unsortedArray, pivotIndex + 1, end)
    }

    return unsortedArray
}

console.log(myQuickSort([5, 2, 9, 3, 6, 1, 8, 7]))