import { useCallback, useRef } from 'react';

export default function useFocus() {
  const ref = useRef(null);

  const focus = useCallback(() => {
    ref.current?.focus();
  }, [])

  return [ref, focus]
}