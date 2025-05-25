// Applications of Stack Data Structure
// To reverse a word - Put all the letters in a stack and pop them out. Because of the LIFO order of stack, you will get the letters in reverse order.
// In compilers - Compilers use the stack to calculate the value of expressions like 2 + 4 / 5 * (7 - 9) by converting the expression to prefix or postfix form.
// In browsers - The back button in a browser saves all the URLs you have visited previously in a stack. Each time you visit a new page, it is added on top of the stack. When you press the back button, the current URL is removed from the stack, and the previous URL is accessed.

class Stack {
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
const stack = new Stack(5);

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
