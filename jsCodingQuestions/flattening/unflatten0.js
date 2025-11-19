/**
 * Input:
 * {
 *  "user.name.first": "John",
 *  "user.name.last": "Doe",
 *  "user.address.city": "NYC"
 * }
 */
 
 /**
 * Output:
 *  {
 *    user: {
 *      name: { first: "John", last: "Doe" },
 *      address: { city: "NYC" }
 *    }
 *  }
 */

 function unflatten(obj) {
  const result = {}
  
  for (let path in obj) {
    const keys = path.split('.');
    let curr = result
    for(let i = 0; i < keys.length; i++) {
      if(curr.hasOwnProperty(keys[i])) {
        curr = curr[keys[i]]
      } else {
        if (i+1 === keys.length) {
          curr[keys[i]] = obj[path]
        } else {
          curr[keys[i]] = {}
          curr = curr[keys[i]]
        }
      }
    }
  }
  return result
}

const input = {
  "user.name.first": "John",
  "user.name.last": "Doe",
  "user.address.city": "NYC"
}
const output = unflatten(input)
console.log(output)


function unflatten0(obj) {
  const result = {};

  for (const key in obj) {
    const path = key.split(".");
    let curr = result;

    path.forEach((k, idx) => {
      if (idx === path.length - 1) {
        curr[k] = obj[key];
      } else {
        curr[k] ??= {};
        curr = curr[k];
      }
    });
  }

  return result;
}