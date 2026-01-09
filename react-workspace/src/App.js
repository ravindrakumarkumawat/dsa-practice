import { ClickAnywhere, CounterMemozied, Cycle, EffectOnce, FocusInput, PreviousState, StateWithReset } from './components/examples';
import { MortgageCalculator } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hooks</h2>
      <div className="hooks-examples">
        <ClickAnywhere /> 
        <CounterMemozied />
        <Cycle />
        <EffectOnce />
        <FocusInput />
        <PreviousState />
        <StateWithReset />
      </div>
      
      <h2>User interface coding</h2>
      <div className="user-interface-coding-examples">
        <MortgageCalculator />
      </div>
    </div>
  );
}

export default App;
