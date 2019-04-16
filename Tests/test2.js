// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  if (A.length === 1) return 1;
  let maxLevel = 1;
  let maxSum = A[0];
  let i = 0,
    j = 1;
  let currentLevel = 1;
  while (j <= A.length) {
    let interval = A.slice(i, j);
    let tempSum = interval.reduce((sum, x) => {
      return sum + x;
    }, 0);
    console.log(tempSum);
    if (tempSum > maxSum) {
    }
    i = j;
    currentLevel++;
    j = Math.pow(2, currentLevel) - 1;
  }

  return maxLevel;
}
solution([-1, 7, 0, 7, -8]);
