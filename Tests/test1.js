// Google Fall 2019 part 1
console.log("1".toUpperCase());
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S1, S2) {
  let map = {};
  let current = 0;
  let timeTaken = 0;

  //map keyboard to
  for (let i = 0; i < S1.length; i++) {
    map[S1[i]] = i;
  }

  for (let i = 0; i < S2.length; i++) {
    timeTaken += Math.abs(map[S2[i]] - current);
    current = map[S2[i]];
  }
  return timeTaken;
}
