/**
 * Linked List Applications
  * Dynamic memory allocation
  * Implemented in stack and queue
  * In undo functionality of softwares
  * Hash tables, Graphs
 */

class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create linked list
const linkedList = new LinkedList();

// Assign values
linkedList.head = new Node(1);
const second = new Node(2);
const third = new Node(3);

// Connect nodes
linkedList.head.next = second;
second.next = third;

// Print node values
let current = linkedList.head;
while (current !== null) {
  process.stdout.write(current.value + " ");
  current = current.next;
}
