//given "abc-def-g" return "gfe-dcb-a"

let reverseAlhpaChar = str => {
  let swap = (a, b) => {
    let newString =
      str.slice(0, a) +
      str[b] +
      str.slice(a + 1, b) +
      str[a] +
      str.slice(b + 1);
    str = newString;
  };

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (!str[i].match(/^[a-zA-Z]+$/)) {
      i++;
    } else if (!str[j].match(/^[a-zA-z]+$/)) {
      j--;
    } else {
      swap(i, j);
      i++;
      j--;
    }
  }

  return str;
};

console.log(reverseAlhpaChar("-a--b"));
