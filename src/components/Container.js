import React, { Component } from 'react';
import Title from './Title';
import '../css/App.css';
import CardList from './CardList';

class Container extends Component {
  render() {
    return (
      <div className="half-width">
        <Title title={this.props.title} />
        <CardList listData={this.props.listData} />
      </div>
    );
  }
}

export default Container;
