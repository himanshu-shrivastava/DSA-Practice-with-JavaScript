
function groupAnagrams(stringArray) {
  const anagramMap = {}

  for (const str of stringArray) {
    const sortedStr = str.split("").sort().join("")

    if (sortedStr in anagramMap) {
      anagramMap[sortedStr].push(str)
    } else {
      anagramMap[sortedStr] = [str]
    }
  }

  return Object.values(anagramMap)
}

const strArray = ["eat", "tea", "tan", "ate", "nat", "bat"]
const groups = groupAnagrams(strArray)

console.log(groups)
// Output: [["eat", "tea", "ate"], ["bat"], ["nat", "tan"]]
