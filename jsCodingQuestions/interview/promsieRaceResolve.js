/**
 * Write Promise.race but ignore rejections. Only resolve wins.
 */
function raceResolve(promises) {
  return new Promise(resolve => {
    promises.forEach(p => Promise.resolve(p).then(resolve));
  });
}