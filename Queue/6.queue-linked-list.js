/*  Queue Implementation Using Linked List */
class CustomNode {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class QueueLinkedList {
    constructor () {
        this.head = null
        this.tail = this.head
        this.size = 0
    }

    enqueue(data) {
        const newNode = new CustomNode(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            // @ts-ignore
            this.tail.next = newNode
        }

        this.tail = newNode
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        const deletedItem = this.head.data
        this.head = this.head.next
        this.size--
        return deletedItem
    }

    front() {
        return this.isEmpty() ? null : this.head.data
    }

    back() {
        // @ts-ignore
        return this.isEmpty() ? null : this.tail.data
    }

    isEmpty() {
        return this.size === 0
    }
}

const queue1 = new QueueLinkedList()
queue1.enqueue(5)
queue1.enqueue(6)
queue1.enqueue(7)
console.log(queue1.dequeue()) // 5
console.log(queue1.front()) // 6
console.log(queue1.back()) // 7
console.log(queue1.size) // 2
console.log(queue1)

/* Output : QueueLinkedList 
    { 
        head: CustomNode { data: 6, next: CustomNode { data: 7, next: null }}, 
        tail: CustomNode{data: 7, next: null}, 
        size: 2
    }
*/