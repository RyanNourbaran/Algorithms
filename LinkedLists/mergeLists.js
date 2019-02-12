/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let nodes = new ListNode();
  let head = nodes;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      nodes.next = l1;
      l1 = l1.next;
      nodes = nodes.next;
    } else {
      nodes.next = l2;
      l2 = l2.next;
      nodes = nodes.next;
    }
  }
  nodes.next = l1 || l2;
  return head.next;
};
