/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length <= 1) return [nums];
  let ans = [];
  nums = nums.sort((a, b) => a - b);

  function backtrack(numsRemaining, currentArr) {
    let last = null;
    for (let i = 0; i < numsRemaining.length; i++) {
      if (numsRemaining[i] === last) continue;
      last = numsRemaining[i];
      currentArr.push(numsRemaining[i]);
      backtrack(
        numsRemaining.slice(0, i).concat(numsRemaining.slice(i + 1)),
        currentArr
      );
      currentArr.pop();
    }
    if (currentArr.length === nums.length) ans.push([...currentArr]);
  }
  backtrack(nums, []);
  return ans;
};
