export default function setCancellableTimeout(callback, delay, ...args) {
  const timerId = setTimeout(callback, delay, ...args)
  return () => {
    clearTimeout(timerId)
  }
}

export function setCancellableTimeout(...args) {
  const timerId = setTimeout(...args);

  return () => {
    clearTimeout(timerId);
  };
}