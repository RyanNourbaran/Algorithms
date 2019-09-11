/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  let newHead = new Node(head.val, null, null);
  let newCurrent = newHead;
  let current = head;

  //create a connnection between each old list node and new list node
  let connectedMap = new Map();
  connectedMap.set(current, newCurrent);

  //add all nodes to new list
  while (current.next) {
    newCurrent.next = new Node(current.next.val, null, null);
    newCurrent = newCurrent.next;
    current = current.next;
    connectedMap.set(current, newCurrent);
  }

  current = head;
  newCurrent = newHead;
  //add all random pointers
  while (current && newCurrent) {
    if (current.random) {
      //look up the old list node to connect to new list node
      newCurrent.random = connectedMap.get(current.random);
    }
    current = current.next;
    newCurrent = newCurrent.next;
  }

  return newHead;
};
