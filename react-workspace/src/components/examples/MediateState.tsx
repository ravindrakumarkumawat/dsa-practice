import useMediatedState from "../../hooks/useMediateState";
import CardWrapper from "../CardWrapper";

const DETAILS = {
  componentName: 'MediatedState',
  componentDescription: 'A component that demonstrates the useMediatedState hook to manage state with a mediator function that replaces multiple spaces with a single space.',
};
const replaceMultipleSpaces = (s) => s.replace(/[\s]+/g, ' ');

export default function MediatedState() {
  const [state, setState] = useMediatedState(replaceMultipleSpaces, '');

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <div>You will not be able to enter more than one space</div>
      <input
        type="text"
        min="0"
        max="10"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </CardWrapper>
  );
}
