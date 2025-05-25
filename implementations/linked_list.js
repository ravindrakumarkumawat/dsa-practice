/**
 * Linked List Applications
  * Dynamic memory allocation
  * Implemented in stack and queue
  * In undo functionality of softwares
  * Hash tables, Graphs
 */

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning
  insertAtBeginning(new_data) {
    const new_node = new Node(new_data);
    new_node.next = this.head;
    this.head = new_node;
  }

  // Insert after a node
  insertAfter(prev_node, new_data) {
    if (!prev_node) {
      console.log("The given previous node cannot be null");
      return;
    }
    const new_node = new Node(new_data);
    new_node.next = prev_node.next;
    prev_node.next = new_node;
  }

  // Insert at the end
  insertAtEnd(new_data) {
    const new_node = new Node(new_data);

    if (!this.head) {
      this.head = new_node;
      return;
    }

    let last = this.head;
    while (last.next !== null) {
      last = last.next;
    }

    last.next = new_node;
  }

  // Delete a node by position
  deleteNode(position) {
    if (this.head === null) return;

    let temp = this.head;

    if (position === 0) {
      this.head = temp.next;
      return;
    }

    for (let i = 0; temp !== null && i < position - 1; i++) {
      temp = temp.next;
    }

    if (temp === null || temp.next === null) return;

    temp.next = temp.next.next;
  }

  // Search a node
  search(head, key) {
    let current = head;
    while (current !== null) {
      if (current.data === key) return true;
      current = current.next;
    }
    return false;
  }

  // Sort the linked list
  sortLinkedList(head) {
    if (head === null) return;

    let current = head;
    let index = null;

    while (current !== null) {
      index = current.next;

      while (index !== null) {
        if (current.data > index.data) {
          const temp = current.data;
          current.data = index.data;
          index.data = temp;
        }
        index = index.next;
      }
      current = current.next;
    }
  }

  // Print the linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Demo usage
const llist = new LinkedList();

llist.insertAtEnd(1);
llist.insertAtBeginning(2);
llist.insertAtBeginning(3);
llist.insertAtEnd(4);
llist.insertAfter(llist.head.next, 5);

console.log("Linked list:");
llist.printList();

console.log("After deleting an element:");
llist.deleteNode(3);
llist.printList();

const item_to_find = 3;
if (llist.search(llist.head, item_to_find)) {
  console.log(item_to_find + " is found");
} else {
  console.log(item_to_find + " is not found");
}

llist.sortLinkedList(llist.head);
console.log("Sorted List:");
llist.printList();
