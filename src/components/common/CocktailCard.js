import React from 'react';
import {formatIngredientNames} from '../../helpers/formatIngredientNames'

const CocktailCard = (props) => {

  let ingredientNames = formatIngredientNames(
    props.ingredients,
    props.selectedIngredients,
    props.cardData.ingredients
  )

  function handleClick(e) {
    e.preventDefault();
    props.cocktailClick(props.cardData);
  }

  return (
    <div className="card cocktail-card flex-container center-text">
      <div className="flex-item flex-basis-50">
        <h3> {props.cardData.name} </h3>
        <p>{ingredientNames}</p>
        <button type="button" onClick={handleClick}>
          View Cocktail
        </button>
      </div>
      <div className="flex-item flex-basis-50">
        <img className="picture-container-small"
          src={props.cardData.imgUrl}
          alt={props.cardData.name}
        />
      </div>
    </div>
  );
};

export default CocktailCard;
