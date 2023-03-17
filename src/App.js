
import React, { Component } from 'react';
import notify from './notify';

class App extends Component {
  handleClick = () => {
    notify();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
*/