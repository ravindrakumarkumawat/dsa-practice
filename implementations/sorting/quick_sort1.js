/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function quickSort(arr) {
  function quickSortHelper(arr, start, end) {
    if(start >= end) return

    const pivot = partition(arr, start, end)
    quickSortHelper(arr, start, pivot-1)
    quickSortHelper(arr, pivot+1, end)
  }

  quickSortHelper(arr, 0, arr.length-1)
  return arr
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1

  for(let j = start; j < end; j++) {
    if(arr[j] < pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  if(arr[end] < arr[i + 1]) {
    [arr[i+1], arr[end]] = [arr[end], arr[i+1]]
  }

  return i + 1
}