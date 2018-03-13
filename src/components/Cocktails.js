import React, { Component } from 'react';
import CardList from './common/CardList'

class Cocktails extends Component {
  render() {
    return (
      <div className="card-conatiner">
        <div className="flex-container jumbotron">
          {/* Title */}
          <span className="flex-item flex-basis-75">
            <h2> Cocktails </h2>
          </span>
          {/* end of Title */}
        </div>
        {/* CardList */}
        <CardList
          cocktailClick = {this.props.cocktailClick}
          cardType = 'cocktail'
          ingredients = {this.props.ingredients}
          selectedIngredients = {this.props.selectedIngredients}
          cardData = {this.props.matchedCocktails}
          keyName = "cocktailId"
          emptyDataTitle = "No cocktails have been matched yet."
          emptyDataDesc = "Add bar supplies to get matched cocktails"
        />
        {/* end of CardList */}
      </div>
    );
  }
}

export default Cocktails;
