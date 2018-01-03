import React, { Component } from 'react';
import '../css/App.css';
import Card from './Card'

class CardList extends Component {
  render() {
    const cardsData = this.props.listData;
    const cards = cardsData.map((cardData) =>
      <Card cardData = {cardData} />
    );
    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default CardList;
