/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  //if the power is negative, than we need the power of the inverse of x
  if (n < 0) {
    x = 1 / x;
    n *= -1;
  }
  //base case
  if (n === 0) {
    return 1;
  }
  //recursive call to reduce size of n by half, so we don't have to recalc x^(n/2) over and over
  let half = myPow(x, ~~(n / 2));

  if (n % 2 === 0) {
    x = half * half;
  } else {
    //add an extra x
    x = half * half * x;
  }
  return x;
};
