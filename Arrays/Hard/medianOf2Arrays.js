/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// nums2 = [-1,2,6,7,9,11,23];
// nums1 = [2,3,6,8,12];

// -1, 2, 6,    |7, 9, 11, 23
// 2, 3,5,      |11, 12

var findMedianSortedArrays = function(nums1, nums2) {
  // make nums1 the shorter of the two
  if (nums1.length > nums2.length) {
    let temp = [...nums1];
    nums1 = nums2;
    nums2 = temp;
  }

  // used for binary search for the correct spot to partition nums1
  let low = 0;
  let high = nums1.length;

  while (low <= high) {
    // find the partition of nums1 based off binary search
    let partition1 = ~~((high + low) / 2);

    // find partition of nums2 so that the total # of elements on left and right are equal
    let partition2 = ~~((nums1.length + nums2.length + 1) / 2) - partition1;

    let left1Max =
      partition1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
    let left2Max =
      partition2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];

    let right1Min =
      partition1 === nums1.length ? Number.MAX_SAFE_INTEGER : nums1[partition1];
    let right2Min =
      partition2 === nums2.length ? Number.MAX_SAFE_INTEGER : nums2[partition2];

    // partition1 is too far right
    if (left1Max > right2Min) {
      high = partition1 - 1;
    }
    // partition1 is too far left
    else if (left2Max > right1Min) {
      low = partition1 + 1;
    }
    // partition is at the correct spot
    else {
      if ((nums1.length + nums2.length) % 2 === 0) {
        return (
          (Math.max(left1Max, left2Max) + Math.min(right1Min, right2Min)) / 2
        );
      } else {
        return Math.max(left1Max, left2Max);
      }
    }
  }
  return false;
};
