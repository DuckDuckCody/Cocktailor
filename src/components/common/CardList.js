import React, { Component } from 'react';
import Card from './Card'

class CardList extends Component {
  render() {
    let cards = null;
    if (this.props.cardData.length > 0) {
      cards = this.props.cardData.map((data) =>
        <Card
          cardData = {data}
          key = {data[this.props.keyName]}
          removeCard = {this.props.removeCard}
         />
      );
    } else {
      cards = (
        <div className="empty-data-container">
          <h3> {this.props.emptyDataTitle} </h3>
          <p>  {this.props.emptyDataDesc} </p>
        </div>
      );
    }

    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default CardList;
