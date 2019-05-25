/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let water = 0;
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  while (left < right) {
    if (height[left] > height[right]) {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    } else {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    }
  }
  return water;
};
