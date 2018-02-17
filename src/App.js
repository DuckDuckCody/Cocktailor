import React, { Component } from 'react';
import BarSupplies from './components/BarSupplies'
import './css/Flex.css';
import './css/App.css';
import '../node_modules/font-awesome/css/font-awesome.css';

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
