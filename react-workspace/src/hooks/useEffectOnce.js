import { useEffect, useRef } from 'react';
export default function useEffectOnce(effect) {
  const ref = useRef(false)

  useEffect(() => {
    if(ref.current) return

    ref.current = true
    return effect();
  }, [])
}