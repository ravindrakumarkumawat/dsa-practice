/**
 * Input:
 *  {
 *    a: { b: { c: 10 } }
 *  }
 */
 
 /**
 * Output:
 *  { "a.b.c": 10 }
 */
 
function flatteningQuery(obj, output = {}, parent = '') {
  for(let key in obj) {
    let currentKey = parent ? `${parent}.${key}` : key;
    if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      flatteningQuery(obj[key], output, currentKey)
    } else {
      output[currentKey] = obj[key]
    }
  }
  return output
}

const input = {
  a: { b: { c: 10 } }
}
const output = flatteningQuery(input)
console.log(output)