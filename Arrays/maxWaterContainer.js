/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxWater = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    let currentWater = Math.min(height[left], height[right]) * (right - left);
    if (currentWater > maxWater) {
      maxWater = currentWater;
    } else if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};
