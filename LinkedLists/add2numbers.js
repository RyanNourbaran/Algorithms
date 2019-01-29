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
var addTwoNumbers = function(l1, l2) {
  let curNode = new ListNode(0);
  //keep track of head so we can return head.next
  let head = curNode;
  let remainder = 0;
  let sum = 0;
  while (l1 != null || l2 != null) {
    sum = remainder;
    //add values to sum if nodes exist, otherwise add 0
    sum += l1 ? l1.val : 0;
    sum += l2 ? l2.val : 0;

    //account for remainder
    if (sum >= 10) {
      remainder = 1;
      sum -= 10;
    } else {
      remainder = 0;
    }
    //add next node and move current node forward
    curNode.next = new ListNode(sum);
    curNode = curNode.next;

    //if nodes exist, move them forward
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  // if remainder remains, add to the tail
  if (remainder) curNode.next = new ListNode(remainder);
  return head.next;
};
