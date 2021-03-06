/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let n = head.next;
  head.next = swapPairs(head.next.next);
  n.next = head;

  return n;
};
