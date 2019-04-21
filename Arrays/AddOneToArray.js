const arrays = [[1, 2, 3, 4], [1, 2, 9, 9], [9, 9, 9]];

//iterative
function addOneToArray(arr) {
  let i = arr.length - 1;
  while (arr[i] === 9) {
    arr[i] = 0;
    i--;
    if (i <= -1) {
      arr.unshift(1);
    }
  }
  if (i !== -1) {
    arr[i] += 1;
  }
  return arr;
}

a1 = JSON.parse(JSON.stringify(arrays));
a2 = JSON.parse(JSON.stringify(arrays));
answers = a1.map(arr => addOneToArray(arr));

console.log(arrays);

//recursive
function addOneToArrayRecursive(arr) {
  return addOneToEndHelper(arr, arr.length - 1);
}

function addOneToEndHelper(arr, i) {
  if (arr[i] === 9) {
    arr[i] = 0;
    return addOneToEndHelper(arr, --i);
  } else if (i <= -1) {
    arr.unshift(1);
    return arr;
  } else {
    arr[i] += 1;
    return arr;
  }
}

answers2 = a2.map(arr => addOneToArrayRecursive(arr));
console.log(answers2);
