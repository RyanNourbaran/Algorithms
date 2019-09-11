/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }
  let keys = Object.keys(obj);
  console.log(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === 1) return keys[i];
  }
  return false;
};
