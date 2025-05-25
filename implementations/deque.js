// Applications of Deque Data Structure
// In undo operations on software.
// To store history in browsers.
// For implementing both stacks and queues.
class Deque {
  constructor(size) {
    this.MAX = 100;
    this.arr = new Array(this.MAX);
    this.front = -1;
    this.rear = 0;
    this.size = size;
  }

  isFull() {
    return (this.front === 0 && this.rear === this.size - 1) || this.front === this.rear + 1;
  }

  isEmpty() {
    return this.front === -1;
  }

  insertFront(key) {
    if (this.isFull()) {
      console.log("Overflow");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }

    this.arr[this.front] = key;
  }

  insertRear(key) {
    if (this.isFull()) {
      console.log("Overflow");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.size - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.arr[this.rear] = key;
  }

  deleteFront() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return;
    }

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
  }

  deleteRear() {
    if (this.isEmpty()) {
      console.log("Underflow");
      return;
    }

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("Underflow");
      return -1;
    }
    return this.arr[this.front];
  }

  getRear() {
    if (this.isEmpty() || this.rear < 0) {
      console.log("Underflow");
      return -1;
    }
    return this.arr[this.rear];
  }
}

// Demo
const dq = new Deque(4);

console.log("Insert element at rear end : 12");
dq.insertRear(12);

console.log("Insert element at rear end : 14");
dq.insertRear(14);

console.log("Get rear element: " + dq.getRear());

dq.deleteRear();
console.log("After delete rear element, new rear becomes: " + dq.getRear());

console.log("Insert element at front end: 13");
dq.insertFront(13);

console.log("Get front element: " + dq.getFront());

dq.deleteFront();
console.log("After delete front element, new front becomes: " + dq.getFront());
