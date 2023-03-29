
// 컴포넌트를 코드 스플리팅해보기
import React, { Component } from 'react';

class App extends Component {
  state = {
    SplitMe: null
  };
  handleClick = () => {
    import('./SplitMe').then(({ default: SplitMe }) => {
      this.setState({
        SplitMe
      });
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button> 
        {SplitMe && <SplitMe />}
      </div>
    );
  }
}

export default App;


/*
// 함수를 코드스플러팅 해보기
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./notify').then(({ default: notify }) => {
      notify();
    });
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
*/

/*
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
*/

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