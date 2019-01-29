/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let set = {};
    for (let i=0; i<nums.length; i++) {
        const comp = target-nums[i];
        if (comp in set) return [set[comp], i];
        set[nums[i]] = i;
    }
    return []
};