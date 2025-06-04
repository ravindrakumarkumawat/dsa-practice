/**
 * Counting Sort Algorithm
 * This algorithm sorts an array of non-negative integers.
 * It counts the occurrences of each unique element and uses this information
 * to place the elements in their correct position in the output array.
 * Time Complexity: O(n + k), where n is the number of elements in the input array
 * and k is the range of the input (the difference between the maximum and minimum values).
 * Space Complexity: O(k), where k is the range of the input.
 * This implementation assumes that the input array contains only non-negative integers.
 * It is not suitable for sorting negative integers or floating-point numbers.
 * Counting sort is a stable sorting algorithm, meaning that it preserves the relative order of equal elements.
 * It is particularly efficient for sorting small ranges of integers.
 * Counting sort is not a comparison-based sorting algorithm, and it is not suitable for sorting large ranges of integers.
 * It is often used as a subroutine in other sorting algorithms, such as radix sort.
 * This implementation sorts the array in ascending order.
 * - there are smaller integers with multiple counts.
 * - linear complexity is the need.
 */

function countingSort(arr) {
  const size = arr.length;
  const output = new Array(size);

  // Find the maximum value
  const max = Math.max(...arr);

  // Create and initialize count array
  const count = new Array(max + 1).fill(0);

  // Store the count of each element
  for (let i = 0; i < size; i++) {
    count[arr[i]]++;
  }

  // Store the cumulative count
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = size - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Copy the sorted elements back to original array
  for (let i = 0; i < size; i++) {
    arr[i] = output[i];
  }
}

// Driver code
const data = [4, 2, 2, 8, 3, 3, 1];
console.log("Unsorted Array:");
console.log(data);

countingSort(data);

console.log("Sorted Array in Ascending Order:");
console.log(data);
