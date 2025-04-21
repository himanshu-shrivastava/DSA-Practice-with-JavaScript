// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

/**
 * @param {string} str
 */
function isPalindrome(str) {
  console.log(str)
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase()
  const len = str.length


  if (len <= 1) return 'Palindrome'
  if (str[0] !== str[len - 1]) return 'Not a Palindrome'
  return isPalindrome(str.slice(1, -1))
}

console.time('isPalindrome')
console.log(isPalindrome("abbAa"))
console.timeEnd('isPalindrome')
