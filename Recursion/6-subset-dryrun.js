// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

/**
 * @param {Array} numsArray
 */
function subsets(numsArray) {

    const result = []
    const temp = []

    /**
     * @param {Array} numsArray
     * @param {number} index
     */
    function recursionSubset(numsArray, index, calledBy = '') {

        console.log('---------------------------')
        console.log('calledBy -->', calledBy)

        if (index === numsArray.length) {
            console.log('Temp --> Result -->', temp)
            result.push([...temp])
            console.log('Result -->', result)
            return
        }

        temp.push(numsArray[index])
        console.log('temp.push -->', temp)
        recursionSubset(numsArray, index + 1, `F-${index + 1}`)

        temp.pop()
        console.log('temp.pop -->', temp)
        recursionSubset(numsArray, index + 1, `S-${index + 1}`)
    }

    recursionSubset(numsArray, 0, 'M-0')
    console.log('-----Final------')
    return result
}

console.log(subsets([1, 2, 3]))

/*
Dry Run
numsArray = [1, 2] - Length = 2
Call - M-0 ( F-1 (F-2, S-2), S-1 (F-2, S-2) )
index - 0, 1, 2, 2, 1, 2, 2

Dry Run
numsArray = [1, 2, 3] - Length = 3
Call - M-0 (F-1 (F-2 (F-3, S-3), S-2 (F-3, S-3)), S-1 (F-2 (F-3, S-3), S-2 (F-3, S-3)))
index - 0, 1, 2, 3, 3, 2, 3, 3, 1, 2, 3, 3, 2, 3, 3
M= main recurstion call
F- First recursion call inside recursion function 
S- Second recursion call inside recursion function 
result
*/