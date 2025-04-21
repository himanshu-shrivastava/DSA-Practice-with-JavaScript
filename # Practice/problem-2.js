/* 
Detect Cycle in a Linked List
Problem Statement: Given a linked list, determine if it has a cycle in it.​

Approach: Use two pointers (slow and fast). The slow pointer moves one step at a time, while the fast pointer moves two steps. If there is a cycle, the fast pointer will eventually meet the slow pointer.
*/

class ListNode {
    constructor (value) {
        this.value = value
        this.next = null
    }
}
function hasCycle(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            return true
        }
    }
    return false
}

let head1 = new ListNode(3)
let head2 = new ListNode(2)
let head3 = new ListNode(0)
let head4 = new ListNode(-4)

head1.next = head2
head2.next = head3
head3.next = head4
head4.next = head2

console.log(hasCycle(head1))