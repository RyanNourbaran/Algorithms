/* Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.


node1 -> node2 -> node3 -> node4 -> node5

node2 -> node1 -> node3 */

function swap(head) {
  let curNode = head;
  while (curNode.next) {
    //store node (i+1)
    let tempNode = curNode.next;
    //attach node(i) to node(i+2)
    curNode.next = tempNode.next;
    tempNode.next = curNode;
    curNode = curNode.next;
  }

  return head.next;
}
