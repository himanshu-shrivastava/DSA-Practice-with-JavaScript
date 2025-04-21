/**
* inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
* root = 3, rootIndex = 1, inorder: [9] [15, 20, 7], postorder: [9], [15, 7, 20]
*/

class NodePractice {
    constructor (data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinaryTreePractice {
    constructor () {
        this.root = null
    }

    buildTree = function (inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3], calledBy = 'main') {
        if (postorder.length == 0) return null

        console.log('-----------', calledBy, '---------')
        // Calculate the length of PostOrder
        let postOrderLength = postorder.length
        console.log('postOrderLength-->', postOrderLength)

        // Get the root index of PreOrder using PostOrder
        const rootIndex = inorder.indexOf(postorder[postOrderLength - 1])
        console.log('rootIndex-->', rootIndex)

        // initialize root node of Preorder using root index of Preorder
        const rootNode = new NodePractice(postorder[postOrderLength - 1])
        console.log('rootNode-->', rootNode)

        console.log("Left - Slice of Preorder-->", inorder.slice(0, rootIndex))
        console.log("Left - Slice of Postordr-->", postorder.slice(0, rootIndex))
        rootNode.left = this.buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex), 'left')

        console.log("Right - Slice of Preorder-->", inorder.slice(rootIndex + 1))
        console.log("Right - Slice of Postordr-->", postorder.slice(rootIndex, postOrderLength - 1))
        rootNode.right = this.buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex, postOrderLength - 1), 'right')

        return rootNode
    }
}
const test = new BinaryTreePractice()
console.log(test.buildTree())