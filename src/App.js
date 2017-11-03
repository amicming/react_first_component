import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h4>A below message from my First Component</h4>
        </header>
        <FirstComponent />
      </div>
    );
  }
}

export default App;
