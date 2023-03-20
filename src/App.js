import logo from './logo.svg';
import './App.css';

const demoObj = {
  playerName: 'AB de Villiers',
  age: 43,
};

const elementStyle = {
  color: 'aquamarine',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        {/*  using className  */}
        <div className="container">
          <h4>Hello ClassName</h4>
          {/* now we add style with className */}
        </div>

        {/* we can run any valid JS inside block like template string*/}
        <div className="add">
          {/* inside the curly braces we can write js code */}
          <p>{100 + 30}</p>
          {/* accessing an object property also setting color from another object */}
          <p style={elementStyle}>
            Player Name : {demoObj.playerName}, and {demoObj.age} years old
          </p>
          {/* inline style */}
          <p style={{ color: 'slateBlue', backgroundColor: 'aquamarine' }}>
            Player Name : {demoObj.playerName}, and {demoObj.age} years old
          </p>
        </div>

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
      </header>
    </div>
  );
}

export default App;
