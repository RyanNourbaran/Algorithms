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

  let dummy = new ListNode();
  dummy.next = head;
  let first = dummy;

  while (first.next != null && first.next.next != null) {
    let second = first.next;
    let third = second.next;

    first.next = third;
    second.next = third.next;
    third.next = second;

    first = second;
  }

  return dummy.next;
};
