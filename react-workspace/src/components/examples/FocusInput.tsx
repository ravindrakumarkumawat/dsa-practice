import useFocus from "../../hooks/useFocus";
import CardWrapper from "../CardWrapper";

const DETAILS = {
  componentName: 'FocusInput',
  componentDescription: 'A component that uses the useFocus hook to focus an input field when a button is clicked.',
};
export default function Component() {
  const [ref, focus] = useFocus();

  return (
    <CardWrapper
      componentName={DETAILS.componentName}
      componentDescription={DETAILS.componentDescription}
    >
      <input ref={ref} type="text" />
      <button onClick={() => typeof focus === 'function' && focus()}>Focus input</button>
    </CardWrapper>
  );
}
