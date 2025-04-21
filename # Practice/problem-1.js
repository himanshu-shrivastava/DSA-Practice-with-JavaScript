/*
### Sort an Array with 0s, 1s, and 2s (Dutch National Flag Problem)

Problem Statement: Given an array consisting of 0s, 1s, and 2s, sort it in a single pass without using any sorting algorithm's library function.​

Approach: Utilize three pointers to partition the array into three sections:​
    One for 0s (low).​
    One for 1s (mid).​
    One for 2s (high).​
Iterate through the array and swap elements to ensure all 0s are moved to the beginning, 1s to the middle, and 2s to the end.
*/

function sortNumbers(nums) {
    let low = 0, mid = 0, high = nums.length - 1

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            mid++
            low++
        } else if (nums[mid] == 1) {
            mid++
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }
    }
    return nums
}

const arr = [1, 2, 0, 2, 1, 0]
console.log(sortNumbers(arr))