import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Buttons from './Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Buttons />
        </p>
      </div>
    );
  }
}

export default App;
