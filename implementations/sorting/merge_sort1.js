/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function recursiveMergeSort(arr) {
  function mergeSortHelper (arr) {
    if(arr.length <= 1) {
      return [...arr]
    }

    const half = Math.floor(arr.length / 2)
    const left = mergeSortHelper(arr.slice(0, half))
    const right = mergeSortHelper(arr.slice(half))

    return merge(left, right)
  }

  return mergeSortHelper(arr)
}

function merge (left, right) {
  let result = []
  let startLeft = 0
  let startRight = 0

  while(startLeft < left.length && startRight < right.length) {
    if(left[startLeft] < right[startRight]) {
      result.push(left[startLeft])
      startLeft++
    } else {
      result.push(right[startRight])
      startRight++
    }
  }

  while(startLeft < left.length) {
    result.push(left[startLeft])
    startLeft++
  }

  while(startRight < right.length) {
    result.push(right[startRight])
    startRight++
  }

  return result
}

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function mergeSort(arr) {
  // Return if array only has 0 or 1 elements (base case).
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two.
  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  // Merge sort each half recursively.
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge sorted halves.
  return merge(sortedLeft, sortedRight);
}

/**
 * Merges two sorted arrays of elements into one.
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @return {Array<number>}
 */
function merge(left, right) {
  // Create an empty array to store the merged result.
  const mergedResult = [];

  let l = 0;
  let r = 0;
  // Repeatedly compare smallest element from each half
  // and append it to the merged result.
  // When one half runs out of elements,
  // append all the elements of the remaining half to the merged array
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      mergedResult.push(left[l]);
      l++;
    } else {
      mergedResult.push(right[r]);
      r++;
    }
  }

  // Append any remaining elements from each sides.
  mergedResult.push(...left.slice(l), ...right.slice(r));
  return mergedResult;
}
