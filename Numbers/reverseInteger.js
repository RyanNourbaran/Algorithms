/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let ans = 0;
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = x * -1;
  }

  while (x > 0) {
    let remainder = x % 10; // 3 - 2 - 1;
    x = ~~(x / 10); //12 - 1 - 0;

    ans = ans * 10 + remainder;
  }
  if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) return 0;

  return ans * sign;
};
