/*  Stack Implementation Using Array */

// @ts-ignore
class Stack {
    constructor () {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }
        const poppedItem = this.stack[this.stack.length - 1]
        this.stack.pop()
        return poppedItem
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }
}

const stack = new Stack()
stack.push(10)
stack.push(12)
stack.push(14)
stack.push(11)
stack.push(17)
console.log(stack)
console.log('stack.pop-->', stack.pop())
console.log('stack.pop-->', stack.pop())
console.log('stack.peek()-->', stack.peek())
console.log(stack)