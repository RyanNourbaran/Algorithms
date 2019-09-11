/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return helper(0, nums.length - 1);

  function helper(lo, hi) {
    if (lo > hi) return null;

    let mid = ~~((lo + hi) / 2);
    let tree = new TreeNode(nums[mid]);
    tree.right = helper(mid + 1, hi);
    tree.left = helper(lo, mid - 1);

    return tree;
  }

  return tree;
};

//note - using slice() is inefficient. Better to pass index
