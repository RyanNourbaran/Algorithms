/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
      dp[i + j] = Math.min(dp[i] + 1, dp[i + j]);
    }
  }
  return dp[nums.length - 1];
};
