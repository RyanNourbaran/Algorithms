/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let num = "1";
  for (let i = 0; i < n - 1; i++) {
    num = helper(num);
  }

  function helper(num) {
    let newNum = "";
    let current = num[0];
    let occurence = 1;
    for (let i = 1; i < num.length; i++) {
      if (num[i] === current) {
        occurence++;
      } else {
        newNum = newNum + occurence + current;
        current = num[i];
        occurence = 1;
      }
    }
    newNum = newNum + occurence + current;

    return newNum;
  }

  return num;
};
