// Max heap implementation in JavaScript
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    
    return max;
  }

  sinkDown(index) {
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largestIndex = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
        largestIndex = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex === index) break;

      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
      index = largestIndex;
    }
  }

  peek() {
    return this.heap[0] || null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}