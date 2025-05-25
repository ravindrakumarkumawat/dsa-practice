/**
 * Doubly Linked List Applications
 * Redo and undo functionality in software.
 * Forward and backward navigation in browsers.
 * For navigation systems where forward and backward navigation is required.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertFront(data) {
    const newNode = new Node(data);
    newNode.next = this.head;

    if (this.head !== null) {
      this.head.prev = newNode;
    }

    this.head = newNode;
  }

  insertAfter(prevNode, data) {
    if (prevNode === null) {
      console.log("Previous node cannot be null");
      return;
    }

    const newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    }
  }

  insertEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.prev = temp;
  }

  deleteNode(delNode) {
    if (this.head === null || delNode === null) return;

    if (this.head === delNode) {
      this.head = delNode.next;
    }

    if (delNode.next !== null) {
      delNode.next.prev = delNode.prev;
    }

    if (delNode.prev !== null) {
      delNode.prev.next = delNode.next;
    }
  }

  deleteByValue(value) {
    let current = this.head;

    while (current !== null) {
      if (current.data === value) {
        this.deleteNode(current); // Reuse the existing logic
        return;
      }
      current = current.next;
    }

    console.log(`Value ${value} not found in the list.`);
  }

  printList() {
    let node = this.head;
    let result = '';
    while (node !== null) {
      result += node.data + '->';
      node = node.next;
    }
    console.log(result);
  }

  // 1. Reverse traversal
  printReverse() {
    if (this.head === null) return;

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }

    let result = '';
    while (tail !== null) {
      result += tail.data + '<-';
      tail = tail.prev;
    }
    console.log(result);
  }

  // 2. Search a value
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  // 3. Get length
  getLength() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // 4. Convert to Circular Doubly Linked List
  makeCircular() {
    if (!this.head) return;

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }

    // Make it circular
    tail.next = this.head;
    this.head.prev = tail;
  }

  // Print circular list (safe with limit)
  printCircular(limit = 20) {
    let current = this.head;
    let count = 0;
    let result = '';

    while (current !== null && count < limit) {
      result += current.data + '->';
      current = current.next;
      count++;
      if (current === this.head) break;
    }

    console.log(result + '(circular)');
  }
}

const dll = new DoublyLinkedList();

dll.insertEnd(5);
dll.insertFront(1);
dll.insertFront(6);
dll.insertEnd(9);

dll.insertAfter(dll.head, 11);
dll.insertAfter(dll.head.next, 15);

console.log("Forward:");
dll.printList();

console.log("Reverse:");
dll.printReverse();

console.log("Search 15:", dll.search(15)); // true
console.log("Search 100:", dll.search(100)); // false

console.log("Length:", dll.getLength()); // 6

// Convert to circular and print limited nodes
dll.makeCircular();
console.log("Circular Print:");
dll.printCircular(10); // Prints 10 nodes from circular list


// Singly Linked List
// Each node consists of a data value and a pointer to the next node.
// Traversal can occur in one way only (forward direction).
// It requires less space.
// It can be implemented on the stack.
// Doubly Linked List
// Each node consists of a data value, a pointer to the next node, and a pointer to the previous node.
// Traversal can occur in both ways.
// It requires more space because of an extra pointer.
// It has multiple usages. It can be implemented on the stack, heap, and binary tree.
