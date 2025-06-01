/**
 * Selection Sort Algorithm
 * This algorithm sorts an array by repeatedly finding the minimum element
 * (considering ascending order) from the unsorted part and putting it at the beginning.
 * The time complexity is O(n^2) in the worst case, where n is the number of items being sorted.
 * The space complexity is O(1) since it only requires a constant amount of additional space.
 * Selection Sort Applications
 * - For educational purposes to understand sorting algorithms
 * - For small datasets where its simplicity is an advantage
 * - As a subroutine in more complex algorithms
 * - When memory write is a costly operation, as it minimizes the number of writes
 * - a small list is to be sorted
 * - cost of swapping does not matter
 * - checking of all the elements is compulsory
 * - cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n) as compared to O(n2) of bubble sort)
 * @param {*} array 
 */

function selectionSort(array) {
  let size = array.length;

  for (let step = 0; step < size - 1; step++) {
    let minIndex = step;

    for (let i = step + 1; i < size; i++) {
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
    }

    [array[step], array[minIndex]] = [array[minIndex], array[step]];
  }
}

const data = [20, 12, 10, 15, 2];
selectionSort(data);

console.log("Sorted Array in Ascending Order:");
console.log(data);