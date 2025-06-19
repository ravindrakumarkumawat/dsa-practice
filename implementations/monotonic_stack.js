// Monotononic Stack Implementation
// This implementation provides a stack that maintains its elements in a monotonically increasing order.
// It allows for efficient retrieval of the maximum element in O(1) time.

class MonotonicStack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(value) {
    while (this.stack.length > 0 && this.stack[this.stack.length - 1] < value) {
      this.stack.pop();
    }
    this.stack.push(value);
  }

  // Pop an element from the stack
  pop() {
    return this.stack.pop();
  }

  // Get the top element of the stack
  top() {
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }
  
  peek() {
    return this.heap[0] || null;
  }
}