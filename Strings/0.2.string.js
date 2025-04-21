/*  String In JavaScript */

/*  Length of a String */
let firstName = "Vaishali"
console.log(firstName.length)

/* Access String Element */
console.log(firstName.charAt(2)) // i
console.log(firstName[2]) // i
console.log(firstName.charCodeAt(2)) // 115 (Ascii Code)

/* Check Presence of Character */
console.log(firstName.includes("r")) // false (& if present it return true)
console.log(firstName.indexOf("i")) // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")) // 7 

/* Compare Two Strings */
let anotherName = "Himanshu"
console.log(firstName.localeCompare(anotherName)) // -1 (& if strings are equal it return 0)

/* Replace Substring */
const str1 = "Himanshu is Best Frontend Developer. Himanshu is Best Developer. "
console.log(str1.replace("Himanshu", "Sujit")) // "Sujit is Best Frontend Developer. Himanshu is Best Developer. "
console.log(str1.replaceAll("Himanshu", "Sujit")) // "Sujit is Best Frontend Developer. Sujit is Best Developer. "

/*  Substring of a String */
console.log(str1.substring(6, 30))
console.log(str1.slice(-10, -1))

/*  Split and Join */
console.log(str1.split(""))
const subString = str1.split(" ")
console.log(subString.join(" "))

/* String Start and End */
console.log(str1.startsWith("Himanshu")) // true
console.log(str1.endsWith("Developer")) // true

/*  Trim and Case Conversion */
const trimStr = str1.trim()
const trimStrStart = str1.trimStart()
const trimStrEnd = str1.trimEnd()
console.log(trimStr, trimStr.length)
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

/*  Convert Number and Object to String */
const num = 123
console.log(num, num.toString())

const obj = {
    name: "Himanshu",
    course: "DSA with Himanshu"
}
console.log(obj, JSON.stringify(obj))

/*  Concatenate Strings */
const lastName = "Rajput"
console.log(firstName + lastName)
console.log(`${firstName} ${lastName} is a Best Developer`)
console.log(firstName.concat(lastName, " is a", " Best"))