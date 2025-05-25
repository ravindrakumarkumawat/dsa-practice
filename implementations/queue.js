class Queue {
  constructor(size = 5) {
    this.SIZE = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.rear === this.SIZE - 1;
  }

  isEmpty() {
    return this.front === -1;
  }

  enQueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
    } else {
      if (this.front === -1) this.front = 0;
      this.rear++;
      this.items[this.rear] = element;
      console.log("Inserted " + element);
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    } else {
      const element = this.items[this.front];
      if (this.front >= this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front++;
      }
      console.log("Deleted -> " + element);
      return element;
    }
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty Queue");
    } else {
      console.log("\nFront index ->", this.front);
      console.log("Items ->");
      let output = "";
      for (let i = this.front; i <= this.rear; i++) {
        output += this.items[i] + "  ";
      }
      console.log(output);
      console.log("Rear index ->", this.rear);
    }
  }
}

// Usage
const q = new Queue();

// deQueue is not possible on empty queue
q.deQueue();

// enQueue 5 elements
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.enQueue(5);

// 6th element can't be added because the queue is full
q.enQueue(6);

q.display();

// deQueue removes element entered first i.e. 1
q.deQueue();

// Now we have just 4 elements
q.display();
