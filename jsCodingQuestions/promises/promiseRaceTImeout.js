/**
 * create promiseTimeout(promise, ms) using Promise.race
 */

function promiseTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject("Timeout"), ms))
  ]);
}