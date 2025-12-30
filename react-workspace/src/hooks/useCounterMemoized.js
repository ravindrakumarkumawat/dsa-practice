/**
 * @param number initialValue
 * @return Object
 */
import { useState, useCallback } from 'react';

export default function useCounterMemomized(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((prevCount) => prevCount + 1), [])

  const decrement = useCallback(() => setCount((prevCount) => prevCount - 1), [])

  const reset = useCallback(() => setCount(initialValue), [])

  return {
    count,
    increment,
    decrement,
    reset,
    setCount
  }
}

// Wrapped the updater functions with useCallback to ensure they are memoized and 
// do not cause unnecessary re-renders when passed as dependencies to other hooks or components.