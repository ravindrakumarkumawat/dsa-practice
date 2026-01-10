import { ClickAnywhere, CounterMemozied, Cycle, EffectOnce, FocusInput, PreviousState, StateWithReset } from './components/examples';
import { MortgageCalculator } from './components';
import './App.css';
import Tweets from './components/Tweets';

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
        <Tweets />
      </div>
    </div>
  );
}

export default App;
