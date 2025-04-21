/*  Objects in JavaScript */

/*  Creating an object */
const person = {
    name: "Himanshu",
    age: 21,
    isEducator: true,
    skills: ["C++", "JavaScript", "ReactJS"],
    projects: {
        "Frontend Freaks": "Frontend Development Project",
    },
    code: function () {
        return "start coding"
    },
    walk: () => {
        return "start walking"
    }
}

/*  Accessing properties using Dot Operator */
console.log(person.age) // 21

/*  Accessing properties using[] */
console.log(person["name"]) // Himanshu

/*  Checking if a key exists in the object */
console.log(person.hasOwnProperty("name")) // true
console.log(person.hasOwnProperty("last Name")) // false

/*  Adding, deleting, and updating keys */
person.name = "Vivek" // Updating name key 
person.location = "New Delhi" // Adding location Key
// @ts-ignore
delete person.projects // Deleting projects key
console.log(person)

/*  Shallow Copy */
const person2 = person
person2.isEducator = false

/*  Deep Copy */
const person3 = Object.assign({}, person)
// Nested Objects still do shallow copy here, there for we use lodash cloneDeep method(out of scope for this course)
// @ts-ignore
person3.skills = null

/*  Using freeze and seal methods */
Object.freeze(person) // User can't add or delete or update keys
console.log(person)
console.log(Object.isFrozen(person)) // true

Object.seal(person) // User can't add or delete keys but can update the value
console.log(Object.isSealed(person)) // true

/*  Keys, Values & Entries */
console.log(Object.keys(person)) // ["name" , "age", "isEducator", ...]
console.log(Object.values(person)) // ["Himanshu", 21, true, ...]
console.log(Object.entries(person)) // [["name", "Himanshu"], ["age", 21], ["isEducator", true], ...]

/*  Looping through an Object using for...in */
for (let key in person) {
    console.log(key + ":", person[key]) // name: Himanshu   age: 21, isEducator: true ...
}

/*  Looping through an Object using forEach with Object.keys */
Object.keys(person).forEach((key) => console.log(key))
/*  How to check if two objects are equal ? */

console.log(Object.is(person, person3))

/*  find count of all players */
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
}

const playerCount = (data) => {
    if (data === null) {
        return {}
    }

    let countPlayer = {}
    for (let player of data.name) {
        countPlayer[player] = (countPlayer[player] || 0) + 1
    }
    const nextPlayerCount = playerCount(data.next)

    for (let key in nextPlayerCount) {
        countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key]
    }
    return countPlayer
}

const countPlayer = playerCount(data)
console.log(countPlayer) // {p1: 2, p4: 3, p3: 3, p2: 2: p5: 2}

/*  Prototype and Inheritance in JavaScript Objects */

const obj1 = {
    name: "Himanshu"
}
const obj2 = {
    age: 21,
    __proto__: obj1
}
console.log(obj2.name)

/*  Question 2: Group Anagrams(LeetCode 49) */
let strs = ['acid', 'idac']
let anagrams = {}
for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split("").sort().join("")
    if (!anagrams.hasOwnProperty(str)) {
        anagrams[str] = []
    }
    anagrams[str] = [...anagrams[str], strs[i]]
}
console.log(Object.values(anagrams))