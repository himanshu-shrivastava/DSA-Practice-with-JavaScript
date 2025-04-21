/**
 * @param {string} text
 */
function wordCounter(text) {
  const lowerText = text.toLowerCase()
  const wordMap = {}
  const words = lowerText.split(/\s+/)

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++
    } else {
      wordMap[word] = 1
    }
  }

  return wordMap
}

const text = "Hello my name name name is Himanshu"
// { hello: 1, my: 1, name: 3, is: 1, Himanshu: 1 }
const wordCounts = wordCounter(text)

console.log(wordCounts)
