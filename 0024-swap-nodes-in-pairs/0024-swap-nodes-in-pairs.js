/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) {
        return head
    }
    let current = head
    let a = []
    while (current) {
        a.push(current.val)
        current = current.next
    }
    for (let i = 0; i < a.length; i += 2) {
        if (a[i + 1] !== undefined) {
            [a[i], a[i + 1]] = [a[i + 1], a[i]]
        }
    }
    let current1 = head
    let j = 0
    while (current1) {
        current1.val = a[j]
        j++
        current1 = current1.next
    }
    return head
};