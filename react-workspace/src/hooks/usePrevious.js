import { useState } from 'react';

export default function usePrevious(state) {
  const [current, setCurrent] = useState(state);
  const [previous, setPrevious] = useState();

  if (current !== state) {
    setPrevious(current);
    setCurrent(state);
  }

  return previous;
}