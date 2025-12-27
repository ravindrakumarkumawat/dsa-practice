// function promiseRace(iterable) {
//   return new Promise((resolve, reject) => {
//     iterable.forEach(item => {
//       Promise.resolve(item).then(resolve).catch(reject);
//     });
//   });
// }

export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }
    iterable.forEach((it) => {
      Promise.resolve(it).then(resolve, reject)
    })
  })
}