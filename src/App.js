import React, { Component } from 'react';
import Container from './components/Container'

const ingredients = [
  {
    "name": "Rum"
  },
  {
    "name": "Coca Cola"
  },
  {
    "name": "Lime"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container title="Bar Supplies" listData={ingredients} />
      </div>
    );
  }
}

export default App;
