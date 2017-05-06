import React, { Component } from 'react';
import Topic from './components/Topics';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Echoless</h2>
        </div>
        <div className="topics">
          <Topic topic="Trump" />
          <Topic topic="Trump" />
          <Topic topic="Trump" />
          <Topic topic="Trump" />
          <Topic topic="Trump" />
        </div>
      </div>
    );
  }
}

export default App;
