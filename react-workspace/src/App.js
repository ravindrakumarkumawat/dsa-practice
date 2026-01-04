import { ClickAnywhere, CounterMemozied, Cycle, EffectOnce, FocusInput, PreviousState, StateWithReset } from './components/examples';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClickAnywhere /> 
      <CounterMemozied />
      <Cycle />
      <EffectOnce />
      <FocusInput />
      <PreviousState />
      <StateWithReset />
    </div>
  );
}

export default App;
