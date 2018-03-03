import React, { Component } from 'react';
import {formatIngredientNames} from '../../helpers/formatIngredientNames'

const CocktailCard = (props) => {

  let ingredientNames = formatIngredientNames(
    props.ingredients,
    props.selectedIngredients,
    props.cardData.ingredients
  )

  return (
    <div className="card cocktail-card flex-container">
      <div className="flex-item flex-basis-50 card-text">
        <h3> {props.cardData.name} </h3>
        <p><i> {props.cardData.desc} </i></p>
        <p>{ingredientNames}</p>
      </div>
      <div className="flex-item flex-basis-50">
        <img className=" picture-container-small"
          src={props.cardData.imgUrl}
          alt={props.cardData.name}
        />
      </div>
    </div>
  );
};

export default CocktailCard;
