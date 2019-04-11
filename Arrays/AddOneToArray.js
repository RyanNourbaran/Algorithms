const arrays = [[1, 2, 3, 4], [1, 2, 9, 9], [9, 9, 9]];
function addOneToArray(arr) {
  let i = arr.length - 1;
  while (arr[i] === 9) {
    arr[i] = 0;
    i--;
    if (i <= -1) {
      arr.splice(0, 0, 1);
    }
  }
  if (i !== -1) {
    arr[i] += 1;
  }
  return arr;
}

answers = arrays.map(arr => addOneToArray(arr));
console.log(answers);
