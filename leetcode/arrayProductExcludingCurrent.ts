export default function arrayProductExcludingCurrent(
  numbers: number[],
): number[] {
  const length = numbers.length;

  const result: number[] = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    result[i] = numbers[i - 1] * result[i - 1];
  }

  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= numbers[i];
  }

  for (let i = 0; i < length; i++) {
    if (result[i] === -0) {
      result[i] = 0;
    }
  }

  return result;
}
// TC: O(n)
// SC: O(1) excluding output array

export function arrayProductExcludingCurrentPrefixAndSuffix(
  numbers: number[],
): number[] {
  const n = numbers.length;

  const prefix: number[] = new Array(n).fill(1);
  const suffix: number[] = new Array(n).fill(1);
  const result: number[] = new Array(n).fill(1);
  
  prefix[0] = 1;
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * numbers[i - 1];
  }
  
  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * numbers[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  for (let i = 0; i < n; i++) {
    if (result[i] === -0) {
      result[i] = 0;
    }
  }

  return result;
}
// TC: O(n)
// SC: O(n)