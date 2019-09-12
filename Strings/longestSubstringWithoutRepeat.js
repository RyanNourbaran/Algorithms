/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length;

  let indexMap = {};
  let i = 0;
  let maxCount = 0;

  for (let j = 0; j < s.length; j++) {
    if (indexMap[s[j]] != undefined) {
      i = Math.max(i, indexMap[s[j]] + 1);
    }
    indexMap[s[j]] = j;
    maxCount = Math.max(maxCount, j - i + 1);
  }

  return maxCount;
};
