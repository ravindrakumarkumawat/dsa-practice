// 1. Array-based solution
export default class Stack {
  constructor() {
    this._items = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    return this._items.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this._items.pop();
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.isEmpty() ? undefined : this._items[this.length() - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this._items.length;
  }
}

// 2. Linked list-based solution
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export class Stack {
  constructor() {
    this._top = null;
    this._length = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    const node = new Node(item);
    node.prev = this._top;
    this._top = node;
    this._length++;
    return this._length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this._top;
    this._top = node.prev;
    node.prev = null;
    this._length--;
    return node.value;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.isEmpty() ? undefined : this._top.value;
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this._length;
  }
}







// Applications of Stack Data Structure
// To reverse a word - Put all the letters in a stack and pop them out. Because of the LIFO order of stack, you will get the letters in reverse order.
// In compilers - Compilers use the stack to calculate the value of expressions like 2 + 4 / 5 * (7 - 9) by converting the expression to prefix or postfix form.
// In browsers - The back button in a browser saves all the URLs you have visited previously in a stack. Each time you visit a new page, it is added on top of the stack. When you press the back button, the current URL is removed from the stack, and the previous URL is accessed.

class StackImplementation {
  constructor(size) {
    this.arr = new Array(size);
    this.capacity = size;
    this.top = -1;
  }

  // Add elements into stack
  push(x) {
    if (this.isFull()) {
      console.log("OverFlow\nProgram Terminated\n");
      throw new Error("Stack Overflow");
    }

    console.log("Inserting " + x);
    this.arr[++this.top] = x;
  }

  // Remove element from stack
  pop() {
    if (this.isEmpty()) {
      console.log("STACK EMPTY");
      throw new Error("Stack Underflow");
    }
    return this.arr[this.top--];
  }

  // Return the size of the stack
  size() {
    return this.top + 1;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Check if the stack is full
  isFull() {
    return this.top === this.capacity - 1;
  }

  // Print the stack
  printStack() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.arr[i]);
    }
  }
}

// Usage example
const stack = new StackImplementation(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
console.log("\nAfter popping out");
stack.printStack();




// According to js implementation
class Stack1 {
  constructor() {
    this.arr = [];
  }

  // Mimic JS Array's push
  push(x) {
    return this.arr.push(x); // returns new length
  }

  // Mimic JS Array's pop
  pop() {
    if (this.isEmpty()) {
      console.log("STACK EMPTY");
      return undefined;
    }
    return this.arr.pop(); // returns removed item
  }

  // Return the current size of the stack
  size() {
    return this.arr.length;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.arr.length === 0;
  }

  // Print stack contents
  printStack() {
    this.arr.forEach(item => console.log(item));
  }
}

// Usage example
const stack1 = new Stack();

console.log(stack1.push(1)); // 1
console.log(stack1.push(2)); // 2
console.log(stack1.push(3)); // 3
console.log(stack1.push(4)); // 4

console.log("Popped:", stack1.pop()); // 4

console.log("\nAfter popping out:");
stack1.printStack(); // 1, 2, 3
