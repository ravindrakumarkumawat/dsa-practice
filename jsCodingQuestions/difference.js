export default function difference(array, values) {
  const result = [];

  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Check if the value is in the values set.
    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}

// Example usage:
const arr = [1, 2, , 4, 5, undefined];
const vals = [2, 5, undefined];
const diff = difference(arr, vals);
console.log(diff); // Output: [1, 4]

