import React, { useState } from 'react';
import useClickAnywhere from '../../hooks/useClickAnywhere';
import CardWrapper from '../CardWrapper';

const DETAILS = {
  componentName: 'ClickAnywhere',
  componentDescription: 'A component that increments a counter each time anywhere on the window is clicked using the useClickAnywhere hook.',
};

export default function ClickAnywhere() {
  const [count, setCount] = useState(0);

  useClickAnywhere(() => {
    setCount((prev) => prev + 1);
  });

  return <CardWrapper
    componentName={DETAILS.componentName}
    componentDescription={DETAILS.componentDescription}
  >
    <p>Click count: {count}</p>
  </CardWrapper>
}