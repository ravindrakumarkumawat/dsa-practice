import { useState, useEffect, useRef } from 'react';

export default function usePrevious<T>(state: T) {
  const [current, setCurrent] = useState(state);
  const [previous, setPrevious] = useState<T>();

  if (current !== state) {
    setPrevious(current);
    setCurrent(state);
  }

  return previous;
}



export function usePreviousRef<T>(state: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
