// import logo from './assets/logo.svg';
import '../styles/App.css';
import Greeting from './work01.js';
import Greeting2 from './work01-2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Greeting name = "Honoka"/>
        {/* <Greeting2 /> */}
      </header>
    </div>
  );
}

export default App;
