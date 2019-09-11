/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min;
  if (x < min) {
    min = x;
  }
  this.stack.push({ val: x, min: min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
