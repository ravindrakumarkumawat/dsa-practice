/**
 * Universal flatten
 * (Supports array indexing too → a.b[0].c)
 */
function flatten(obj, prefix = "", result = {}) {
  if (obj === null || typeof obj !== "object") {
    result[prefix] = obj;
    return result;
  }

  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix
      ? Array.isArray(obj)
        ? `${prefix}[${key}]`
        : `${prefix}.${key}`
      : key;

    if (value !== null && typeof value === "object") {
      flatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }

  return result;
}

const input = {
  a: { b: { c: 10 } }
};

console.log(flatten(input));
// output: { "a.b.c": 10 }

const complex = {
  user: {
    name: "Ravi",
    skills: ["JS", "React"],
    address: {
      city: "Bengaluru",
      codes: [560001, 560002]
    }
  }
};

console.log(flatten(complex));
// output: {
//   "user.name": "Ravi",
//   "user.skills[0]": "JS",
//   "user.skills[1]": "React",
//   "user.address.city": "Bengaluru",
//   "user.address.codes[0]": 560001,
//   "user.address.codes[1]": 560002
// }

function flatten1(obj, parent = "") {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = parent
      ? Array.isArray(obj)
        ? `${parent}[${key}]`
        : `${parent}.${key}`
      : key;

    if (value !== null && typeof value === "object") {
      Object.assign(acc, flatten1(value, newKey));
    } else {
      acc[newKey] = value;
    }

    return acc;
  }, {});
}
console.log(flatten1(input)); // output: { "a.b.c": 10 }
console.log(flatten1(complex));