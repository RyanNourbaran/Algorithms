/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const comp = { ")": "(", "}": "{", "]": "[" };
  let stack = [];
  let bracket;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      bracket = stack.pop();
      if (bracket !== comp[s[i]]) return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
