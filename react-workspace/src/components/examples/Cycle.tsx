// useCycle hook that cycles through a sequence of values each time its function is called
import useCycle from '../../hooks/useCycle';
import CardWrapper from '../CardWrapper';

const DETAILS = {
  componentName: 'Cycle',
  componentDescription: 'useCycle hook that cycles through a sequence of values each time its function is called',
};

export default function Cycle() {
  const [mode, cycle] = useCycle('low', 'medium', 'high');

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <p>State: {mode}</p>
      <button onClick={cycle}>Cycle</button>
    </CardWrapper>
  );
}