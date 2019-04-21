/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  //str is empty
  if (str.length === 0) return 0;

  let ans = 0;
  let sign = 1;

  let i = 0;
  //get rid of spaces
  while (i < str.length && str[i] === " ") i++;

  if (str[i] === "+" || str[i] === "-") {
    sign = str[i] === "+" ? 1 : -1;
    i++;
  }
  for (i; i < str.length; i++) {
    let c = str[i] - "0";
    if (c < 0 || c > 9 || str[i] === " " || isNaN(c)) {
      break;
    } else {
      ans = ans * 10 + c;
    }
  }
  if (ans * sign < Math.pow(2, 31) - 1) {
    return (Math.pow(2, 31) - 1) * sign;
  } else if (ans * sign > Math.pow(2, 31)) {
    return Math.pow(2, 31) * sign;
  } else {
    return ans * sign;
  }
};
