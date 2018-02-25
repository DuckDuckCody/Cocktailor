import React, { Component } from 'react';
import _ from 'lodash'

class CocktailCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ingredientNames = this.props.cardData.ingredients.map((ingredient) =>
      _.find(this.props.ingredients, {ingredientId: ingredient}).name
    )

    return (
      <div className="card cocktail-card flex-container">
        <div className="flex-item flex-basis-50 card-text">
          <h3> {this.props.cardData.name} </h3>
          <p><i> {this.props.cardData.desc} </i></p>
          <p><i> {ingredientNames.join(', ' )} </i></p>
        </div>
        <div className="flex-item flex-basis-50">
          <img className=" picture-container-small"
            src={this.props.cardData.imgUrl}
            alt={this.props.cardData.name}
          />
        </div>
      </div>

    );
  }
}

export default CocktailCard;
