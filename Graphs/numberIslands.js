/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let g = [...grid];
  let numIslands = 0;

  function sink(i, j) {
    //if out of bounds or tile is ocean (0), return 0
    if (i < 0 || i >= g.length || j < 0 || j >= g[i].length || g[i][j] == "0") {
      return 0;
    } else {
      //sink each connection to current island and return 1
      g[i][j] = "0";
      sink(i + 1, j);
      sink(i - 1, j);
      sink(i, j + 1), sink(i, j - 1);
      return 1;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      numIslands += sink(i, j);
    }
  }
  return numIslands;
};
