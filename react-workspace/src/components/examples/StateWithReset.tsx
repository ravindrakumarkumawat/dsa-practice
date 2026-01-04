import useStateWithReset from "../../hooks/useStateWithReset";
import CardWrapper from "../CardWrapper";
const DETAILS = {
  componentName: 'StateWithReset',
  componentDescription: 'A component that demonstrates the useStateWithReset hook to manage state with a reset functionality.',
};
export default function StateWithReset() {
  const [value, setValue, resetValue] = useStateWithReset(10);

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <div>Value: {value}</div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={resetValue}>reset</button>
    </CardWrapper>
  );
}
