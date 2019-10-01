var steps = (n, ranges) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  let sum = 0;
  for (let i = 0; i < ranges.length; i++) {
    sum += steps(n - ranges[i], ranges);
  }
  return sum;
};

console.log(steps(5, [1, 2]));
console.log(steps(5, [1, 3, 5]));
