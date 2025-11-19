function unflatten(flatObj) {
  return Object.entries(flatObj).reduce((result, [path, value]) => {
    const keys = path
      .replace(/\]/g, "")      // remove ]
      .split(/\.|\[/);         // split on . or [

    keys.reduce((acc, key, index) => {
      const isLast = index === keys.length - 1;

      if (isLast) {
        acc[key] = value;      // assign final value
      } else {
        // decide object or array for next level
        if (!(key in acc)) {
          acc[key] = isNaN(keys[index + 1]) ? {} : [];
        }
      }

      return acc[key];
    }, result);

    return result;
  }, {});
}

const flat = {
  "a.b.c": 10,
  "user.name": "Ravi",
  "skills[0]": "JS",
  "skills[1]": "React",
  "address.codes[0]": 560001,
  "address.codes[1]": 560002
};

console.log(JSON.stringify(unflatten(flat), null, 2));
// output:
// {
//   "a": {
//     "b": {
//       "c": 10
//     }
//   },
//   "user": {
//     "name": "Ravi"
//   },
//   "skills": [
//     "JS",
//     "React"
//   ],
//   "address": {
//     "codes": [
//       560001,
//       560002
//     ]
//   }
// }

function unflatten1(flatObj) {
  const result = {};

  for (const path in flatObj) {
    const value = flatObj[path];

    // Convert "a.b[0].c" → ["a","b","0","c"]
    const keys = path
      .replace(/\]/g, "")
      .split(/\.|\[/);

    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const isLast = i === keys.length - 1;

      if (isLast) {
        // final assignment
        current[key] = value;
      } else {
        // decide between {} or []
        if (!(key in current)) {
          const nextKey = keys[i + 1];
          current[key] = isNaN(nextKey) ? {} : [];
        }
        current = current[key];
      }
    }
  }

  return result;
}


function unflatten2(flatObj) {
  const result = {};

  for (const path in flatObj) {
    const value = flatObj[path];

    // Parse "a.b[0].c" → ["a","b","0","c"] manually
    const keys = [];
    let currentKey = "";

    for (let char of path) {
      if (char === ".") {
        // dot → push key
        if (currentKey.length > 0) {
          keys.push(currentKey);
          currentKey = "";
        }
      } else if (char === "[") {
        // start array index
        if (currentKey.length > 0) {
          keys.push(currentKey);
          currentKey = "";
        }
      } else if (char === "]") {
        // end array index → push
        if (currentKey.length > 0) {
          keys.push(currentKey);
          currentKey = "";
        }
      } else {
        // accumulate characters
        currentKey += char;
      }
    }

    // last part
    if (currentKey.length > 0) keys.push(currentKey);

    // Build structure
    let curr = result;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const isLast = i === keys.length - 1;

      if (isLast) {
        curr[key] = value;
      } else {
        const nextKey = keys[i + 1];
        const shouldBeArray = !isNaN(Number(nextKey));

        if (!(key in curr)) {
          curr[key] = shouldBeArray ? [] : {};
        }

        curr = curr[key];
      }
    }
  }

  return result;
}

// with recursion
function unflatten3(flatObj) {
  function helper(keys, value) {
    if (keys.length === 0) return value;

    const key = keys[0];
    const isArrayIndex = !isNaN(Number(keys[1]));

    const nested = helper(keys.slice(1), value);

    if (isArrayIndex) {
      const arr = [];
      arr[key] = nested;
      return arr;
    } else {
      return { [key]: nested };
    }
  }

  const result = {};

  for (const path in flatObj) {
    const value = flatObj[path];

    const keys = path
      .replace(/\]/g, "")
      .split(/\.|\[/);

    const nestedObj = helper(keys, value);

    // Merge nestedObj into result
    let curr = result;
    let temp = nestedObj;

    for (const key in temp) {
      if (!(key in curr)) {
        curr[key] = temp[key];
      } else {
        curr = curr[key];
        temp = temp[key];
      }
    }
  }

  return result;
}
