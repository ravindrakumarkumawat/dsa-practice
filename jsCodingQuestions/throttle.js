export default function throttle(func, wait) {
  let waiting = false

  return function (...args) {
    if (!waiting) {
      func.apply(this, args)
      waiting = true

      setTimeout(() => {
        waiting = false
      }, wait)
    }
  }
}

export default function customThrottle(func, wait) {
  let lastCallTime = 0

  return function (...args) {
    const now = Date.now()

    if (now - lastCallTime >= wait) {
      lastCallTime = now
      func.apply(this, args)
    }
  }
}