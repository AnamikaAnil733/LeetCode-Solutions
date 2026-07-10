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
    let w = head
    let current = head.next
    let sum = 0
    while (current) {
        if (current.val == 0) {
            w.val = sum
            w.next = current.next
            w = w.next
            sum = 0
        } else {
            sum += current.val
        }
        current = current.next
    }
    return head
};