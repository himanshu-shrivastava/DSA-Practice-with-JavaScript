/*  Stack Implementation Using Linked List */

class CustomNode {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class StackLinkedList {

    constructor () {
        this.top = null
        this.size = 0
    }

    push(data) {
        const newNode = new CustomNode(data)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            return "List is already empty"
        }
        const item = this.top.data
        this.top = this.top.next
        this.size--
        return item
    }

    peek() {
        return this.top.data
    }

    isEmpty() {
        return this.size === 0
    }
}

const stack1 = new StackLinkedList()
stack1.push(10)
stack1.push(12)
stack1.push(14)
console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1)