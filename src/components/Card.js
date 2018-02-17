import React, { Component } from 'react';
import '../css/App.css';
import '../css/Flex.css';

class Card extends Component {
  render() {
    return (
      <div className="card flex-container">
        <div className="flex-item flex-basis-50 card-text">
          <h3> {this.props.ingredient.label} </h3>
          <p><i> {this.props.ingredient.desc} </i></p>
          <button
            type="button"
            onClick={(e) => this.props.removeIngredient(e, this.props.ingredient.ingredientId)}>
            Remove
          </button>
        </div>
        <div className="flex-item flex-basis-50">
          <img className=" picture-container-small"
            src={this.props.ingredient.imgUrl}
            alt={this.props.ingredient.name}
          />
        </div>
      </div>

    );
  }
}

export default Card;
