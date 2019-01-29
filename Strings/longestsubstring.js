/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length
    let count = 0;
    let set = {};
    let arr = s.split("");
    let left = 0;
    let right = 0;
    
    while (left < arr.length && right < arr.length) {
        if (arr[right] in set) {            
            
            console.log(right, left);
            delete set[arr[left]];
            left++;
        }else {
            set[arr[right]] = right;            
            right++;
        }
        
        count = Math.max(count, right-left)
    }
    return count;
};