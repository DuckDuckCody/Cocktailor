import _ from 'lodash';
import React from 'react';

export function formatIngredientList(ingredients, cocktailIngredients) {
  let ingredient = null;
  let formattedIngredients = [];

  //todo: try to make this just one map function

  _.forEach(cocktailIngredients, function(cocktailIngredient, index) {
    ingredient = _.find(ingredients, {
      ingredientId: cocktailIngredient.ingredientId
    })

    formattedIngredients.push(
      <li key={ingredient.ingredientId}>
        {cocktailIngredient.amount} -
        {
          ingredient.selected
            ? <b> {ingredient.name} </b>
            : <span> {ingredient.name} </span>
        }
      </li>
    )
  });

  return formattedIngredients;
}
