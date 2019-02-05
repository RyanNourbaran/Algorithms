/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head.next === null) return null;
  let numNodes = 1;
  let node = head;
  while (node.next !== null) {
    numNodes++;
    node = node.next;
  }
  if (n === numNodes) return head.next;
  node = head;

  for (let i = 0; i < numNodes - n - 1; i++) {
    node = node.next;
  }
  node.next = node.next.next;
  return head;
};
