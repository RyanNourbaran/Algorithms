/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return 0;
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let diff = Number.MAX_SAFE_INTEGER;
  let n = nums.length;
  if (nums[0] + nums[1] + nums[2] >= target) return nums[0] + nums[1] + nums[2];
  if (nums[n] + nums[n - 1] + nums[n - 2] <= target) return nums[n] + nums[n - 1] + nums[n - 2];

  let left, right, sum;
  for (let i = 0; i < n - 2; i++) {
    (left = i + 1), (right = n - 1);
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return target;
      if (Math.abs(sum - target) < Math.abs(diff)) {
        diff = sum - target;
      }
      if (sum > target) right--;
      if (sum < target) left++;
    }
  }
  return target + diff;
};
