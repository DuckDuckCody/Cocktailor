import React, { Component } from 'react';
import '../css/App.css';
import Card from './Card'

class CardList extends Component {
  render() {
    {/* Change this to be more generic, not only a ingredient list */}
    let cards = null;
    if (this.props.ingredients.length > 0) {
      cards = this.props.ingredients.map((ingredient) =>
        <Card
          ingredient = {ingredient}
          key= {ingredient.ingredientId}
          removeIngredient = {this.props.removeIngredient}
         />
      );
    } else {
      cards = (
        <div className="empty-text-container">
          <h3> {this.props.emptyTextTitle} </h3>
          <p>  {this.props.emptyTextDesc} </p>
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
