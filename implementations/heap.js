class MaxHeap {
  constructor() {
    this.heap = [];
  }

  heapify(i) {
    let size = this.heap.length;
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < size && this.heap[l] > this.heap[largest]) {
      largest = l;
    }

    if (r < size && this.heap[r] > this.heap[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.heapify(largest);
    }
  }

  insert(newNum) {
    this.heap.push(newNum);
    let size = this.heap.length;
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  deleteNode(num) {
    const size = this.heap.length;
    let i;
    for (i = 0; i < size; i++) {
      if (this.heap[i] === num) break;
    }

    if (i === size) return; // Element not found

    [this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];
    this.heap.pop();

    for (let j = Math.floor(this.heap.length / 2) - 1; j >= 0; j--) {
      this.heapify(j);
    }
  }

  printHeap() {
    console.log(this.heap.join(' '));
  }
}

// Example usage:
const h = new MaxHeap();

h.insert(3);
h.insert(4);
h.insert(9);
h.insert(5);
h.insert(2);

console.log("Max-Heap array:");
h.printHeap();

h.deleteNode(4);
console.log("After deleting an element:");
h.printHeap();
