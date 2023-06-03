import Test from './component/Test';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Let's get started </h2>
        <Test content={'Hello'}/>
      </header>
    </div>
  );
}

export default App;
