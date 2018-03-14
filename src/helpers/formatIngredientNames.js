import _ from 'lodash';
import React from 'react';

export function formatIngredientNames(ingredients, selectedIngredients, cocktailIngredients) {
  let ingredientNames = [];
  let ingredientName = "";

  _.forEach(cocktailIngredients, function(cocktailIngredient, index) {
    ingredientName = _.find(selectedIngredients, {
      ingredientId: cocktailIngredient.ingredientId
    })
    //if ingredient is selected
    if (ingredientName) {
      ingredientNames.push(
        <span key = {index}>
          { index ? ', ' : '' }
          <b>{ingredientName.name}</b>
        </span>
      )
    // else ingredient is not selected
    } else {
      ingredientName = _.find(ingredients, {
        ingredientId: cocktailIngredient.ingredientId
      })
        ingredientNames.push(
          <span key = {index} >
            {index ? ', ' : ''}
            {ingredientName.name}
          </span>
        )
    }
  });

  return ingredientNames;
}
