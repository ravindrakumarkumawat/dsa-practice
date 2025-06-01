/**
 * Insertion Sort Algorithm
 * This algorithm builds a sorted array one element at a time by repeatedly taking an element
 * from the unsorted part and inserting it into the correct position in the sorted part.
 * The time complexity is O(n^2) in the worst case, where n is the number of items being sorted.
 * The space complexity is O(1) since it only requires a constant amount of additional space.
 * We assume that the first card is already sorted then, we select an unsorted card. 
 * If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. 
 * In the same way, other unsorted cards are taken and put in their right place.
 * Applications of Insertion Sort:
 * - For educational purposes to understand sorting algorithms
 * - For small datasets where its simplicity is an advantage
 * - As a subroutine in more complex algorithms
 * - When the array is already mostly sorted, as it performs well in such cases
 * - When the cost of writing to memory is high, as it minimizes the number of writes
 * - the array is has a small number of elements
 * - there are only a few elements left to be sorted
 */
function insertionSort(array) {
  let size = array.length;

  for (let step = 1; step < size; step++) {
    let key = array[step];
    let j = step - 1;

    // Move elements that are greater than key to one position ahead
    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    // Place the key at the correct position
    array[j + 1] = key;
  }
}

// Driver code
const data = [9, 5, 1, 4, 3];
insertionSort(data);

console.log("Sorted Array in Ascending Order:");
console.log(data);
