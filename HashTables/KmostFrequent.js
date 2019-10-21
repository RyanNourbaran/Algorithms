let arr = `Welcome to the world of Geeks This portal has been created to provide well written well thought and well explained 
solutions for selected questions If you like Geeks for Geeks and would like to contribute 
here is your chance You can write article and mail your article to contribute at 
geeksforgeeks org See your article appearing on the Geeks for Geeks main page and help 
thousands of other Geeks`.split(" ");

let kMostFrequent = (arr, k) => {
  let wordMap = {};

  for (let i = 0; i < arr.length; i++) {
    wordMap[arr[i]] = (wordMap[arr[i]] || 0) + 1;
  }

  let freqArr = [];
  for (let key in wordMap) {
    if (freqArr[wordMap[key]]) {
      freqArr[wordMap[key]].push(key);
    } else {
      freqArr[wordMap[key]] = [key];
    }
  }
  let ansArray = [];

  for (let i = freqArr.length - 1; i >= 0; i--) {
    if (freqArr[i]) {
      ansArray.push(freqArr[i]);
      k -= freqArr[i].length;
    }

    if (k <= 0) return ansArray;
  }
  return ansArray;
};

console.log(kMostFrequent(arr, 10));
