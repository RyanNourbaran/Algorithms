let changeBase = (strNum, base1, base2) => {
  let ans = "";
  let hexaMap = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  let decimal = 0;
  for (let i = strNum.length - 1; i >= 0; i--) {
    let exp = strNum.length - 1 - i;
    decimal += Math.pow(base1, exp) * strNum[i]; // 1 * 2^0 , 0 *2^1, 1*2^2, 1*2^3
  }
  if (base2 === 10) return decimal.toString();

  //13
  while (decimal > 0) {
    let remainder = decimal % base2; //13 % 2 = 1, 6%2 = 0, 3%2 = 1; 1%2 = 1;   1101
    decimal = ~~(decimal / base2); // decimal = 6, decimal = 3, decimal = 1
    if (base2 === 16) {
      remainder = hexaMap[remainder] || remainder;
    }
    ans = remainder + ans;
  }

  return ans;
};

console.log(changeBase("1101", 2, 10) === "13");
console.log(changeBase("1101", 2, 16) === "D");
console.log(changeBase("17", 10, 8) === "21"); // 1 + 2 = 21
