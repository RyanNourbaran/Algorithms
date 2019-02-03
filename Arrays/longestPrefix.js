/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(s) {
  if (s.length === 0) return "";
  let prefix = s[0];
  for (let i = 1; i < s.length; i++) {
    while (s[i].slice(0, prefix.length) !== prefix) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};
