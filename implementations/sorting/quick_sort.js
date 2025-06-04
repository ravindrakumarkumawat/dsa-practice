/**
 * Quick Sort Algorithm
 * This algorithm sorts an array by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
 * The time complexity is O(n log n) on average, but can degrade to O(n^2) in the worst case (e.g., when the smallest or largest element is always chosen as the pivot).
 * The space complexity is O(log n) due to the recursive stack space.
 * Quick Sort is not a stable sorting algorithm, meaning that it does not maintain the relative order of equal elements.
 * It is particularly useful for large datasets and is often faster than other O(n log n) algorithms like Merge Sort due to its in-place sorting nature.
 * Applications of Quick Sort:
 * - In-memory sorting of large datasets
 * - When average-case performance is more important than worst-case performance
 * - In applications where space is a constraint, as it sorts in place
 * - In scenarios where the data is already partially sorted, as it can take advantage of that
 * - In applications that require a fast, in-place sort, such as in databases or real-time systems
 * - In scenarios where the data is small to medium-sized, as it performs well in practice
 * -- the programming language is good for recursion
 * -- time complexity matters
 * -- space complexity matters
 * @param {*} arr 
 * @param {*} low 
 * @param {*} high 
 * @returns 
 */

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap using destructuring
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);   // Left side
    quickSort(arr, pi + 1, high);  // Right side
  }
}

// Driver code
const data = [8, 7, 2, 1, 0, 9, 6];
console.log("Unsorted Array:");
console.log(data);

quickSort(data, 0, data.length - 1);

console.log("Sorted Array in Ascending Order:");
console.log(data);
