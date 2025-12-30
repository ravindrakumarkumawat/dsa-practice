import useCounterMemomized from "../../hooks/useCounterMemoized";
import CardWrapper from "../CardWrapper";

const DETAILS = {
  componentName: 'CounterMemozied',
  componentDescription: 'A counter component that uses a memoized custom hook for state management.',
};

export default function CounterMemoized() {
  const { count, increment, decrement, reset, setCount } = useCounterMemomized();

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </CardWrapper>
  );
}