/**
 * Bubble Sort Algorithm
 * This algorithm sorts an array by repeatedly stepping through the list,
 * comparing adjacent elements and swapping them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 * The time complexity is O(n^2) in the worst case, where n is the number of items being sorted.
 * The space complexity is O(1) since it only requires a constant amount of additional space.
 * Bubble Sort Applications
 * - For educational purposes to understand sorting algorithms
 * - For small datasets where its simplicity is an advantage
 * - As a subroutine in more complex algorithms
 * - complexity does not matter
 * - short and simple code is preferred
 * @param {*} array 
 */

// Perform the bubble sort
function bubbleSort(array) {
  let size = array.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swapping occurs if elements are not in the intended order
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
       [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

// Driver code
let data = [-2, 45, 0, 11, -9];

bubbleSort(data);

console.log("Sorted Array in Ascending Order:");
console.log(data);

function bubbleSortOptimize(array) {
  let size = array.length;

  // Loop to access each array element
  for (let i = 0; i < size - 1; i++) {
    let swapped = false;

    for (let j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
}

// Driver code
let data1 = [-2, 45, 0, 11, -9];

// Call the sorting function
bubbleSortOptimize(data1);

console.log("Sorted Array in Ascending Order:");
console.log(data1);
