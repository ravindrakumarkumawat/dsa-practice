import { useState, useRef, useCallback } from 'react';

export default function useMediatedState(mediator, initialState) {
  const mediatorFn = useRef(mediator);

  const [state, setMediatedState] = useState(initialState)

  const setState = useCallback((newStateOrUpdaterFunction) => {
    const newState = newStateOrUpdaterFunction instanceof Function
      ? newStateOrUpdaterFunction(state)
      : newStateOrUpdaterFunction

      const mediator = mediatorFn.current

      if(mediator.length === 2) {
        mediator(newState, setMediatedState)
      } else {
        setMediatedState(mediator(newState))
      }
  }, [state])
  return [state, setState]
}