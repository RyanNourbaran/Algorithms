var cache;
var queue = [];
var cap;
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  //if (!capacity.isInteger()) return;
  cache = [];
  cap = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (cache[key]) {
    return cache[key];
  }
  console.log(cache);

  return -1;
};

[1, 2, 3, 4][(2, 3, 4, 5)], [2, 4, 5, 3];
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  //when key exists, just replace
  if (cache[key]) {
    console.log("key exists");
    cache[key] = value;
    queue.push(key);
  }
  //when key is empty, value should be checked for duplicate
  else if (cache.indexOf(value)) {
    console.log("key doesnt exist, duplicate does");
    console.log(cache);

    let i = cache.indexOf(value);
    cache.splice(i, 1);
    queue.splice(queue.indexOf(i), 1);

    cache[key] = value;
    queue.push(key);
  }
  //when value is unique, capacity should be checked
  else {
    if (cache.length === cap) {
      console.log("cap reached");

      let i = queue.shift();
      cache.splice(i, 1);
      cache[key] = value;
      queue.push(key);
    } else {
      cache[key] = value;
      queue.push(key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
