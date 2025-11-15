// Resolves when any promise resolves.
// Rejects only when all promises reject.

function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let failed = 0;

    iterable.forEach((item, i) => {
      Promise.resolve(item)
        .then(resolve)
        .catch(err => {
          errors[i] = err;
          failed++;
          if (failed === iterable.length) {
            reject(new AggregateError(errors, "All promises rejected"));
          }
        });
    });
  });
}