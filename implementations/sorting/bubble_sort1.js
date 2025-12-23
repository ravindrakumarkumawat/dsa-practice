/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function bubbleSort(arr) {
  let lastIndex = arr.length - 1
  let startIndex = 0
  
  while(startIndex < lastIndex) {
    for(let i = 0; i < lastIndex; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }

    lastIndex--
  }

  return arr
}

export default function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
