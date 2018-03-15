import _ from 'lodash';
import React from 'react';

export function formatIngredientList(ingredients, selectedIngredients, cocktailIngredients) {
  let ingredient = "";
  let selected = null;
  let formattedIngredients = [];

  //todo: try to make this just one map function

  _.forEach(cocktailIngredients, function(cocktailIngredient, index) {
    ingredient = _.find(ingredients, {
      ingredientId: cocktailIngredient.ingredientId
    })

    selected = !_.isUndefined(_.find(selectedIngredients, {
      ingredientId: cocktailIngredient.ingredientId
    }));

    formattedIngredients.push(
      <li key={ingredient.ingredientId}>
        {cocktailIngredient.amount} -
        {
          selected
            ? <span> {ingredient.name} </span>
            : <b> {ingredient.name} </b>
        }
      </li>
    )
  });

  return formattedIngredients;
}
