import React, { Component } from 'react';
import BarSupplies from './components/BarSupplies'

class App extends Component {
  render() {
    return (
      <div className="App flex-container">
        <div className="flex-item flex-basis-50">
            <BarSupplies />
        </div>
        <div className="flex-item flex-basis-50">

        </div>
      </div>
    );
  }
}

export default App;
