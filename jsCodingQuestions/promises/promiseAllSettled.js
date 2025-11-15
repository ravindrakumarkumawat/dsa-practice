function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const result = [];
    let completed = 0;

    iterable.forEach((item, i) => {
      Promise.resolve(item)
        .then(value => {
          result[i] = { status: "fulfilled", value };
        })
        .catch(reason => {
          result[i] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === iterable.length) resolve(result);
        });
    });
  });
}