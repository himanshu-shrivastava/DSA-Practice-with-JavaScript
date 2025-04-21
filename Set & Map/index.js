/*  Map, WeakMap, Set, WeakSet in JavaScript */

/*  Set in JavaScript: */

// Creating a Set
const mySet = new Set()

// Adding values to the Set
mySet.add(1)
mySet.add("hello")
mySet.add(true)

// Checking if a value exists
console.log(mySet.has(1)) // true

// Removing a value
mySet.delete("hello")

// Iterating through the Set
for (const value of mySet) {
    console.log(value)
}

// Size of the Set
console.log(mySet.size) // 2

// Clearing the Set
mySet.clear()



/*  Map in JavaScript */

// Creating a Map
const myMap = new Map()

// Adding key-value pairs to the Map
myMap.set("name", "Himanshu")
myMap.set("age", 21)

// Getting a value using a key
console.log(myMap.get("name")) // Himanshu

// Checking if a key exists
console.log(myMap.has("age")) // true

// Removing a key-value pair
myMap.delete("age")

// Iterating through the Map
for (const [key, value] of myMap) {
    console.log(key, value)
}

// Size of the Map
console.log(myMap.size) // 1

// Clearing the Map
myMap.clear()


/*  Weak Map in JavaScript */

let obj = { key: 'value' }

// Creating a WeakMap
let weakMap = new WeakMap()
weakMap.set(obj, 'metadata')

// Checking if the object still exists in the WeakMap
console.log(weakMap.has(obj)) // true

// Removing the strong reference to the object
// @ts-ignore
obj = null

// At this point, the object is no longer strongly referenced
// The WeakMap's weak reference will allow the object to be garbage collected
console.log(weakMap.has(obj)) // false