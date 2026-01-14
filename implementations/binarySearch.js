export default function binarySearch(arr, target) {
  let start = 0
  let end = arr.length-1

  while(start <= end){
    const mid = start + Math.floor((end - start) / 2)

    if(arr[mid] === target) return mid
    else if (target < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1 
    }
  }

  return -1
}

// TC: O(log n)
// SC: O(1)

/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < arr[mid]) {
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target Target integer to search within the array
 * @return {number} Index of target element in the array, or -1 if not found
 */
export default function binarySearch(arr, target) {
  return binarySearchImpl(arr, target, 0, arr.length - 1);
}

function binarySearchImpl(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (target < arr[mid]) {
    return binarySearchImpl(arr, target, left, mid - 1);
  }

  if (target > arr[mid]) {
    return binarySearchImpl(arr, target, mid + 1, right);
  }
  return mid;
}

