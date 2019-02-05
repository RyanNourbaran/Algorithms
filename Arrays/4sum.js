/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  let lo, hi, sum;
  for (let i = 0; i <= nums.length - 4; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j <= nums.length - 3; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      lo = j + 1;
      hi = nums.length - 1;
      while (lo < hi) {
        sum = nums[i] + nums[j] + nums[lo] + nums[hi];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[lo], nums[hi]]);
          while (lo < hi && nums[--hi] === nums[hi + 1]);
          while (lo < hi && nums[++lo] === nums[lo - 1]);
        } else if (sum > target) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }
  return ans;
};
