/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  //if only 1 row, then just return s
  if (numRows == 1) return s;

  let ans = [];

  //determines the direction to move
  let step = 1;
  //determines the row to insert into
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    //initiate with empty
    if (!ans[index]) ans[index] = "";
    ans[index] += s[i];

    //change direction if at top or bottom of zigzag
    if (index === numRows - 1) {
      step = -1;
    } else if (index === 0) {
      step = 1;
    }

    index += step;
  }
  return ans.join("");
};
