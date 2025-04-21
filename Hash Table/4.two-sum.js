function twoSum(nums, target) {
  const numMap = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    console.log('Loop -->', i)
    console.log('complement-->', complement, '(', target, nums[i], ')')
    console.log('numMap[complement]-->', numMap[complement])
    if (complement in numMap && numMap[complement] !== i) {
      console.log('Push in hasMap inside -->', numMap[complement], i)
      return [numMap[complement], i, `(${nums[numMap[complement]]}, ${nums[i]})`]
    }
    numMap[nums[i]] = i
    console.log('Push in hasMap -->', numMap)
  }

  return []
}

const nums = [2, 7, 9, 12, 15, 16, 18]
const target = 18
const result = twoSum(nums, target)
console.log(result) // [0, 1]
