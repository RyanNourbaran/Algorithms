function Node(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
}
/**
 * @param {Node} node
 * @return {Node}
 */

let visited = {};

function dfs(node) {
  if (!node) return node;
  //return reference if already visited
  if (visited[node]) {
    return visited[node];
  }
  //shallow copy
  let clone = new Node(node);
  //loop recursively through neighbors
  console.log(node, node.val, node.neighbors);

  clone.neighbors = node.neighbors.map(dfs);
  visited[node] = clone;

  return clone;
}

dfs(input);
