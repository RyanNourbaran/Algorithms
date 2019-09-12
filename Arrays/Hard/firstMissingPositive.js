/**
 * @param {number[]} nums
 * @return {number}
 //[1,3,4,6,7,22];
 */

//[1,3,4,-1]

//
var firstMissingPositive = function(nums) {
  let swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);

  let n = nums.length - 1;
  let low = 0;
  let high = nums.length;

  while (low < high) {
    console.log(nums, low, high);
    let current = nums[low];

    //correct position
    if (current === low + 1) {
      low++;
    } else if (current > n || current <= 0 || current === nums[low - 1]) {
      //out of bounds from right, not an integer, or duplicate
      swap(low, --high);
    } else {
      swap(current - 1, low);
    }
  }
  // stops at the index where the integer is missing
  return high + 1;
};
