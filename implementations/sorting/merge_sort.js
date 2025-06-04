/**
 * Merge Sort Implementation
 * This algorithm divides the array into halves, sorts each half, and then merges them back together.
 * The time complexity is O(n log n) in the worst case, where n is the number of items being sorted.
 * The space complexity is O(n) since it requires additional space for the temporary arrays used during merging.
 * Merge Sort is a stable sorting algorithm, meaning that it maintains the relative order of equal elements.
 * It is particularly useful for large datasets and is often used in external sorting algorithms.
 * Applications of Merge Sort:
 * - For large datasets where its O(n log n) time complexity is advantageous
 * - In external sorting algorithms where data cannot fit into memory
 * - When a stable sort is required, as it maintains the order of equal elements
 * - In parallel processing, as it can be easily divided into subproblems
 * - When the dataset is too large to fit into memory, as it can be implemented using external sorting techniques
 * - When the data is already partially sorted, as it can take advantage of that
 * Merge Sort Applications
 * - Inversion count problem
 * - External sorting
 * - E-commerce applications
 * @param {*} arr 
 * @returns 
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Merge the two arrays
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concat remaining elements (only one of these will have elements)
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Driver code
const arr = [6, 5, 12, 10, 9, 1];
const sorted = mergeSort(arr);

console.log("Sorted array:");
console.log(sorted.join(" "));
