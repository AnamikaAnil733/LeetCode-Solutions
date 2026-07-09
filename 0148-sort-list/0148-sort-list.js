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
var sortList = function(head) {
    let current = head
    let array = []
    while(current){
         array.push(current.val)
        current= current.next  
    }
    array.sort((a,b)=>a-b)
    let h = head
    let i =0
       while(h){
        h.val = array[i]
        i++
        h= h.next  
    }
    return head
};