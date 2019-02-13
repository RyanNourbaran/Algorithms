/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let squares = {},
    rows = {},
    cols = {};
  let tempVal;
  //rows
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      tempVal = board[i][j];
      if (tempVal !== ".") {
        if (rows[tempVal]) {
          return false;
        } else {
          rows[tempVal] = true;
        }
      }
    }
    rows = {};
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      tempVal = board[j][i];
      if (tempVal !== ".") {
        if (cols[tempVal]) {
          return false;
        } else {
          cols[tempVal] = true;
        }
      }
    }
    cols = {};
  }

  //squares
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[i].length; j += 3) {
      let xend = i + 3,
        yend = j + 3;

      for (let k = i; k < xend; k++) {
        for (let l = j; l < yend; l++) {
          tempVal = board[k][l];
          if (tempVal !== ".") {
            if (squares[tempVal]) {
              return false;
            } else {
              squares[tempVal] = true;
            }
          }
        }
      }

      squares = {};
    }
  }
  return true;
};
