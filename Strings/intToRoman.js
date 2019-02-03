/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let ans = "";
  numbers.forEach((value, i) => {
    if (~~(num / value) > 0) {
      let times = ~~(num / value);
      num = num - times * value;
      while (times > 0) {
        ans += roms[i];
        times--;
      }
    }
  });
  return ans;
};
