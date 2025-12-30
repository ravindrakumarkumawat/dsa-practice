import { ClickAnywhere, CounterMemozied, Cycle, EffectOnce, FocusInput, PreviousState } from './components/examples';
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
    </div>
  );
}

export default App;
