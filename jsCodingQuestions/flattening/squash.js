/**
 * @param {Object} obj
 * @return {Object}
 */
export default function squashObject(obj) {
  function squashImpl(obj_, path, output) {
    for(const [key, value] of Object.entries(obj_)) {
      if(typeof value !== 'object' || value === null) {
        output[path.concat(key).filter(Boolean).join('.')] = value
      }
      else {
        squashImpl(value, path.concat(key), output)
      }
    }
  }
  const out = {}
  squashImpl(obj, [], out)
  return out
}




/////////// Alternative solution
function chunk(array, size = 2) {
  // Helper function that groups two adjacent items in an array into one subarray.
  const chunkedArray = [];
  while (array.length) {
    chunkedArray.push(array.splice(0, size));
  }
  return chunkedArray;
}

function traverse(object, path = []) {
  if (typeof object !== 'object' || object === null) {
    return [path.join('.'), object];
  }

  return Object.entries(object).flatMap(([key, value]) => {
    const newPath = key === '' ? [...path] : [...path, key];
    return traverse(value, newPath);
  });
}

export default function squashObject(object) {
  const flattened = traverse(object);
  return Object.fromEntries(chunk(flattened));
}
