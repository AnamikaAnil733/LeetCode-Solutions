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
var mergeNodes = function (head) {
    let current = head.next
    let sum = 0
    let a = []
    while (current) {
        if (current.val == 0) {
            a.push(sum)
            sum = 0
        }
        sum += current.val
        current = current.next
    }
    let c = head
    let i = 0
    let prev = null
    while (i < a.length) {
        c.val = a[i]
        i++
        prev = c
        c = c.next
    }
    prev.next = null
    return head
};