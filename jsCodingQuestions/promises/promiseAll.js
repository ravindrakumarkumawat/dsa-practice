/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});
await promiseAll([p0, p1, p2]); // [3, 42, 'foo']

// Rejection example.
const p3 = Promise.resolve(30);
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p3, p4]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}

function custPromiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completed = 0;

    iterable.forEach((item, i) => {
      Promise.resolve(item)
        .then(val => {
          result[i] = val;
          completed++;
          if (completed === iterable.length) resolve(result);
        })
        .catch(reject);
    });
  });
}

function customPromiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let output = [];
    let completed = 0;

    for (let i = 0; i < iterable.length; i++) {
      const current = iterable[i];

      // Wrap manually: If non-promise, treat as resolved
      if (!current || typeof current.then !== "function") {
        output[i] = current;
        if (++completed === iterable.length) resolve(output);
        continue;
      }

      current.then(val => {
        output[i] = val;
        if (++completed === iterable.length) resolve(output);
      }).catch(reject);
    }
  });
}

// const p0 = Promise.resolve(3);
// const p1 = 32;
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve('Success!');
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     reject('Reject!');
//   }, 1000);
// });

async function fetch() {
  try {
    const data = await custPromiseAll([p0, p1, p2])
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}

fetch()

