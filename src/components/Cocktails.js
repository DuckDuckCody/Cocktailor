import React, { Component } from 'react';
import CardList from './common/CardList'

const Cocktails = (props) => {
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
        cocktailClick = {props.cocktailClick}
        cardType = 'cocktail'
        ingredients = {props.ingredients}
        cardData = {props.matchedCocktails}
        keyName = "cocktailId"
        emptyDataTitle = "No cocktails have been matched yet."
        emptyDataDesc = "Add bar supplies to get matched cocktails"
      />
      {/* end of CardList */}
    </div>
  );
}

export default Cocktails;
