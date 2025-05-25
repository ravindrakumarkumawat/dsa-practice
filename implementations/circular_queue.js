/**
 * Applications of Circular Queue
 * CPU scheduling
 * Memory management
 * Traffic Management
 */

class CircularQueue {
  constructor(size = 5) {
    this.SIZE = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return (this.front === 0 && this.rear === this.SIZE - 1) ||
           (this.rear + 1 === this.front);
  }

  isEmpty() {
    return this.front === -1;
  }

  enQueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }

    if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.SIZE;
    }

    this.items[this.rear] = element;
    console.log("Inserted " + element);
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    }

    const element = this.items[this.front];

    if (this.front === this.rear) {
      // Queue has only one element
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.SIZE;
    }

    console.log("Deleted -> " + element);
    return element;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty Queue");
      return;
    }

    console.log("\nFront index ->", this.front);
    console.log("Items ->");

    let i = this.front;
    let output = "";

    while (true) {
      output += this.items[i] + "  ";
      if (i === this.rear) break;
      i = (i + 1) % this.SIZE;
    }

    console.log(output);
    console.log("Rear index ->", this.rear);
  }
}
