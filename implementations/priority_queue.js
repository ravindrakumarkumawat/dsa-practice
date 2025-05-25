class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Heapify subtree rooted at index i
  heapify(i) {
    const size = this.heap.length;
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < size && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.heapify(largest);
    }
  }

  // Insert a new number into heap
  insert(newNum) {
    this.heap.push(newNum);
    let i = this.heap.length - 1;

    // Bubble up
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] < this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else {
        break;
      }
    }
  }

  // Bulk insert
  bulkInsert(arr) {
    arr.forEach(num => this.insert(num));
  }

  // Delete specific value from heap
  deleteNode(num) {
    const index = this.heap.indexOf(num);
    if (index === -1) return;

    const last = this.heap.pop();
    if (index < this.heap.length) {
      this.heap[index] = last;
      this.heapify(index);
    }
  }

  // Get maximum (root) element
  getMax() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Extract maximum (remove and return)
  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapify(0);
    }
    return max;
  }

  // Replace value at index
  replaceAt(index, newValue) {
    if (index < 0 || index >= this.heap.length) return;
    this.heap[index] = newValue;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  // Build heap from array
  buildHeap(arr) {
    this.heap = arr.slice(); // clone
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  // Get k-th largest element (1-based)
  getKthLargest(k) {
    if (k < 1 || k > this.heap.length) {
      throw new Error("Invalid value of k");
    }

    const temp = [[this.heap[0], 0]];
    const visited = new Set([0]);
    let count = 0;

    while (temp.length > 0) {
      temp.sort((a, b) => b[0] - a[0]); // sort for max
      const [val, index] = temp.shift();
      count++;
      if (count === k) return val;

      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < this.heap.length && !visited.has(left)) {
        temp.push([this.heap[left], left]);
        visited.add(left);
      }

      if (right < this.heap.length && !visited.has(right)) {
        temp.push([this.heap[right], right]);
        visited.add(right);
      }
    }

    return null;
  }

  // Print heap array
  printHeap() {
    console.log(this.heap.join(" "));
  }

  // Search value
  search(val) {
    return this.heap.indexOf(val) !== -1;
  }

  // Get heap size
  size() {
    return this.heap.length;
  }
}
