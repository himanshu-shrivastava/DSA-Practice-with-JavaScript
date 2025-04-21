// @ts-nocheck
class CustomNode {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor () {
        this.root = null
    }

    insert(value) {
        const newNode = new CustomNode(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root
        while (true) {
            if (newNode.value === temp.value) return undefined

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                } else {
                    temp = temp.left
                }
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    bfs() {
        let current = this.root
        let queue = []
        let data = []

        queue.push(current)
        while (queue.length) {
            current = queue.shift()
            data.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return data
    }

    dfsPreOrder(node = this.root, data = []) {
        if (node === null) return data
        data.push(node.value)
        if (node.left) this.dfsPreOrder(node.left, data)
        if (node.right) this.dfsPreOrder(node.right, data)
        return data
    }

    dfsPostOrder(node = this.root, data = []) {
        if (node === null) return data
        if (node.left) this.dfsPostOrder(node.left, data)
        if (node.right) this.dfsPostOrder(node.right, data)
        data.push(node.value)
        return data
    }

    dfsInOrder(node = this.root, data = []) {
        if (node === null) return data
        if (node.left) this.dfsInOrder(node.left, data)
        data.push(node.value)
        if (node.right) this.dfsInOrder(node.right, data)
        return data
    }
}

const tree = new BST()
tree.insert(5)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(9)
console.log('tree-->', tree)
console.log('bfs-->', tree.bfs())
console.log('dfsPreOrder-->', tree.dfsPreOrder())
console.log('dfsPostOrder-->', tree.dfsPostOrder())
console.log('dfsInOrder-->', tree.dfsInOrder())
