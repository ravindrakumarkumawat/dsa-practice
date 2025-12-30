import React from 'react'
import useEffectOnce from '../../hooks/useEffectOnce';
import CardWrapper from '../CardWrapper';
const DETAILS = {
  componentName: 'EffectOnce',
  componentDescription: 'A component that demonstrates the useEffectOnce hook to run an effect only once on mount and clean up on unmount.',
};
const EffectOnce = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount');

    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <p>Check the console for effect and cleanup logs.</p>
    </CardWrapper>
  )
}

export default EffectOnce
