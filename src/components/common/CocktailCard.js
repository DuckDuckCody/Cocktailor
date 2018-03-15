import React from 'react';
import {formatIngredientList} from '../../helpers/formatIngredients'

const CocktailCard = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.cocktailClick(props.cardData);
  }

  return (
    <div className="card cocktail-card flex-container center-text">
      <div className="flex-item flex-basis-50">
        <h3> {props.cardData.name} </h3>
        <ul>
          {
            formatIngredientList(
              props.ingredients,
              props.selectedIngredients,
              props.cardData.ingredients
            )
          }
        </ul>
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
