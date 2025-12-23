export default function promiseWithResolvers() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return {
    promise,
    resolve,
    reject  
  }
}

function delayedGreeting(name) {
  const { promise, resolve, reject } = Promise.withResolvers();

  setTimeout(() => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject(new Error('Name is required.'));
    }
  }, 1000);

  return promise;
}

delayedGreeting('Alice')
  .then((message) => console.log(message)) // Output: Hello, Alice!
  .catch((error) => console.error(error));

delayedGreeting()
  .then((message) => console.log(message))
  .catch((error) => console.error(error)); // Output: Error: Name is required.