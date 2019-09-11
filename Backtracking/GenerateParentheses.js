// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function(n) {
//   let leftBracket = n;
//   let rightBracket = n;

//   let ans = ["()"];

//   for (let i = 2; i <= n; i++) {
//     ans = backTrack(ans, i);
//   }
//   return ans;
// };

// var backTrack = (ans, m) => {
//   let temp = [];

//   for (let i = 0; i < ans.length; i++) {
//     temp.push("(" + ans[i] + ")");
//     temp.push("()" + ans[i]);
//     if ("()" + ans[i] !== ans[i] + "()") {
//       temp.push(ans[i] + "()");
//     }
//   }
//   return temp;
// };
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let brackets = [];
  function backtrack(S = "", left = 0, right = 0) {
    if (S.length === 2 * n) {
      console.log(S);
      brackets.push(S);
      return;
    }
    if (left < n) {
      backtrack(S + "(", left + 1, right);
    }
    if (right < left) {
      backtrack(S + ")", left, right + 1);
    }
  }

  backtrack();
  return brackets;
};
