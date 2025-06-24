/**
 * Currying is a useful technique used in JavaScript applications.
 * Please implement a curry() function, which accepts a function and return a curried one.
 * Here is an example
    const join = (a, b, c) => {
      return `${a}_${b}_${c}`
    }
    const curriedJoin = curry(join)
    curriedJoin(1, 2, 3) // '1_2_3'
    curriedJoin(1)(2, 3) // '1_2_3'
    curriedJoin(1, 2)(3) // '1_2_3'
 */
// currying is the technique of translating a function that takes multiple arguments 
// into a sequence of families of functions, each taking a single argument.

function curry(fn) {
  return function curried(...args){
    if(args.length >= fn.length) {
      return fn(...args)
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs)
    }
  }
}

//Example usage:
const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}
const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'

/**
 * https://javascript.info/currying-partials
 * https://lodash.com/docs/4.17.15#curry
 */