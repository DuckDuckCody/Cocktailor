import React, { Component } from 'react';
import '../css/App.css';
import Card from './Card'

class CardList extends Component {
  render() {
    let cards = this.props.ingredients.map((ingredient) =>
      <Card
        ingredient = {ingredient}
        key= {ingredient.ingredientId}
        removeIngredient = {this.props.removeIngredient}
       />
    );

    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default CardList;
