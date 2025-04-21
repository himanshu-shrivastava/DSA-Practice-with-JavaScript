/*  Queue Implementation Using Array */

class Queue {
    constructor () {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data)
    }

    dequeue() {
        return this.isEmpty() ? null : this.queue.shift()
    }

    front() {
        return this.isEmpty() ? null : this.queue.at(0)
    }

    back() {
        return this.isEmpty() ? null : this.queue.at(-1)
    }

    isEmpty() {
        return this.queue.length === 0
    }

    size() {
        return this.queue.length
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue()) // 1
console.log(queue.front()) // 2
console.log(queue.back()) // 3
console.log(queue.isEmpty()) // false
console.log(queue.size()) // 2
console.log(queue) // Queue { queue: [2, 3]}