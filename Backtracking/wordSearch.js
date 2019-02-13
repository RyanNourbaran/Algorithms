/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  function searchDFS(index, X, Y) {
    if (index === word.length) return true;
    if (
      X >= board.length ||
      X < 0 ||
      Y >= board[X].length ||
      Y < 0 ||
      board[X][Y] === "checked"
    ) {
      return false;
    }
    let temp = board[X][Y];
    //console.log(temp, word[index])
    if (temp != word[index]) return false;
    board[X][Y] = "checked";

    const ans =
      searchDFS(index + 1, X + 1, Y) ||
      searchDFS(index + 1, X - 1, Y) ||
      searchDFS(index + 1, X, Y + 1) ||
      searchDFS(index + 1, X, Y - 1);

    board[X][Y] = temp;
    return ans;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (word[0] == board[i][j]) {
        if (searchDFS(0, i, j)) return true;
      }
    }
  }
  return false;
};
