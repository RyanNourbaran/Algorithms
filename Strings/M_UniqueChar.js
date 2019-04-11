function kUnique(s, k) {
  let i = 0,
    j = 0,
    u = 0;
  let ans = "",
    map = {};

  while (i <= s.length) {
    console.log(j, i, ans);
    console.log("\n");

    let f = s.slice(j, j + 1),
      e = s.slice(i, i + 1);
    if (map[e]) {
      i++;
    } else if (u < k) {
      map[e] = true;
      i++;
      u++;
    } else {
      if (s.slice(j, i).length > ans.length) ans = s.slice(j, i);
      while (f === s.substring(++j, j + 1));
      i = j;
      u--;

      map[f] = false;
    }
    console.log(map);

    // console.log(`${i}th char: ${e}, ${j}th char: ${f}, ans: ${ans}`);
    // console.log(map);
    // console.log("\n");
  }
  return ans;
}

console.log(kUnique("abbbcdadcabb", 3));
