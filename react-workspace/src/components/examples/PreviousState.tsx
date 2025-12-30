import { useState } from "react";
import usePrevious from "../../hooks/usePrevious";
import CardWrapper from "../CardWrapper";
const DETAILS = {
  componentName: 'PreviousState',
  componentDescription: 'A component that demonstrates the usePrevious hook to track the previous state value.',
};
export default function PreviousState() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <p>current: {count}</p>
      <p>previous: {previousCount}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </CardWrapper>
  );
}