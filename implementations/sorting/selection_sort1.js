/**!SECTION
 * Here is the basic idea behind selection sort:
    1. Find the minimum element in the array.
    2. Swap it with the element at the first position.
    3. Find the second minimum element in the array.
    4. Swap it with the element at the second position.
    5. Continue this process until the entire array is sorted.
 */

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  let swapIndex = 0
  let startIndex = 1
  let endIndex = arr.length

  while(swapIndex < endIndex) {
    let findMin = arr[swapIndex]
    let findMinIndex = swapIndex
    for(let i = startIndex; i < endIndex; i++) {
      if(findMin > arr[i]) {
        findMin = arr[i]
        findMinIndex = i
      }
    }

    const temp = arr[swapIndex]
    arr[swapIndex] = arr[findMinIndex]
    arr[findMinIndex] = temp

    swapIndex++
    startIndex++
  }

  return arr
}

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

