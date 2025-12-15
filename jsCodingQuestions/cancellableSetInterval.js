export default function setCancellableInterval(callback, delay, ...args) {
  const timerId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}

export default function setCancellableInterval(...args) {
  const timerId = setInterval(...args);

  return () => {
    clearInterval(timerId);
  };
}
