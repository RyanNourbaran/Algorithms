/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 1;
  let difference = Number.MAX_SAFE_INTEGER;
  while (nums[i] !== 0 && nums[i] < nums[i - 1]) i--;

  let closestIndex = i;
  let j = 0;
  for (j; j < nums.length; j++) {
    if (nums[j] - nums[i] < difference) {
      difference = nums[j] - nums[i];
      closestIndex = j;
    }
  }
  console.log(nums[i], nums[closestIndex]);
  let temp = nums[i];
  nums[i] = nums[closestIndex];
  nums[closestIndex] = temp;

  let t = nums.slice(i + 1).reverse();
  console.log(t);
  nums.splice(i + 1, nums.length - i - 1).concat(t);
  console.log(nums);
  return nums;
};
