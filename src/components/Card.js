import React, { Component } from 'react';
import '../css/App.css';
import FontAwesome from 'font-awesome';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.cardData.name}</p>
      </div>

    );
  }
}

export default Card;
