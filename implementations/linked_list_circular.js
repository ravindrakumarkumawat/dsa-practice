class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.last = null;
  }

  addToEmpty(data) {
    if (this.last !== null) return this.last;

    const newNode = new Node(data);
    newNode.next = newNode; // point to itself
    this.last = newNode;

    return this.last;
  }

  addFront(data) {
    if (this.last === null) {
      return this.addToEmpty(data);
    }

    const newNode = new Node(data);
    newNode.next = this.last.next;
    this.last.next = newNode;

    return this.last;
  }

  addEnd(data) {
    if (this.last === null) {
      return this.addToEmpty(data);
    }

    const newNode = new Node(data);
    newNode.next = this.last.next;
    this.last.next = newNode;
    this.last = newNode;

    return this.last;
  }

  addAfter(data, item) {
    if (this.last === null) return null;

    let p = this.last.next;
    do {
      if (p.data === item) {
        const newNode = new Node(data);
        newNode.next = p.next;
        p.next = newNode;

        if (p === this.last) {
          this.last = newNode;
        }

        return this.last;
      }
      p = p.next;
    } while (p !== this.last.next);

    console.log(item + " is not present in the list");
    return this.last;
  }

  deleteNode(key) {
    if (this.last === null) return null;

    // Only one node in the list
    if (this.last.data === key && this.last.next === this.last) {
      this.last = null;
      return this.last;
    }

    let temp = this.last;

    // If last node is to be deleted
    if (this.last.data === key) {
      while (temp.next !== this.last) {
        temp = temp.next;
      }
      temp.next = this.last.next;
      this.last = temp.next;
      return this.last;
    }

    // Find the node before the node to delete
    while (temp.next !== this.last && temp.next.data !== key) {
      temp = temp.next;
    }

    // Node found
    if (temp.next.data === key) {
      temp.next = temp.next.next;
    }

    return this.last;
  }

  traverse() {
    if (this.last === null) {
      console.log("List is empty.");
      return;
    }

    let p = this.last.next;
    const result = [];

    do {
      result.push(p.data);
      p = p.next;
    } while (p !== this.last.next);

    console.log(result.join(" "));
  }

  deleteNodeByValue(key) {
    if (this.last === null) return null;

    let current = this.last.next;
    let prev = this.last;

    // If only one node in the list and it is to be deleted
    if (current === this.last && current.data === key) {
      this.last = null;
      return this.last;
    }

    // If the first node is to be deleted
    if (current.data === key) {
      prev.next = current.next;
      this.last.next = current.next;
      return this.last;
    }

    // Traverse the list to find the node to delete
    while (current !== this.last) {
      if (current.data === key) {
        prev.next = current.next;
        return this.last;
      }
      prev = current;
      current = current.next;
    }

    // If last node is to be deleted
    if (this.last.data === key) {
      prev.next = this.last.next;
      this.last = prev;
      return this.last;
    }

    console.log(`Node with value ${key} not found.`);
    return this.last;
  }

}

// 🧪 Test
const cll = new CircularLinkedList();

cll.addToEmpty(6);
cll.addEnd(8);
cll.addFront(2);
cll.addAfter(10, 2);

console.log("Before deletion:");
cll.traverse();

cll.deleteNode(8);

console.log("After deletion:");
cll.traverse();
